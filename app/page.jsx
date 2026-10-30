import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyMe from '@/components/WhyMe';
import Pricing from '@/components/Pricing';
import CtaBanner from '@/components/CtaBanner';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Floating from '@/components/Floating';
import RevealInit from '@/components/RevealInit';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <WhyMe />
        <Pricing />
        <CtaBanner />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Floating />
      <RevealInit />
    </>
  );
}
