import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { generateMetadata, Page } = buildLandingPage("restaurant-employee-scheduling");

export { generateMetadata };
export default Page;
