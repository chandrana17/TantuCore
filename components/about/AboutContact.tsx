import React from 'react';

const AboutContact: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-32 border-t border-on-surface/10">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-headline text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight mb-6">Say hello.</h2>
        <p className="body-lg text-lg text-on-surface-variant max-w-2xl mb-12">
          For collabs, press stuff, or just to say your desk has been bonked.
        </p>
        <div className="bg-surface-container-low px-8 py-4 rounded-full border border-on-surface/10">
          <span className="font-headline text-xl md:text-2xl text-on-surface tracking-wide">
            hello@tantucore.com
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
