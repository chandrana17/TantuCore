import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import LibrariesHero from '@/components/libraries/LibrariesHero';
import LibrariesSkills from '@/components/libraries/LibrariesSkills';
import LibrariesPrompts from '@/components/libraries/LibrariesPrompts';
import LibrariesAgents from '@/components/libraries/LibrariesAgents';

export default function LibrariesPage() {
  return (
    <>
      <NavBar activePage='libraries' />
      <main className='pt-32 pb-24 blueprint-grid-libraries min-h-screen'>
        <LibrariesHero />
        <div className='max-w-[1440px] mx-auto px-8'>
          <LibrariesSkills />
          <LibrariesPrompts />
          <LibrariesAgents />
        </div>
        <Footer hoverColor='hover:text-[#006b5c]' />
      </main>
    </>
  );
}