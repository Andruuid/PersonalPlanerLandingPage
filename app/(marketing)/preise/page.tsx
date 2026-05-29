import { buildPricingPage } from "@/lib/seo/pages/pricing-page";

const { generateMetadata, Page } = buildPricingPage("/preise");

export { generateMetadata };
export default Page;
