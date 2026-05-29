import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { generateMetadata, Page } = buildLandingPage("personalplanung-detailhandel");

export { generateMetadata };
export default Page;
