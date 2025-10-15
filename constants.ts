import type { NavLink, FacultyMember, StudentProject, NewsItem, GalleryImage, HomeContent, AboutCard, ContactInfo } from './types';

export const navLinks: NavLink[] = [
  { id: 'home', title: 'الصفحة الرئيسية' },
  { id: 'about', title: 'نبذة عن القسم' },
  { id: 'faculty', title: 'أعضاء هيئة التدريس' },
  { id: 'curriculum', title: 'المناهج الدراسية' },
  { id: 'projects', title: 'المشاريع الطلابية' },
  { id: 'gallery', title: 'المعرض والمعامل' },
  { id: 'news', title: 'الأخبار والأنشطة' },
  { id: 'contact', title: 'تواصل معنا' },
];

export const facultyMembers: FacultyMember[] = [
  { id: 1, name: 'م. أحمد علي', role: 'رئيس القسم', image: 'https://picsum.photos/seed/faculty1/400/400', bio: 'متخصص في التصميم المعماري الحديث والاستدامة، بخبرة تمتد لأكثر من 15 عامًا في الإشراف على المشاريع الكبرى.' },
  { id: 2, name: 'د. فاطمة محمد', role: 'عضو هيئة تدريس', image: 'https://picsum.photos/seed/faculty2/400/400', bio: 'باحثة في تاريخ العمارة الإسلامية وتأثيرها على التصاميم المعاصرة، حاصلة على دكتوراه في فلسفة العمارة.' },
  { id: 3, name: 'م. خالد عبدالله', role: 'عضو هيئة تدريس', image: 'https://picsum.photos/seed/faculty3/400/400', bio: 'خبير في برامج النمذجة ثلاثية الأبعاد والرسم بالحاسوب، يركز على دمج التكنولوجيا في العملية التعليمية.' },
  { id: 4, name: 'م. سارة إبراهيم', role: 'عضو هيئة تدريس', image: 'https://picsum.photos/seed/faculty4/400/400', bio: 'مهندسة معمارية متخصصة في التصميم الداخلي وتخطيط المساحات، تعمل على تطوير مهارات الطلاب الإبداعية.' },
];

export const studentProjects: StudentProject[] = [
  { id: 1, title: 'تصميم مركز ثقافي متكامل', student: 'علي حسن', year: 2023, image: 'https://picsum.photos/seed/project1/800/600' },
  { id: 2, title: 'مشروع تخرج: مجمع سكني حديث', student: 'نور سالم', year: 2023, image: 'https://picsum.photos/seed/project2/800/600' },
  { id: 3, title: 'إعادة تأهيل مبنى تاريخي', student: 'محمد عمر', year: 2022, image: 'https://picsum.photos/seed/project3/800/600' },
  { id: 4, title: 'تصميم فندق سياحي', student: 'هبة ياسين', year: 2022, image: 'https://picsum.photos/seed/project4/800/600' },
  { id: 5, title: 'مخططات تنفيذية لفيلا', student: 'يوسف خالد', year: 2023, image: 'https://picsum.photos/seed/project5/800/600' },
];

export const newsItems: NewsItem[] = [
  { 
    id: 1,
    title: 'ورشة عمل حول برامج التصميم ثلاثي الأبعاد', 
    date: '15 أكتوبر 2023', 
    content: 'نظم القسم ورشة عمل مكثفة للطلبة لتعريفهم بأحدث تقنيات برامج التصميم الهندسي ثلاثي الأبعاد وكيفية استخدامها في مشاريعهم.',
    image: 'https://picsum.photos/seed/news1/600/400'
  },
  { 
    id: 2,
    title: 'مشاركة متميزة في معرض المشاريع الطلابية', 
    date: '5 سبتمبر 2023', 
    content: 'حقق طلبة القسم مراكز متقدمة في المعرض السنوي للمشاريع الطلابية، حيث عرضوا تصاميم مبتكرة نالت استحسان الجميع.',
    image: 'https://picsum.photos/seed/news2/600/400'
  },
  { 
    id: 3,
    title: 'إعلان عن بدء التسجيل للفصل الدراسي الجديد', 
    date: '20 أغسطس 2023', 
    content: 'يعلن قسم الرسم الهندسي المعماري عن فتح باب القبول والتسجيل للطلبة الجدد. لمزيد من المعلومات، يرجى زيارة مكتب التسجيل.',
    image: 'https://picsum.photos/seed/news3/600/400'
  },
];

export const galleryImages: GalleryImage[] = [
    { id: 1, src: 'https://picsum.photos/seed/gallery1/600/400', alt: 'ورشة عمل للرسم الهندسي' },
    { id: 2, src: 'https://picsum.photos/seed/gallery2/600/400', alt: 'معمل الحاسوب للتصميم' },
    { id: 3, src: 'https://picsum.photos/seed/gallery3/600/400', alt: 'أدوات الرسم الهندسي' },
    { id: 4, src: 'https://picsum.photos/seed/gallery4/600/400', alt: 'مجسم لمشروع طالب' },
    { id: 5, src: 'https://picsum.photos/seed/gallery5/600/400', alt: 'الطلاب أثناء المحاضرة' },
    { id: 6, src: 'https://picsum.photos/seed/gallery6/600/400', alt: 'مكتبة القسم' },
];

export const homeContentData: HomeContent = {
  headline: 'قسم الرسم الهندسي المعماري',
  subtitle: 'إعداد فنيين متخصصين في الرسم المعماري والفني وفق أعلى معايير الجودة التقنية والإبداعية.'
};

export const aboutContentData: AboutCard[] = [
  {
    title: 'رسالتنا',
    content: 'إعداد فنيين متخصصين ومؤهلين في مجال الرسم المعماري والفني، قادرين على تلبية احتياجات سوق العمل المتطورة، وذلك من خلال توفير بيئة تعليمية محفزة وبرامج أكاديمية متوافقة مع معايير الجودة التقنية.'
  },
  {
    title: 'رؤيتنا',
    content: 'أن نكون القسم الرائد والمتميز في مجال التعليم التطبيقي الهندسي والفني على مستوى ليبيا، وأن نصبح مرجعاً في تخريج كوادر فنية مبتكرة تساهم بفعالية في النهضة العمرانية للبلاد.'
  },
  {
    title: 'أهدافنا',
    content: 'تطوير المهارات التقنية والعملية للطلبة من خلال التدريب المكثف. تعزيز روح الإبداع والابتكار في التصاميم الهندسية. دعم التحول نحو التعليم الرقمي وتوظيف التكنولوجيا الحديثة. ربط المخرجات التعليمية بمتطلبات سوق العمل.'
  }
];

export const coursesData: string[] = [
    "مبادئ الرسم الهندسي",
    "التصميم المعماري (1)",
    "تاريخ العمارة",
    "مواد البناء والإنشاء",
    "الرسم بالحاسوب (AutoCAD)",
    "التصميم المعماري (2)",
    "المنظور والظلال",
    "التصميم ثلاثي الأبعاد (3ds Max)",
    "إدارة المشاريع الهندسية",
    "الرسومات التنفيذية",
    "التصميم الداخلي",
    "مشروع التخرج"
];

export const contactInfoData: ContactInfo = {
    address: 'شارع الجمهورية، طرابلس، ليبيا',
    phone: '+218 21 123 4567',
    email: 'info@alsalam.edu.ly'
};