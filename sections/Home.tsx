import React from 'react';
import type { HomeContent } from '../types';

interface HomeProps {
  content: HomeContent;
  isLoggedIn: boolean;
  onEdit: () => void;
  onDiscoverMoreClick: () => void;
}

const Home: React.FC<HomeProps> = ({ content, isLoggedIn, onEdit, onDiscoverMoreClick }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center -mt-24">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/pano/1920/1080')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      </div>
      
      {isLoggedIn && (
        <button 
          onClick={onEdit}
          className="absolute top-28 left-4 z-20 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          تعديل المحتوى
        </button>
      )}

      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 font-cairo drop-shadow-lg">
          {content.headline}
        </h1>
        <p className="text-lg md:text-xl text-yellow-300 max-w-3xl mx-auto drop-shadow-md">
          {content.subtitle}
        </p>
        <button 
          onClick={onDiscoverMoreClick}
          className="mt-8 px-8 py-3 bg-yellow-400 text-[#0a192f] font-bold rounded-full hover:bg-yellow-500 transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-[#0a192f]"
        >
          اكتشف المزيد
        </button>
      </div>
    </section>
  );
};

export default Home;
