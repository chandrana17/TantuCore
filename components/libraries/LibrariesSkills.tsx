import MaterialIcon from '@/components/ui/MaterialIcon';

export default function LibrariesSkills() {
  return (
    <section className="mb-32">
      <div className="flex items-end justify-between border-b border-outline-variant/20 pb-4 mb-12">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-4xl">construction</span>
          <h2 className="font-headline text-3xl font-bold tracking-tight">// SKILLS</h2>
        </div>
        <span className="font-label text-on-surface-variant opacity-50">01 / 03</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group bg-surface-container-low p-8 border border-outline-variant/10 hover:bg-surface-container-lowest transition-colors duration-500">
          <div className="aspect-square mb-8 overflow-hidden bg-surface-variant">
            <img
              alt="Technical Blueprint"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdCuGgXIIIv3JY-combvlpInrOR5PyNNbeEnqvYhk5Le1_0a6QLhkx7RHjN1lyobAg9J5PY2QgCmR8pBUKu4Y4RXy5fOG600uHiv11Jvx-ONKW-S-WzRZwktvk1ylNQE4FOSm1vRc655b-oAEocviBuQi2zjP_Ql3K3K8dOnOy1m8j73LPslwOxGWydn8ogKSuLqGDlTCJ5pgkvIfUu5zqPk82Llhmn59h15QuLoVDRDRjJQ1-47p_u2zP4zNU1SJDSj7TZBde0jrB"
            />
          </div>
          <h3 className="font-headline text-xl font-bold mb-3">Logical Reasoning</h3>
          <p className="font-body text-on-surface-variant mb-6 text-sm leading-relaxed">Standardized computational logic patterns for complex decision-making architectures.</p>
          <div className="flex items-center gap-2 text-primary font-label text-xs">
            <MaterialIcon icon="arrow_forward" className="text-sm" />
            EXPLORE MODULE
          </div>
        </div>
        <div className="group bg-surface-container-low p-8 border border-outline-variant/10 hover:bg-surface-container-lowest transition-colors duration-500">
          <div className="aspect-square mb-8 overflow-hidden bg-surface-variant">
            <img
              alt="Visual Data Structure"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcYHAPLmme2ONknSYSRZ8iRfyXvrTwmXVKBVByqx1A3pFWprwY3wF0bZOqQSvR05H9IahlUIrglPhvppWe9b_I8EwHKvdHaU3N9vv19BRDrENMttRuWCIEOXdrYNaq6wvik-3wn6jZ6dI40nd-mlLu84FRnV0jbbDSJosURsH8aZ5xVPQx5qk-gQYp4PbvZEJT4GhGdMUVdaJz9A4YA0-35H4qVQf14R_53YwHYFqbuE_NjM74QZgq1AWQELPqIMyFXdP0UALZ4A9A"
            />
          </div>
          <h3 className="font-headline text-xl font-bold mb-3">Pattern Recognition</h3>
          <p className="font-body text-on-surface-variant mb-6 text-sm leading-relaxed">High-fidelity visual and data identification sets optimized for real-time processing.</p>
          <div className="flex items-center gap-2 text-primary font-label text-xs">
            <MaterialIcon icon="arrow_forward" className="text-sm" />
            EXPLORE MODULE
          </div>
        </div>
        <div className="group bg-surface-container-low p-8 border border-outline-variant/10 hover:bg-surface-container-lowest transition-colors duration-500">
          <div className="aspect-square mb-8 overflow-hidden bg-surface-variant">
            <img
              alt="Microchip Detail"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNhK5aVHbImCkBPcYicVSfPZtEN45z2yCUdSdUywxllxj1VEjZw3DcBGL8f5rWEDIi3dkRldtOWJNZQsfAQTuxmHWTMWhXFRyGTsSDmlWy1Mw_Y1Bx5Rb2kPiUGS_22uFZK2fBYm5J0-TXNyXhNcukCuz2jhU4HRGNWHL2KMaXj-0Fa2UzpgHELaxWaPbgCe0xGd24WbgInhlF8hun02Fnv3e-kwrvKuH-bn8ZDBvVN3V_Deh8BKfjB5y3uWv03xVmM_S3KmbAKFgt"
            />
          </div>
          <h3 className="font-headline text-xl font-bold mb-3">Autonomous Navigation</h3>
          <p className="font-body text-on-surface-variant mb-6 text-sm leading-relaxed">Spatial awareness and pathfinding algorithms for virtual and physical environments.</p>
          <div className="flex items-center gap-2 text-primary font-label text-xs">
            <MaterialIcon icon="arrow_forward" className="text-sm" />
            EXPLORE MODULE
          </div>
        </div>
      </div>
    </section>
  );
}
