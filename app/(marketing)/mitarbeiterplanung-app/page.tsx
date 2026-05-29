import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { generateMetadata, Page } = buildLandingPage("mitarbeiterplanung-app");

export { generateMetadata };
export default Page;
