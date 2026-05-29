import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { generateMetadata, Page } = buildLandingPage("ferienplanung-mitarbeiter");

export { generateMetadata };
export default Page;
