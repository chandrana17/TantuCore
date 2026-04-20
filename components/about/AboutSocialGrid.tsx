import React from 'react';

const AboutSocialGrid: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 pb-32">
      <div className="mb-16">
        <h2 className="font-headline text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight mb-4 text-[#f0f0f0]">Find us online.</h2>
        <p className="text-lg text-[#f0f0f0]/40">We&apos;re building in public. Come watch it happen.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Discord Card */}
        <a href="https://discord.gg/CEd2ZJw2Gx" target="_blank" rel="noopener noreferrer" className="group glass-card relative flex flex-col items-center justify-center min-h-[200px] md:col-span-2 md:row-span-2 gap-4 p-8 text-center rounded-lg">
          <span className="material-symbols-outlined text-4xl text-[#E8FF47] group-hover:scale-110 transition-transform duration-300">hub</span>
          <h3 className="font-headline text-lg font-semibold text-[#f0f0f0]">Discord</h3>
          <p className="text-[#f0f0f0]/40 text-center max-w-md">
            Join our community. Get help, share ideas, and build together.
          </p>
          <span className="mt-4 flex items-center gap-2 font-headline text-[#E8FF47]/60 group-hover:text-[#E8FF47] transition-colors">
            Join Discord
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </span>
        </a>

        {/* YouTube Card */}
        <a href="https://youtube.com/@tantucore" target="_blank" rel="noopener noreferrer" className="group glass-card relative flex flex-col items-center justify-center min-h-[200px] gap-4 p-6 text-center rounded-lg">
          <span className="material-symbols-outlined text-3xl text-[#E8FF47] group-hover:scale-110 transition-transform duration-300">video_library</span>
          <h3 className="font-headline text-lg font-semibold text-[#f0f0f0]">YouTube</h3>
          <p className="text-[#f0f0f0]/40 text-center max-w-sm">
            Watch builds, deep dives, and behind-the-scenes dev content.
          </p>
          <span className="mt-4 flex items-center gap-2 font-headline text-[#E8FF47]/60 group-hover:text-[#E8FF47] transition-colors">
            Watch Videos
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </span>
        </a>

        {/* Instagram Card */}
        <a href="https://instagram.com/tantucore" target="_blank" rel="noopener noreferrer" className="group glass-card relative flex flex-col items-center justify-center min-h-[200px] gap-4 p-6 text-center rounded-lg">
          <span className="material-symbols-outlined text-3xl text-[#E8FF47] group-hover:scale-110 transition-transform duration-300">grid_view</span>
          <h3 className="font-headline text-lg font-semibold text-[#f0f0f0]">Instagram</h3>
          <p className="text-[#f0f0f0]/40 text-center max-w-sm">
            Dev snapshots, progress updates, and community moments.
          </p>
          <span className="mt-4 flex items-center gap-2 font-headline text-[#E8FF47]/60 group-hover:text-[#E8FF47] transition-colors">
            Follow Us
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </span>
        </a>

        {/* X Card */}
        <a href="https://x.com/tantucore" target="_blank" rel="noopener noreferrer" className="group glass-card relative flex min-h-[200px] md:col-span-2 items-center gap-6 p-8 rounded-lg">
          <div className="flex flex-col items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-[#E8FF47] group-hover:scale-110 transition-transform duration-300">alternate_email</span>
            <h3 className="font-headline text-lg font-semibold text-[#f0f0f0]">X (Twitter)</h3>
          </div>
          <div className="text-center md:text-left flex-1">
            <p className="text-[#f0f0f0]/40 max-w-md mx-auto md:mx-0">
              Real-time updates, announcements, and shipping threads.
            </p>
            <span className="mt-4 flex items-center justify-center md:justify-start gap-2 font-headline text-[#E8FF47]/60 group-hover:text-[#E8FF47] transition-colors">
              Follow on X
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </span>
          </div>
        </a>

        {/* GitHub Card */}
        <a href="https://github.com/chandrana17" target="_blank" rel="noopener noreferrer" className="group glass-card relative flex min-h-[200px] md:col-span-2 items-center gap-6 p-8 rounded-lg">
          <div className="flex flex-col items-center gap-3">
            <svg className="w-8 h-8 text-[#E8FF47] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <h3 className="font-headline text-lg font-semibold text-[#f0f0f0]">GitHub</h3>
          </div>
          <div className="text-center md:text-left flex-1">
            <p className="text-[#f0f0f0]/40 max-w-md mx-auto md:mx-0">
              All source code. Open. Public. Fork it, improve it, ship it.
            </p>
            <span className="mt-4 flex items-center justify-center md:justify-start gap-2 font-headline text-[#E8FF47]/60 group-hover:text-[#E8FF47] transition-colors">
              View Repos
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AboutSocialGrid;
