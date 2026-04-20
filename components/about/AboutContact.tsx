import React from 'react';

const AboutContact: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-32 border-t border-on-surface/10 relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns%3D%22http://www.w3.org/2000/svg%22 width%3D%2220%22 height%3D%2220%22 viewBox%3D%220 0 20 20%22><circle cx%3D%2210%22 cy%3D%2210%22 r%3D%221%22 fill%3D%22%23ffffff%22 opacity%3D%220.1%22/%3E</svg>')] pointer-events-none"></div>
      
      <div className="flex flex-col items-center text-center relative z-10">
        <h2 className="font-headline text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight mb-6 transition-all duration-500 group-hover:text-primary/90 hover:scale-[1.02]">
          Say hello.
        </h2>
        <p className="body-lg text-lg text-on-surface-variant max-w-2xl mb-12 transition-all duration-500 hover:text-on-surface/80">
          For collabs, press stuff, or just to say your desk has been bonked.
        </p>
        <a href="mailto:tantucore@gmail.com" className="bg-surface-container-low px-8 py-4 rounded-full border border-on-surface/10 hover:bg-surface-container transition-all duration-500 transform-gpu hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/10 cursor-pointer group-flex">
          <span className="font-headline text-xl md:text-2xl text-on-surface tracking-wide transition-all duration-500 group-hover:text-primary">
            tantucore@gmail.com
          </span>
        </a>
      </div>
    </section>
  );
};

export default AboutContact;
