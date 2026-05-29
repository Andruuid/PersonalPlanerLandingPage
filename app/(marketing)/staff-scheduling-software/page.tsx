import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { generateMetadata, Page } = buildLandingPage("staff-scheduling-software");

export { generateMetadata };
export default Page;
