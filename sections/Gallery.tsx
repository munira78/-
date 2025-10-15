import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import type { GalleryImage } from '../types';

interface GalleryProps {
  images: GalleryImage[];
  isLoggedIn: boolean;
  onAdd: () => void;
  onEdit: (image: GalleryImage) => void;
  onDelete: (id: number) => void;
}

const Gallery: React.FC<GalleryProps> = ({ images, isLoggedIn, onAdd, onEdit, onDelete }) => {
  return (
    <SectionWrapper id="gallery" title="المعرض والمعامل" subtitle="جولة مصورة في ورش العمل والمعامل المجهزة بأحدث التقنيات">
       {isLoggedIn && (
        <div className="text-center mb-8">
            <button 
              onClick={onAdd} 
              className="px-6 py-2 bg-yellow-400 text-[#0a192f] font-bold rounded-lg hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-[#0a192f]"
            >
                إضافة صورة جديدة
            </button>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover aspect-video transform group-hover:scale-110 transition-transform duration-500"
            />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <p className="text-white text-center p-2">{image.alt}</p>
             </div>
             {isLoggedIn && (
                <div className="absolute top-2 right-2 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => onEdit(image)} 
                      className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      aria-label={`تعديل صورة: ${image.alt}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                    </button>
                    <button 
                      onClick={() => onDelete(image.id)} 
                      className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      aria-label={`حذف صورة: ${image.alt}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                    </button>
                </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
