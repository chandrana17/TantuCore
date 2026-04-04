export default function AboutVisualDivider() {
  return (
    <section className="w-full h-[400px] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
      <img
        alt="Collective Architecture"
        className="w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXyeBQjbB4AhiFtyLLJoU9lYsTsuJp-lkUIN_KNRYid3MsPXHzN4yXHSueYbuzrAl1D48hdFR1MpF7bGddhT_fRQSRKp3j7MyCf4VmAoOqF7N8GUubRRMp44AJQGy2gqObfi6BDlBcD1MGC4heYijxN47MVTWpKIdr0mk8wPOHcDM8dcwXhkIH8ilIVw2lZWsSvGfqaCY4rgChnFSxvg550FTade1jG3W5ExhX3zwXyQyHDvF8kGXC4R0Lkjz1UBkgyVtnEq84Kfhc"
      />
      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="font-headline text-[8rem] font-bold text-primary opacity-20 tracking-tighter uppercase">Nexus</h2>
      </div>
    </section>
  );
}
