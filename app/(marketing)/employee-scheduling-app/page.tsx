import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { generateMetadata, Page } = buildLandingPage("employee-scheduling-app");

export { generateMetadata };
export default Page;
