import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { metadata, Page } = buildLandingPage("schichtplan-software");

export { metadata };
export default Page;
