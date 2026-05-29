import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { generateMetadata, Page } = buildLandingPage("retail-employee-scheduling");

export { generateMetadata };
export default Page;
