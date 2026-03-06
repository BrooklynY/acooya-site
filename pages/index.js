import OutcomesStrip from "../components/Sections/OutcomesStrip";
import Method from "../components/Sections/Method";
import Problems from "../components/Sections/Problems";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Sections/Hero";
import ServicesPreview from "../components/Sections/ServicesPreview";
import Process from "../components/Sections/Process";
import CTA from "../components/Sections/CTA";

export default function Home() {
  return (
    <Layout>
      {/* Chapter 1: Brand wash */}
      <div className="bg-wash">
        <Hero />
        <Problems />
        <Method />
      </div>

      {/* Chapter 2: Offers */}
      <ServicesPreview />

      {/* Chapter 3: Proof */}
      <OutcomesStrip />

      {/* Chapter 4: How we deliver */}
      <Process />

      {/* Chapter 5: Conversion */}
      <CTA />
    </Layout>
  );
}
