import { TopMenu } from '@/components';
import { AboutMe } from '@/components/AboutMe';
import Contact from '@/components/Contact';
import PixelTrail from '@/components/fancy/background/pixel-trail';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import Marquee from '@/components/MarqueeTicket';
import { ProfilePicture } from '@/components/ProfilePicture';
import { WorkSection } from '@/components/WorkSection';

export default function Home() {
  return (
    <div className='relative min-h-screen bg-bg text-ink pb-20 overflow-x-clip'>
      <Marquee />

      {/* Navbar goes here */}
      <TopMenu />

      <main className='relative max-w-6xl mx-auto px-6 mt-6 grid grid-cols-1 md:grid-cols-12 gap-12'>
        <AboutMe />

        <ProfilePicture />

        <WorkSection />
        <Featured />
        <Contact />
      

        {/* Hero Section */}

        {/* About Section */}

        {/* Work Section */}

        {/* Gallery Section */}

        {/* Contact Section */}
      </main>
        <Footer />
         {/* <div className="absolute inset-0 z-1">
              <PixelTrail
                pixelSize={10}
                delay={130}
                fadeDuration={12}
                pixelClassName="bg-[#2730f7]"
              />
            </div> */}
    </div>
  );
}
