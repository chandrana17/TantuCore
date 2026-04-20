import React from 'react';

const AboutSocialGrid: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 pb-32">
      <div className="mb-16">
        <h2 className="font-headline text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight mb-4">Find us online.</h2>
        <p className="body-lg text-lg text-on-surface-variant">We're building in public. Come watch it happen.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Discord Card */}
        <a href="https://discord.gg/CEd2ZJw2Gx" target="_blank" rel="noopener noreferrer" className="group relative flex flex-col items-center justify-center min-h-[200px] bg-surface-container-low border border-on-surface/10 rounded-lg md:col-span-2 md:row-span-2 gap-4 p-8 text-center hover:border-primary/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <span className="material-icons text-4xl text-primary group-hover:scale-110 transition-transform duration-300">hub</span>
          <h3 className="font-headline text-lg font-semibold text-on-surface">Discord</h3>
          <p className="text-on-surface/70 text-center max-w-md">
            Join our vibrant community of developers, creators, and innovators. Get help, share ideas, and collaborate on projects.
          </p>
          <span className="mt-4 flex items-center gap-2 font-headline text-primary/80 group-hover:text-primary transition-colors">
            Join Discord
            <span className="material-icons group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </span>
        </a>
        
        {/* YouTube Card */}
        <a href="https://youtube.com/@tantucore?si=IH3blYoPeLPITFhI" target="_blank" rel="noopener noreferrer" className="group relative flex flex-col items-center justify-center min-h-[200px] bg-surface-container-low border border-on-surface/10 rounded-lg gap-4 p-6 text-center hover:border-primary/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <span className="material-icons text-3xl text-primary group-hover:scale-110 transition-transform duration-300">video_library</span>
          <h3 className="font-headline text-lg font-semibold text-on-surface">YouTube</h3>
          <p className="text-on-surface/70 text-center max-w-sm">
            Watch tutorials, deep dives, and behind-the-scenes content about TantuCore development.
          </p>
          <span className="mt-4 flex items-center gap-2 font-headline text-primary/80 group-hover:text-primary transition-colors">
            Watch Videos
            <span className="material-icons group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </span>
        </a>
        
        {/* Instagram Card */}
        <a href="https://www.instagram.com/tantucore?igsh=eW9vdmtmcTRzNXlz" target="_blank" rel="noopener noreferrer" className="group relative flex flex-col items-center justify-center min-h-[200px] bg-surface-container-low border border-on-surface/10 rounded-lg gap-4 p-6 text-center hover:border-primary/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <span className="material-icons text-3xl text-primary group-hover:scale-110 transition-transform duration-300">grid_view</span>
          <h3 className="font-headline text-lg font-semibold text-on-surface">Instagram</h3>
          <p className="text-on-surface/70 text-center max-w-sm">
            Follow our visual journey, development snapshots, and community highlights.
          </p>
          <span className="mt-4 flex items-center gap-2 font-headline text-primary/80 group-hover:text-primary transition-colors">
            Follow Us
            <span className="material-icons group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </span>
        </a>
        
        {/* X Card */}
        <a href="https://x.com/TantuCore" target="_blank" rel="noopener noreferrer" className="group relative flex min-h-[200px] bg-surface-container-low border border-on-surface/10 rounded-lg md:col-span-2 items-center gap-6 p-8 hover:border-primary/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <div className="flex flex-col items-center gap-3">
            <span className="material-icons text-3xl text-primary group-hover:scale-110 transition-transform duration-300">alternate_email</span>
            <h3 className="font-headline text-lg font-semibold text-on-surface">X (Twitter)</h3>
          </div>
          <div className="text-center md:text-left flex-1">
            <p className="text-on-surface/70 max-w-md mx-auto md:mx-0">
              Stay updated with real-time news, announcements, and community conversations.
            </p>
            <span className="mt-4 flex items-center justify-center md:justify-start gap-2 font-headline text-primary/80 group-hover:text-primary transition-colors">
              Follow on X
              <span className="material-icons group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AboutSocialGrid;
