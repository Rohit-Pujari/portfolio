import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Tools from "@/components/Tools";
import Work from "@/components/Work";
import { tools } from "@/constants";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-6 p-6">
      <Nav />
      <Hero />
      <Work />
      <Tools />
    </main>
  );
}
