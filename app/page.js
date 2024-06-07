import Image from "next/image";
import Hero from "./_components/Hero";
import Counter from "./_components/Counter";
import About from "./_components/About";
import Services from "./_components/Services";
import Choose from "./_components/Choose";
import Contact from "./_components/Contact";

export default function Home() {
  return (
   <div className="bg-slate-900 ">
    <Hero/>
    <Counter/>
    <About/>
    <Services/>
    <Choose/>
    <Contact/>
   </div>
  );
}
