import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { generateMetadata, Page } = buildLandingPage("dienstplan-gastronomie");

export { generateMetadata };
export default Page;
