import About from "@/components/About";
import ParallaxHero from "@/components/animate/paralaxHero";
import ContactPage from "@/components/Contact";
import Header from "@/components/Header";
import HeroPolygon from "@/components/HeroPolygon";
import HeroShape from "@/components/HeroShape";
import LinetTwo from "@/components/lineTwo";
import Projects from "@/components/Projects";
import Starfield from "@/components/StarFiled";
import HeroWrap from "./HeroWrap";
import JapanEcommerceCard from "@/components/ui/ProjectCard";
import { Data }from "@/lib/CardData";

export default function HomePage() {

  return (
    <main  className="relative min-h-screen bg-black text-white overflow-x-hidden">

      {/* Space background */}
      <Starfield />

      {/* All website content */}
      <div className="relative z-10">

        {/* Hero */}

        <section id="home" className="max-w-3xl mx-auto px-6 py-24">
            <ParallaxHero>
              <HeroWrap />
            </ParallaxHero>

            {/* Selected work */}
          <div className="mt-16 mb-16" id="case-study">
            <h2 className="text-xl font-semibold mb-4">
              Selected Work
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              
              <JapanEcommerceCard image={Data[0].image} title={Data[0].title} company={Data[0].company} description={Data[0].description} url={Data[0].url} val={true}/>

              <JapanEcommerceCard image={Data[1].image} title={Data[1].title} company={Data[1].company} description={Data[1].description} url={Data[1].url} />

            </div>
          </div>

          {/* Quick links */}
          {/* <div className="flex gap-4">
            <a
              href="#projects"
              className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
            >
              Get in Touch
            </a>
          </div> */}

          <About />
          {/* <Projects /> */}

          
          <ContactPage />
        </section>

      </div>
    </main>
  );
}