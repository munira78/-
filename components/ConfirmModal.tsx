import React, { useEffect, useRef } from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      cancelButtonRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]" dir="rtl" role="dialog" aria-modal="true" aria-labelledby="confirm-modal-title">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md relative animate-fade-in-down">
        <button
            onClick={onClose}
            className="absolute top-3 left-3 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="إغلاق"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 text-red-500 w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <h2 id="confirm-modal-title" className="text-2xl font-bold text-white mb-4 font-cairo">{title}</h2>
            <p className="text-gray-300 mb-8">{message}</p>
        </div>
        <div className="flex justify-center gap-4">
            <button 
                ref={cancelButtonRef}
                onClick={onClose} 
                className="px-6 py-2 rounded-md font-medium transition-colors duration-300 bg-gray-600 text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-gray-800"
            >
                إلغاء
            </button>
            <button 
                onClick={handleConfirm} 
                className="px-6 py-2 rounded-md font-medium transition-colors duration-300 bg-red-600 text-white hover:bg-red-700 font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-gray-800"
            >
                نعم، قم بالحذف
            </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
