import { Accounts } from "@/components/landing/accounts";
import { Cta } from "@/components/landing/cta";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { Problem } from "@/components/landing/problem";
import { Workflow } from "@/components/landing/workflow";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageSchema } from "@/lib/seo/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema()} />
      <Hero />
      <Problem />
      <Features />
      <Workflow />
      <Accounts />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
