import React, { useState, useEffect, useRef } from 'react';
import type { FormField } from '../types';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Record<string, any>) => void;
  title: string;
  fields: FormField[];
  initialData: Record<string, any>;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave, title, fields, initialData }) => {
  const [formData, setFormData] = useState(initialData);
  const firstInputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
      setTimeout(() => firstInputRef.current?.focus(), 100); // Timeout for transition
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]" dir="rtl" role="dialog" aria-modal="true" aria-labelledby="edit-modal-title">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-lg relative animate-fade-in-down">
        <button
            onClick={onClose}
            className="absolute top-3 left-3 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="إغلاق"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <h2 id="edit-modal-title" className="text-2xl font-bold text-white text-center mb-6 font-cairo">{title}</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={String(field.name)} className="mb-4">
              <label htmlFor={String(field.name)} className="block text-gray-300 mb-2">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={String(field.name)}
                  name={String(field.name)}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  rows={4}
                  required
                  ref={index === 0 ? firstInputRef : null}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              ) : (
                <input
                  type={field.type}
                  id={String(field.name)}
                  name={String(field.name)}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  ref={index === 0 ? firstInputRef : null}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              )}
            </div>
          ))}
          <div className="flex justify-end gap-4 mt-8">
             <button type="button" onClick={onClose} className="px-6 py-2 rounded-md font-medium transition-colors duration-300 bg-gray-600 text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-gray-800">
                إلغاء
            </button>
            <button type="submit" className="px-6 py-2 rounded-md font-medium transition-colors duration-300 bg-yellow-400 text-[#0a192f] hover:bg-yellow-500 font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-gray-800">
                حفظ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
