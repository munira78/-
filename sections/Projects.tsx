import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ProjectSlider from '../components/ProjectSlider';
import { StudentProject } from '../types';

interface ProjectsProps {
  projects: StudentProject[];
  isLoggedIn: boolean;
  onAdd: () => void;
  onEdit: (project: StudentProject) => void;
  onDelete: (id: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, isLoggedIn, onAdd, onEdit, onDelete }) => {
  return (
    <SectionWrapper id="projects" title="المشاريع الطلابية" subtitle="إبداعات طلابنا التي تترجم المعرفة إلى واقع ملموس">
       {isLoggedIn && (
        <div className="text-center mb-8">
            <button 
              onClick={onAdd} 
              className="px-6 py-2 bg-yellow-400 text-[#0a192f] font-bold rounded-lg hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-[#0a192f]"
            >
                إضافة مشروع جديد
            </button>
        </div>
      )}
      <ProjectSlider projects={projects} isLoggedIn={isLoggedIn} onEdit={onEdit} onDelete={onDelete} />
    </SectionWrapper>
  );
};

export default Projects;
