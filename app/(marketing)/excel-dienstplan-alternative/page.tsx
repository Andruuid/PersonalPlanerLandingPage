import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { metadata, Page } = buildLandingPage("excel-dienstplan-alternative");

export { metadata };
export default Page;
