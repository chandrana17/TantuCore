interface FooterProps {
  hoverColor?: string;
}

export default function Footer({ hoverColor }: FooterProps) {
  return (
    <footer className="w-full py-12 bg-[#fcf9f8] border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-2 px-12 items-center w-full gap-6">
        <div className="flex flex-col gap-2">
          <div className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/50">
            #2026 TANTUCORE.
          </div>
          <div className="font-headline text-lg font-bold tracking-tight text-[#1c1b1b]">
            Built in public, Shipped alone.
          </div>
        </div>
        <div className="flex justify-start md:justify-end space-x-8 mt-6 md:mt-0">
          <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/30">
            YouTube (Coming soon)
          </span>
          <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/30">
            Instagram (Coming soon)
          </span>
          <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/30">
            X (Coming soon)
          </span>
          <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/30">
            Discord (Coming soon)
          </span>
        </div>
      </div>
    </footer>
  );
}