import React from 'react';

const AboutContact: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-32 border-t border-[#f0f0f0]/5 relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 -z-10 geo-grid-dense pointer-events-none"></div>

      <div className="flex flex-col items-center text-center relative z-10">
        <h2 className="font-headline text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight mb-6 text-[#f0f0f0] hover:text-[#E8FF47] transition-colors duration-500 cursor-default">
          Say hello.
        </h2>
        <p className="text-lg text-[#f0f0f0]/40 max-w-2xl mb-12">
          For collabs, press stuff, or just to say your desk has been bonked.
        </p>
        <a href="mailto:tantucore@gmail.com" className="glass-card px-8 py-4 rounded-lg group inline-block">
          <span className="font-headline text-xl md:text-2xl text-[#f0f0f0] tracking-wide group-hover:text-[#E8FF47] transition-colors duration-300">
            tantucore@gmail.com
          </span>
        </a>
      </div>
    </section>
  );
};

export default AboutContact;
