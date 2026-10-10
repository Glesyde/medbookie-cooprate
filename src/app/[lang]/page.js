import { 
  HeroSection, 
  SuiteSection, 
  TrustSection, 
  EnterpriseSection 
} from "../../../components/HomeSections";
import { getDictionary } from "../../../lib/getDictionary";

export default async function Home({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const dict = await getDictionary(lang);

  return (
    <main className="mb-site">
      <HeroSection dict={dict.hero} />
      <SuiteSection dict={dict.suite} />
      <TrustSection dict={dict.trust} />
      <EnterpriseSection dict={dict.enterprise} />
    </main>
  );
}