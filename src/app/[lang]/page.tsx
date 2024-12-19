import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Expertise from './components/Expertise';
import { getDictionary, Locale } from './dictionaries';

interface HomeProps {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="flex w-full flex-col items-center">
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Expertise dict={dict.expertise} />
      <Contact dict={dict.contact} />
    </div>
  );
}
