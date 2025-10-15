import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

interface CurriculumProps {
  courses: string[];
  isLoggedIn: boolean;
  onAdd: () => void;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const Curriculum: React.FC<CurriculumProps> = ({ courses, isLoggedIn, onAdd, onEdit, onDelete }) => {

  return (
    <SectionWrapper id="curriculum" title="المناهج الدراسسية" subtitle="خطة دراسية متكاملة تجمع بين النظرية والتطبيق العملي">
        <div className="max-w-4xl mx-auto bg-gray-800/50 p-8 rounded-lg border-2 border-dashed border-gray-600">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-yellow-400 font-cairo">المواد الدراسية الرئيسية</h3>
                {isLoggedIn && (
                    <button 
                      onClick={onAdd} 
                      className="px-4 py-2 bg-yellow-400 text-[#0a192f] font-bold rounded-lg hover:bg-yellow-500 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-gray-800"
                    >
                        إضافة مادة
                    </button>
                )}
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                {courses.map((course, index) => (
                    <li key={index} className="flex items-center group">
                        <svg className="w-5 h-5 text-yellow-400 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="flex-grow">{course}</span>
                        {isLoggedIn && (
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button 
                                  onClick={() => onEdit(index)} 
                                  className="p-1 text-blue-400 hover:text-blue-300 rounded-full focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                  aria-label={`تعديل مادة: ${course}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                                </button>
                                <button 
                                  onClick={() => onDelete(index)} 
                                  className="p-1 text-red-500 hover:text-red-400 rounded-full focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                  aria-label={`حذف مادة: ${course}`}
                                >
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    </SectionWrapper>
  );
};

export default Curriculum;
