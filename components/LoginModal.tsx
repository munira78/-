import React, { useState, useEffect, useRef } from 'react';

interface LoginModalProps {
  onLogin: (user: string, pass: string, rememberMe: boolean) => void;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameInputRef.current?.focus();
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password, rememberMe);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]" dir="rtl" role="dialog" aria-modal="true" aria-labelledby="login-modal-title">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-sm relative">
        <button 
            onClick={onClose} 
            className="absolute top-3 left-3 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="إغلاق"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <h2 id="login-modal-title" className="text-2xl font-bold text-white text-center mb-6 font-cairo">تسجيل دخول المسؤول</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300 mb-2">اسم المستخدم</label>
            <input 
              type="text" 
              id="username"
              ref={usernameInputRef}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password"  className="block text-gray-300 mb-2">كلمة المرور</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" 
            />
          </div>
           <div className="mb-6 flex items-center">
              <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-yellow-400 focus:ring-yellow-500 border-gray-500 rounded bg-gray-700"
              />
              <label htmlFor="remember-me" className="mr-2 block text-sm text-gray-300">
                  تذكرني
              </label>
          </div>
          <button type="submit" className="w-full py-3 bg-yellow-400 text-[#0a192f] font-bold rounded-md hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-gray-800">
            دخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
