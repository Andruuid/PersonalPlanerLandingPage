import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { metadata, Page } = buildLandingPage("mitarbeiterplanung-app");

export { metadata };
export default Page;
