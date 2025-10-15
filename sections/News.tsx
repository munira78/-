import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import type { NewsItem } from '../types';

interface NewsCardProps {
    item: NewsItem;
    isLoggedIn: boolean;
    onEdit: (item: NewsItem) => void;
    onDelete: (id: number) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ item, isLoggedIn, onEdit, onDelete }) => (
  <div className="relative bg-gray-800/50 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row group">
    {isLoggedIn && (
      <div className="absolute top-4 left-4 flex gap-2 z-10">
        <button 
          onClick={() => onEdit(item)} 
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-gray-800"
          aria-label={`تعديل خبر: ${item.title}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
        </button>
        <button 
          onClick={() => onDelete(item.id)} 
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-gray-800"
          aria-label={`حذف خبر: ${item.title}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
        </button>
      </div>
    )}
    <img src={item.image} alt="" className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
    <div className="p-6 flex flex-col">
      <p className="text-sm text-yellow-400 mb-2">{item.date}</p>
      <h3 className="text-xl font-bold text-white font-cairo mb-2">{item.title}</h3>
      <p className="text-gray-300 flex-grow">{item.content}</p>
    </div>
  </div>
);

interface NewsProps {
  items: NewsItem[];
  isLoggedIn: boolean;
  onAdd: () => void;
  onEdit: (item: NewsItem) => void;
  onDelete: (id: number) => void;
}

const News: React.FC<NewsProps> = ({ items, isLoggedIn, onAdd, onEdit, onDelete }) => {
  return (
    <SectionWrapper id="news" title="الأخبار والأنشطة" subtitle="ابق على اطلاع بآخر المستجدات والفعاليات في القسم">
       {isLoggedIn && (
        <div className="text-center mb-8">
            <button 
              onClick={onAdd} 
              className="px-6 py-2 bg-yellow-400 text-[#0a192f] font-bold rounded-lg hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-[#0a192f]"
            >
                إضافة خبر جديد
            </button>
        </div>
      )}
      <div className="space-y-8 max-w-5xl mx-auto">
        {items.map((item) => (
          <NewsCard key={item.id} item={item} isLoggedIn={isLoggedIn} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default News;
