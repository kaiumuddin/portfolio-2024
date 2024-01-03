// components
import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Services from "@/components/service/Services";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Work />
    </main>
  );
}
