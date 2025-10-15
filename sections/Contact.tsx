import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import type { ContactInfo } from '../types';

interface ContactProps {
  info: ContactInfo;
  isLoggedIn: boolean;
  onEdit: () => void;
}

const Contact: React.FC<ContactProps> = ({ info, isLoggedIn, onEdit }) => {
  return (
    <SectionWrapper id="contact" title="تواصل معنا">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-6 font-cairo">أرسل لنا رسالة</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">الاسم الكامل</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">البريد الإلكتروني</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">رسالتك</label>
              <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-yellow-400 text-[#0a192f] font-bold rounded-md hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-gray-800">
              إرسال
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
            <div className="relative bg-gray-800/50 p-8 rounded-lg shadow-lg group">
                 {isLoggedIn && (
                    <button 
                        onClick={onEdit} 
                        className="absolute top-3 left-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        aria-label="تعديل معلومات الاتصال"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                    </button>
                )}
                 <h3 className="text-2xl font-bold text-white mb-6 font-cairo">معلومات الاتصال</h3>
                 <div className="space-y-4 text-lg">
                    <p className="flex items-center"><svg className="w-6 h-6 text-yellow-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> {info.address}</p>
                    <p className="flex items-center"><svg className="w-6 h-6 text-yellow-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> {info.phone}</p>
                    <p className="flex items-center"><svg className="w-6 h-6 text-yellow-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> {info.email}</p>
                 </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="https://picsum.photos/seed/map/600/400" alt="Map to Al-Salam Institute" className="w-full h-full object-cover"/>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
