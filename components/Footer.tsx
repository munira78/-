
import React from 'react';
import type { ContactInfo } from '../types';

interface FooterProps {
  info: ContactInfo;
}

const Footer: React.FC<FooterProps> = ({ info }) => {
  return (
    <footer className="bg-gray-900 border-t-2 border-yellow-400/20 text-gray-400">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-cairo">معهد السلام الفني</h3>
            <p className="text-sm">قسم الرسم الهندسي المعماري</p>
            <p className="text-sm mt-2">نحو مستقبل هندسي واعد.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-cairo">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-yellow-400">عن المعهد</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-yellow-400">القبول والتسجيل</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-yellow-400">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-cairo">تواصل معنا</h3>
            <p className="text-sm">
              <span className="font-bold">العنوان:</span> {info.address}
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold">الهاتف:</span> {info.phone}
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold">البريد الإلكتروني:</span> {info.email}
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} معهد السلام الفني للمهن الشاملة. جميع الحقوق محفوظة.</p>
          <p className="mt-2">تم برمجته بواسطة م. منيرة القرج</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;