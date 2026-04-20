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
        <div className="relative flex flex-col items-center justify-center min-h-[200px] bg-surface-container-low border border-on-surface/10 rounded-lg md:col-span-2 md:row-span-2 gap-4 p-8 text-center">
          <span className="material-icons text-4xl text-primary">hub</span>
          <h3 className="font-headline text-lg font-semibold text-on-surface">Discord</h3>
          <p className="text-on-surface/70 text-center max-w-md">
            Join our vibrant community of developers, creators, and innovators. Get help, share ideas, and collaborate on projects.
          </p>
          {process.env.NEXT_PUBLIC_DISCORD_URL ? (
            <a href={process.env.NEXT_PUBLIC_DISCORD_URL} className="mt-4 flex items-center gap-2 font-headline text-primary/80 hover:text-primary transition-colors">
              Join Discord
              <span className="material-icons">arrow_forward</span>
            </a>
          ) : (
            <div className="mt-4 flex flex-col items-center gap-1">
              <span className="flex items-center gap-2 font-headline text-on-surface/30 cursor-not-allowed">
                Join Discord
                <span className="material-icons">arrow_forward</span>
              </span>
              <span className="text-xs text-on-surface/50">Launching soon</span>
            </div>
          )}
        </div>
        
        {/* YouTube Card */}
        <div className="relative flex flex-col items-center justify-center min-h-[200px] bg-surface-container-low border border-on-surface/10 rounded-lg gap-4 p-6 text-center">
          <span className="material-icons text-3xl text-primary">video_library</span>
          <h3 className="font-headline text-lg font-semibold text-on-surface">YouTube</h3>
          <p className="text-on-surface/70 text-center max-w-sm">
            Watch tutorials, deep dives, and behind-the-scenes content about TantuCore development.
          </p>
          {process.env.NEXT_PUBLIC_YOUTUBE_URL ? (
            <a href={process.env.NEXT_PUBLIC_YOUTUBE_URL} className="mt-4 flex items-center gap-2 font-headline text-primary/80 hover:text-primary transition-colors">
              Watch Videos
              <span className="material-icons">arrow_forward</span>
            </a>
          ) : (
            <div className="mt-4 flex flex-col items-center gap-1">
              <span className="flex items-center gap-2 font-headline text-on-surface/30 cursor-not-allowed">
                Watch Videos
                <span className="material-icons">arrow_forward</span>
              </span>
              <span className="text-xs text-on-surface/50">Launching soon</span>
            </div>
          )}
        </div>
        
        {/* Instagram Card */}
        <div className="relative flex flex-col items-center justify-center min-h-[200px] bg-surface-container-low border border-on-surface/10 rounded-lg gap-4 p-6 text-center">
          <span className="material-icons text-3xl text-primary">grid_view</span>
          <h3 className="font-headline text-lg font-semibold text-on-surface">Instagram</h3>
          <p className="text-on-surface/70 text-center max-w-sm">
            Follow our visual journey, development snapshots, and community highlights.
          </p>
          {process.env.NEXT_PUBLIC_INSTAGRAM_URL ? (
            <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} className="mt-4 flex items-center gap-2 font-headline text-primary/80 hover:text-primary transition-colors">
              Follow Us
              <span className="material-icons">arrow_forward</span>
            </a>
          ) : (
            <div className="mt-4 flex flex-col items-center gap-1">
              <span className="flex items-center gap-2 font-headline text-on-surface/30 cursor-not-allowed">
                Follow Us
                <span className="material-icons">arrow_forward</span>
              </span>
              <span className="text-xs text-on-surface/50">Launching soon</span>
            </div>
          )}
        </div>
        
        {/* X Card */}
        <div className="relative flex min-h-[200px] bg-surface-container-low border border-on-surface/10 rounded-lg md:col-span-2 items-center gap-6 p-8">
          <div className="flex flex-col items-center gap-3">
            <span className="material-icons text-3xl text-primary">alternate_email</span>
            <h3 className="font-headline text-lg font-semibold text-on-surface">X (Twitter)</h3>
          </div>
          <div className="text-center md:text-left flex-1">
            <p className="text-on-surface/70 max-w-md mx-auto md:mx-0">
              Stay updated with real-time news, announcements, and community conversations.
            </p>
            {process.env.NEXT_PUBLIC_X_URL ? (
              <a href={process.env.NEXT_PUBLIC_X_URL} className="mt-4 flex items-center justify-center md:justify-start gap-2 font-headline text-primary/80 hover:text-primary transition-colors">
                Follow on X
                <span className="material-icons">arrow_forward</span>
              </a>
            ) : (
              <div className="mt-4 flex flex-col items-center md:items-start gap-1">
                <span className="flex items-center gap-2 font-headline text-on-surface/30 cursor-not-allowed">
                  Follow on X
                  <span className="material-icons">arrow_forward</span>
                </span>
                <span className="text-xs text-on-surface/50">Launching soon</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSocialGrid;
