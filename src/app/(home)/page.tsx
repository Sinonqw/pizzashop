import Hero from "@/components/heroComponents/Hero";
import Menu from "@/components/MenuComponents/Menu";
import Events from "@/components/EventsComponents/Events";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <Events />
      <About />
    </>
  );
}
