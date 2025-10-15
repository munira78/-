import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import type { FacultyMember } from '../types';

interface FacultyCardProps {
  member: FacultyMember;
  isLoggedIn: boolean;
  onEdit: (member: FacultyMember) => void;
  onDelete: (id: number) => void;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ member, isLoggedIn, onEdit, onDelete }) => (
  <div className="relative bg-gray-800/50 rounded-lg overflow-hidden text-center p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
    {isLoggedIn && (
      <div className="absolute top-2 right-2 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={() => onEdit(member)} 
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label={`تعديل بيانات ${member.name}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
        </button>
        <button 
          onClick={() => onDelete(member.id)} 
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label={`حذف ${member.name}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
        </button>
      </div>
    )}
    <img 
      src={member.image} 
      alt={member.name} 
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-600 group-hover:border-yellow-400 transition-colors duration-300"
    />
    <h3 className="text-xl font-bold text-white font-cairo">{member.name}</h3>
    <p className="text-yellow-400">{member.role}</p>
    <p className="text-gray-400 text-sm mt-4 flex-grow">{member.bio}</p>
  </div>
);

interface FacultyProps {
  members: FacultyMember[];
  isLoggedIn: boolean;
  onAdd: () => void;
  onEdit: (member: FacultyMember) => void;
  onDelete: (id: number) => void;
}

const Faculty: React.FC<FacultyProps> = ({ members, isLoggedIn, onAdd, onEdit, onDelete }) => {
  return (
    <SectionWrapper id="faculty" title="أعضاء هيئة التدريس" subtitle="نخبة من الخبراء والمتخصصين في مجال الهندسة المعمارية">
      {isLoggedIn && (
        <div className="text-center mb-8">
            <button onClick={onAdd} className="px-6 py-2 bg-yellow-400 text-[#0a192f] font-bold rounded-lg hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-[#0a192f]">
                إضافة عضو جديد
            </button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member) => (
          <FacultyCard key={member.id} member={member} isLoggedIn={isLoggedIn} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Faculty;