import { buildPricingPage } from "@/lib/seo/pages/pricing-page";

const { generateMetadata, Page } = buildPricingPage("/pricing");

export { generateMetadata };
export default Page;
