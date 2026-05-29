import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { metadata, Page } = buildLandingPage("ferienplanung-mitarbeiter");

export { metadata };
export default Page;
