import FeaturedInsights from "@/components/FeaturedInsights/FeaturedInsights";
import Hero from "@/components/hero/Hero";
import Industries from "@/components/industries/Industries";
import Insights from "@/components/insights/Insights";
import Layout from "@/components/layout/Layout";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <Layout>
      <div>
      <Hero />
      <Services />
      <Industries />
      <FeaturedInsights/>
      <Insights />
      {/* Add more sections here as we build them */}
    </div>
    </Layout>
  );
}
