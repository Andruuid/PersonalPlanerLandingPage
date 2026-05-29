import { Accounts } from "@/components/landing/accounts";
import { Cta } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Workflow } from "@/components/landing/workflow";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Accounts />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
