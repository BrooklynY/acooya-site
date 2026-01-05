import Header from "./Header";
import Footer from "./Footer";
import SEO from "../seo/SEO";

export default function Layout({ children, seo }) {
  return (
    <>
      <SEO {...seo} />
      <Header />
      {children}
      <Footer />
    </>
  );
}

