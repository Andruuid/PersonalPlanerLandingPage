import { buildLandingPage } from "@/lib/seo/pages/create-landing-page";

const { generateMetadata, Page } = buildLandingPage("excel-dienstplan-alternative");

export { generateMetadata };
export default Page;
