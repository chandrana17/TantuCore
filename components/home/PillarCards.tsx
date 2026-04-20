import MaterialIcon from '@/components/ui/MaterialIcon';

export default function PillarCards() {
  const pillars = [
    {
      num: '01',
      category: 'ARCHITECTURE',
      title: 'Local First',
      desc: 'Runs on your device. No servers. No subscriptions.',
      icon: 'devices',
    },
    {
      num: '02',
      category: 'INTERFACE',
      title: 'Zero Bloat',
      desc: 'One feature. Done right. Nothing you don\'t need.',
      icon: 'remove_circle_outline',
    },
    {
      num: '03',
      category: 'ECOSYSTEM',
      title: 'Free Forever',
      desc: 'Not a trial. Not freemium. Just free. Because it should be.',
      icon: 'volunteer_activism',
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-outline-variant/10">
        {pillars.map((p, i) => (
          <div 
            key={p.num}
            className="p-12 border-b md:border-b-0 md:border-r last:border-r-0 border-outline-variant/10 group hover:bg-surface-container-low transition-all duration-500 relative overflow-hidden"
          >
            {/* Hover accent bar */}
            <div className="absolute left-0 top-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
            
            <div className="flex items-center gap-3 mb-6">
              <MaterialIcon icon={p.icon} className="text-xl text-primary/50 group-hover:text-primary transition-colors duration-300" />
              <span className="font-headline text-xs text-primary tracking-widest">{p.num} / {p.category}</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">{p.title}</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm opacity-70">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
