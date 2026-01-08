import Layout from "../components/Layout/Layout";
import Hero from "../components/Sections/Hero";
import ServicesPreview from "../components/Sections/ServicesPreview";
import Process from "../components/Sections/Process";
import CTA from "../components/Sections/CTA";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <Process />
      <CTA />
    </Layout>
  );
}

