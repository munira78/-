import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import type { AboutCard as AboutCardType } from '../types';

interface InfoCardProps {
    card: AboutCardType;
    icon: React.ReactNode;
    isLoggedIn: boolean;
    onEdit: (card: AboutCardType) => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ card, icon, isLoggedIn, onEdit }) => (
    <div className="relative bg-gray-800/50 p-6 rounded-lg border-l-4 border-yellow-400 shadow-lg transform hover:scale-105 hover:shadow-yellow-400/20 transition-all duration-300 group">
        {isLoggedIn && (
            <button 
                onClick={() => onEdit(card)} 
                className="absolute top-3 left-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                aria-label={`تعديل قسم "${card.title}"`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
            </button>
        )}
        <div className="flex items-center mb-4">
            <div className="text-yellow-400 mr-4" aria-hidden="true">{icon}</div>
            <h3 className="text-2xl font-bold text-white font-cairo">{card.title}</h3>
        </div>
        <p className="text-gray-300">{card.content}</p>
    </div>
);

const icons: { [key: string]: React.ReactNode } = {
    'رسالتنا': <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    'رؤيتنا': <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
    'أهدافنا': <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
};

interface AboutProps {
  content: AboutCardType[];
  isLoggedIn: boolean;
  onEditCard: (card: AboutCardType) => void;
}

const About: React.FC<AboutProps> = ({ content, isLoggedIn, onEditCard }) => {
  return (
    <SectionWrapper id="about" title="نبذة عن القسم">
      <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
        {content.map((card) => (
            <InfoCard 
                key={card.title} 
                card={card}
                icon={icons[card.title]}
                isLoggedIn={isLoggedIn}
                onEdit={onEditCard}
            />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
