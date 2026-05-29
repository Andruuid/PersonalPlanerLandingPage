import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { generateMetadata, Page } = buildLandingPage("fair-workweek-scheduling-software");

export { generateMetadata };
export default Page;
