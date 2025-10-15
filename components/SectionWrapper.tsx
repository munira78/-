
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-cairo relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-yellow-400"></span>
          </h2>
          {subtitle && <p className="mt-4 text-lg text-gray-400">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
