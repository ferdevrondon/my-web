import { TopMenu } from '@/components';
import { AboutMe } from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import Marquee from '@/components/MarqueeTicket';
import { ProfilePicture } from '@/components/ProfilePicture';
import { WorkSection } from '@/components/WorkSection';
import { getDictionary, hasLocale } from './dictionaries';
import { notFound } from 'next/navigation';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <div className='relative min-h-screen bg-bg text-ink pb-20 overflow-x-clip'>
      <Marquee items={dict.marquee} />

      <TopMenu dict={dict} lang={lang} />

      <main className='relative max-w-6xl mx-auto px-6 mt-6 grid grid-cols-1 md:grid-cols-12 gap-12'>
        <AboutMe dict={dict} />

        <ProfilePicture dict={dict} />

        <WorkSection dict={dict} />
        <Featured dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
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
