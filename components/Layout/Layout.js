import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-wash">
      <Header />

      {/* Page rhythm wrapper */}
      <main className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="py-8 md:py-10">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
