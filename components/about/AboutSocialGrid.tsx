import React from 'react';

const AboutSocialGrid: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Discord Card - Large with col-span-2 and row-span-2 */}
        <div className="relative flex flex-col items-center justify-center min-h-[200px] bg-surface-container-low border border-on-surface/10 rounded-lg md:col-span-2 md:row-span-2 flex-col gap-4 p-8 text-center">
          <span className="material-icons text-4xl text-primary">hub</span>
          <h3 className="font-headline text-lg font-semibold text-on-surface">Discord</h3>
          <p className="text-on-surface/70 text-center max-w-md">
            Join our vibrant community of developers, creators, and innovators. Get help, share ideas, and collaborate on projects.
          </p>
          <a href="#" className="mt-4 flex items-center gap-2 font-headline text-primary/80 hover:text-primary transition-colors">
            Join Discord
            <span className="material-icons">arrow_forward</span>
          </a>
        </div>
        
        {/* YouTube Card - Standard with video_library icon */}
        <div className="relative flex flex-col items-center justify-center min-h-[200px] bg-surface-container-low border border-on-surface/10 rounded-lg flex-col gap-4 p-6 text-center">
          <span className="material-icons text-3xl text-primary">video_library</span>
          <h3 className="font-headline text-lg font-semibold text-on-surface">YouTube</h3>
          <p className="text-on-surface/70 text-center max-w-sm">
            Watch tutorials, deep dives, and behind-the-scenes content about TantuCore development.
          </p>
          <a href="#" className="mt-4 flex items-center gap-2 font-headline text-primary/80 hover:text-primary transition-colors">
            Watch Videos
            <span className="material-icons">arrow_forward</span>
          </a>
        </div>
        
        {/* Instagram Card - Standard with grid_view icon */}
        <div className="relative flex flex-col items-center justify-center min-h-[200px] bg-surface-container-low border border-on-surface/10 rounded-lg flex-col gap-4 p-6 text-center">
          <span className="material-icons text-3xl text-primary">grid_view</span>
          <h3 className="font-headline text-lg font-semibold text-on-surface">Instagram</h3>
          <p className="text-on-surface/70 text-center max-w-sm">
            Follow our visual journey, development snapshots, and community highlights.
          </p>
          <a href="#" className="mt-4 flex items-center gap-2 font-headline text-primary/80 hover:text-primary transition-colors">
            Follow Us
            <span className="material-icons">arrow_forward</span>
          </a>
        </div>
        
        {/* Twitter/X Card - Wide with horizontally aligned content and alternate_email icon */}
        <div className="relative flex min-h-[200px] bg-surface-container-low border border-on-surface/10 rounded-lg md:col-span-2 items-center gap-6 p-8">
          <div className="flex flex-col items-center gap-3">
            <span className="material-icons text-3xl text-primary">alternate_email</span>
            <h3 className="font-headline text-lg font-semibold text-on-surface">X (Twitter)</h3>
          </div>
          <div className="text-center">
            <p className="text-on-surface/70 max-w-md">
              Stay updated with real-time news, announcements, and community conversations.
            </p>
            <a href="#" className="mt-4 flex items-center gap-2 font-headline text-primary/80 hover:text-primary transition-colors">
              Follow on X
              <span className="material-icons">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSocialGrid;