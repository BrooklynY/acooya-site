import "../styles/globals.css";
import { Inter, Fraunces } from "next/font/google";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${sans.variable} ${display.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
