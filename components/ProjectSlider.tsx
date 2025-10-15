import React, { useState, useEffect } from 'react';
import type { StudentProject } from '../types';

interface ProjectSliderProps {
  projects: StudentProject[];
  isLoggedIn: boolean;
  onEdit: (project: StudentProject) => void;
  onDelete: (id: number) => void;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects, isLoggedIn, onEdit, onDelete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= projects.length && projects.length > 0) {
      setCurrentIndex(projects.length - 1);
    } else if (projects.length === 0) {
        setCurrentIndex(0);
    }
  }, [projects, currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!projects || projects.length === 0) {
    return (
        <div className="text-center p-8">
            <p>لا توجد مشاريع لعرضها.</p>
        </div>
    );
  }
  
  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-96 md:h-[500px] group">
        <div
          style={{ backgroundImage: `url(${currentProject.image})` }}
          className="w-full h-full rounded-lg bg-center bg-cover duration-500"
          role="img"
          aria-label={currentProject.title}
        ></div>
        
        <div className="absolute bottom-0 right-0 left-0 bg-black/60 text-white p-4 rounded-b-lg">
          <h3 className="text-xl font-bold font-cairo">{currentProject.title}</h3>
          <p className="text-sm">{currentProject.student} - {currentProject.year}</p>
        </div>

        {isLoggedIn && (
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <button 
              onClick={() => onEdit(currentProject)} 
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-[#0a192f]"
              aria-label={`تعديل مشروع: ${currentProject.title}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
            </button>
            <button 
              onClick={() => onDelete(currentProject.id)} 
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-[#0a192f]"
              aria-label={`حذف مشروع: ${currentProject.title}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
            </button>
          </div>
        )}

        {/* Left Arrow */}
        <button onClick={goToPrevious} aria-label="المشروع السابق" className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400">&#10094;</button>
        {/* Right Arrow */}
        <button onClick={goToNext} aria-label="المشروع التالي" className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400">&#10095;</button>

         <div className="absolute bottom-[-30px] w-full flex justify-center space-x-2">
              {projects.map((project, index) => (
                  <button 
                    key={index} 
                    onClick={() => setCurrentIndex(index)} 
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-yellow-400 scale-125' : 'bg-gray-500'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-[#0a192f]`}
                    aria-label={`الانتقال إلى مشروع ${index + 1}: ${project.title}`}
                  ></button>
              ))}
          </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
