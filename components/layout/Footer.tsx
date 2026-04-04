interface FooterProps {
  hoverColor?: string;
}

export default function Footer({ hoverColor }: FooterProps) {
  const hoverStyle = hoverColor || 'hover:text-primary';
  
  return (
    <footer className="w-full py-12 bg-[#fcf9f8] border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-2 px-12 items-center w-full">
        <div className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/50">
          #2026 TANTUCORE. <span style={{ letterSpacing: '0.2em' }}>Built in public, Shipped alone.</span>
        </div>
        <div className="flex justify-start md:justify-end space-x-8 mt-6 md:mt-0">
          <a 
            className={`font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/50 transition-colors ease-in-out duration-500 ${hoverStyle}`}
            href="#"
          >
            YouTube
          </a>
          <a 
            className={`font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/50 transition-colors ease-in-out duration-500 ${hoverStyle}`}
            href="#"
          >
            Instagram
          </a>
          <a 
            className={`font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/50 transition-colors ease-in-out duration-500 ${hoverStyle}`}
            href="#"
          >
            X
          </a>
          <a 
            className={`font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/50 transition-colors ease-in-out duration-500 ${hoverStyle}`}
            href="#"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}