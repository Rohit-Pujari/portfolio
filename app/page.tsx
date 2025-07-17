import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-6 p-6">
      {/* <Nav /> */}
      <Hero />
      <Tools />
      <Work />
    </main>
  );
}
