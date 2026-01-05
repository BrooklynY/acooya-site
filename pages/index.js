import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import ServicesPreview from "../components/sections/ServicesPreview";
import Process from "../components/sections/Process";
import CTA from "../components/sections/CTA";

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

