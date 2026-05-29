import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { generateMetadata, Page } = buildLandingPage("pto-time-off-tracking");

export { generateMetadata };
export default Page;
