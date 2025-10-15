import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Faculty from './sections/Faculty';
import Curriculum from './sections/Curriculum';
import Projects from './sections/Projects';
import Gallery from './sections/Gallery';
import News from './sections/News';
import Contact from './sections/Contact';
import LoginModal from './components/LoginModal';
import EditModal from './components/EditModal';
import ConfirmModal from './components/ConfirmModal';
import { navLinks, facultyMembers as initialFaculty, studentProjects as initialProjects, newsItems as initialNews, galleryImages as initialGallery, homeContentData as initialHome, aboutContentData as initialAbout, coursesData as initialCourses, contactInfoData as initialContact } from './constants';
import type { FacultyMember, StudentProject, NewsItem, GalleryImage, HomeContent, AboutCard, ContactInfo, FormField } from './types';

const generateRandomPassword = (length = 12) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = new Uint32Array(length);
    window.crypto.getRandomValues(values);
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[values[i] % chars.length];
    }
    return result;
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Modals state
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  
  // Modal Configurations
  const [editModalConfig, setEditModalConfig] = useState<{ title: string; fields: FormField[]; initialData: any; onSave: (data: any) => void; } | null>(null);
  const [confirmModalConfig, setConfirmModalConfig] = useState<{ title: string; message: string; onConfirm: () => void; } | null>(null);

  // Content States
  const [homeContent, setHomeContent] = useState<HomeContent>(initialHome);
  const [aboutContent, setAboutContent] = useState<AboutCard[]>(initialAbout);
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>(initialFaculty);
  const [courses, setCourses] = useState<string[]>(initialCourses);
  const [studentProjects, setStudentProjects] = useState<StudentProject[]>(initialProjects);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(initialGallery);
  const [newsItems, setNewsItems] = useState<NewsItem[]>(initialNews);
  const [contactInfo, setContactInfo] = useState<ContactInfo>(initialContact);

  useEffect(() => {
    // Check for saved login status on initial load
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }

    // Check for admin password, create one if it doesn't exist
    let adminPassword = localStorage.getItem('adminPassword');
    if (!adminPassword) {
      const newPassword = generateRandomPassword();
      localStorage.setItem('adminPassword', newPassword);
      adminPassword = newPassword;
      // Alert the user with the new credentials for the first time setup
      alert(
        'مرحباً بك في لوحة تحكم المسؤول!\n' +
        'تم إنشاء حساب مسؤول افتراضي لك.\n\n' +
        `اسم المستخدم: admin\n` +
        `كلمة المرور: ${newPassword}\n\n` +
        'يرجى حفظ هذه البيانات في مكان آمن.'
      );
    }
  }, []);

    // Effect for observing sections on scroll
  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -70% 0px", // Trigger when the section is in the upper part of the viewport
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 96; // Corresponds to pt-24 on main
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
           top: offsetPosition,
           behavior: "smooth"
      });
      setActiveSection(id);
    }
  };


  const handleLogin = (user: string, pass: string, rememberMe: boolean) => {
    const storedPassword = localStorage.getItem('adminPassword');
    if (user === 'admin' && pass === storedPassword) {
      setIsLoggedIn(true);
      setIsLoginModalOpen(false);
      if (rememberMe) {
        localStorage.setItem('isLoggedIn', 'true');
      }
    } else {
      alert('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const openEditModal = (title: string, fields: FormField[], initialData: any, onSave: (data: any) => void) => {
    setEditModalConfig({ title, fields, initialData, onSave });
    setIsEditModalOpen(true);
  };
  
  const openConfirmModal = (title: string, message: string, onConfirm: () => void) => {
    setConfirmModalConfig({ title, message, onConfirm });
    setIsConfirmModalOpen(true);
  };

  // --- Handlers for each section ---

  const handleEditHome = () => openEditModal('تعديل الصفحة الرئيسية', [{name: 'headline', label: 'العنوان الرئيسي', type: 'text'}, {name: 'subtitle', label: 'العنوان الفرعي', type: 'textarea'}], homeContent, setHomeContent);
  
  const handleEditAbout = (card: AboutCard) => openEditModal(`تعديل "${card.title}"`, [{name: 'content', label: 'المحتوى', type: 'textarea'}], card, (data) => setAboutContent(prev => prev.map(c => c.title === card.title ? {...c, ...data} : c)));

  const handleSaveFaculty = (member: FacultyMember) => {
    if (member.id) {
        setFacultyMembers(prev => prev.map(m => m.id === member.id ? member : m));
    } else {
        setFacultyMembers(prev => [...prev, { ...member, id: Date.now() }]);
    }
    setIsEditModalOpen(false);
  };
  const handleAddFaculty = () => openEditModal('إضافة عضو هيئة تدريس', [{name: 'name', label: 'الاسم', type: 'text'},{name: 'role', label: 'المنصب', type: 'text'},{name: 'image', label: 'رابط الصورة', type: 'text'}, {name: 'bio', label: 'نبذة تعريفية', type: 'textarea'}], {}, handleSaveFaculty);
  const handleEditFaculty = (member: FacultyMember) => openEditModal('تعديل عضو هيئة تدريس', [{name: 'name', label: 'الاسم', type: 'text'},{name: 'role', label: 'المنصب', type: 'text'},{name: 'image', label: 'رابط الصورة', type: 'text'}, {name: 'bio', label: 'نبذة تعريفية', type: 'textarea'}], member, handleSaveFaculty);
  const handleDeleteFaculty = (id: number) => openConfirmModal('حذف عضو هيئة تدريس', 'هل أنت متأكد من رغبتك في حذف هذا العضو؟', () => setFacultyMembers(p => p.filter(m => m.id !== id)));

  const handleAddCourse = () => { const newCourse = prompt("أدخل اسم المادة الدراسية:"); if(newCourse) setCourses(prev => [...prev, newCourse]); };
  const handleEditCourse = (index: number) => { const updatedCourse = prompt("تعديل المادة:", courses[index]); if(updatedCourse) setCourses(prev => prev.map((c, i) => i === index ? updatedCourse : c)); };
  const handleDeleteCourse = (index: number) => openConfirmModal('حذف مادة دراسية', 'هل أنت متأكد من رغبتك في حذف هذه المادة؟', () => setCourses(p => p.filter((_, i) => i !== index)));

  const handleSaveProject = (project: StudentProject) => {
    if (project.id) {
        setStudentProjects(prev => prev.map(p => p.id === project.id ? project : p));
    } else {
        setStudentProjects(prev => [...prev, { ...project, id: Date.now() }]);
    }
    setIsEditModalOpen(false);
  };
  const handleAddProject = () => openEditModal('إضافة مشروع', [{name: 'title', label: 'عنوان المشروع', type: 'text'}, {name: 'student', label: 'اسم الطالب', type: 'text'}, {name: 'year', label: 'السنة', type: 'number'}, {name: 'image', label: 'رابط الصورة', type: 'text'}], {}, handleSaveProject);
  const handleEditProject = (project: StudentProject) => openEditModal('تعديل مشروع', [{name: 'title', label: 'عنوان المشروع', type: 'text'}, {name: 'student', label: 'اسم الطالب', type: 'text'}, {name: 'year', label: 'السنة', type: 'number'}, {name: 'image', label: 'رابط الصورة', type: 'text'}], project, handleSaveProject);
  const handleDeleteProject = (id: number) => openConfirmModal('حذف مشروع', 'هل أنت متأكد من رغبتك في حذف هذا المشروع؟', () => setStudentProjects(p => p.filter(proj => proj.id !== id)));

  const handleSaveGalleryImage = (image: GalleryImage) => {
    if (image.id) {
        setGalleryImages(prev => prev.map(i => i.id === image.id ? image : i));
    } else {
        setGalleryImages(prev => [...prev, { ...image, id: Date.now() }]);
    }
    setIsEditModalOpen(false);
  };
  const handleAddGalleryImage = () => openEditModal('إضافة صورة للمعرض', [{name: 'src', label: 'رابط الصورة', type: 'text'}, {name: 'alt', label: 'النص البديل', type: 'text'}], {}, handleSaveGalleryImage);
  const handleEditGalleryImage = (image: GalleryImage) => openEditModal('تعديل الصورة', [{name: 'src', label: 'رابط الصورة', type: 'text'}, {name: 'alt', label: 'النص البديل', type: 'text'}], image, handleSaveGalleryImage);
  const handleDeleteGalleryImage = (id: number) => openConfirmModal('حذف صورة', 'هل أنت متأكد من رغبتك في حذف هذه الصورة؟', () => setGalleryImages(p => p.filter(img => img.id !== id)));

  const handleSaveNews = (item: NewsItem) => {
     if (item.id) {
        setNewsItems(prev => prev.map(n => n.id === item.id ? item : n));
    } else {
        setNewsItems(prev => [...prev, { ...item, id: Date.now() }]);
    }
    setIsEditModalOpen(false);
  }
  const handleAddNews = () => openEditModal('إضافة خبر جديد', [{name: 'title', label: 'العنوان', type: 'text'}, {name: 'date', label: 'التاريخ', type: 'text'}, {name: 'content', label: 'المحتوى', type: 'textarea'}, {name: 'image', label: 'رابط الصورة', type: 'text'}], {}, handleSaveNews);
  const handleEditNews = (item: NewsItem) => openEditModal('تعديل الخبر', [{name: 'title', label: 'العنوان', type: 'text'}, {name: 'date', label: 'التاريخ', type: 'text'}, {name: 'content', label: 'المحتوى', type: 'textarea'}, {name: 'image', label: 'رابط الصورة', type: 'text'}], item, handleSaveNews);
  const handleDeleteNews = (id: number) => openConfirmModal('حذف خبر', 'هل أنت متأكد من رغبتك في حذف هذا الخبر؟', () => setNewsItems(p => p.filter(n => n.id !== id)));
  
  const handleEditContact = () => openEditModal('تعديل معلومات الاتصال', [{name: 'address', label: 'العنوان', type: 'text'}, {name: 'phone', label: 'الهاتف', type: 'text'}, {name: 'email', label: 'البريد الإلكتروني', type: 'text'}], contactInfo, setContactInfo);

  return (
    <div className="bg-[#0a192f] text-gray-300 min-h-screen">
      <Header 
        navLinks={navLinks} 
        activeSection={activeSection}
        onNavLinkClick={handleNavClick}
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
      />
      <main className="pt-24">
        <Home content={homeContent} isLoggedIn={isLoggedIn} onEdit={handleEditHome} onDiscoverMoreClick={() => handleNavClick('about')} />
        <About content={aboutContent} isLoggedIn={isLoggedIn} onEditCard={handleEditAbout} />
        <Faculty members={facultyMembers} isLoggedIn={isLoggedIn} onAdd={handleAddFaculty} onEdit={handleEditFaculty} onDelete={handleDeleteFaculty} />
        <Curriculum courses={courses} isLoggedIn={isLoggedIn} onAdd={handleAddCourse} onEdit={handleEditCourse} onDelete={handleDeleteCourse} />
        <Projects projects={studentProjects} isLoggedIn={isLoggedIn} onAdd={handleAddProject} onEdit={handleEditProject} onDelete={handleDeleteProject} />
        <Gallery images={galleryImages} isLoggedIn={isLoggedIn} onAdd={handleAddGalleryImage} onEdit={handleEditGalleryImage} onDelete={handleDeleteGalleryImage} />
        <News items={newsItems} isLoggedIn={isLoggedIn} onAdd={handleAddNews} onEdit={handleEditNews} onDelete={handleDeleteNews} />
        <Contact info={contactInfo} isLoggedIn={isLoggedIn} onEdit={handleEditContact} />
      </main>
      <Footer info={contactInfo} />

      {isLoginModalOpen && <LoginModal onLogin={handleLogin} onClose={() => setIsLoginModalOpen(false)} />}
      
      {isEditModalOpen && editModalConfig && (
        <EditModal 
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={(data) => {
            editModalConfig.onSave(data);
            setIsEditModalOpen(false);
          }}
          title={editModalConfig.title}
          fields={editModalConfig.fields}
          initialData={editModalConfig.initialData}
        />
      )}

      {isConfirmModalOpen && confirmModalConfig && (
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          onConfirm={confirmModalConfig.onConfirm}
          title={confirmModalConfig.title}
          message={confirmModalConfig.message}
        />
      )}
    </div>
  );
};

export default App;