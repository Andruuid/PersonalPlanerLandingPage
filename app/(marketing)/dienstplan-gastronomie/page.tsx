import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { metadata, Page } = buildLandingPage("dienstplan-gastronomie");

export { metadata };
export default Page;
