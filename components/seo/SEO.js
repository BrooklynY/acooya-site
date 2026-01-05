import Head from "next/head";

export default function SEO({
  title = "Acooya Consulting",
  description = "Calm, outcome-led transformation for complex organisations — operating model, delivery enablement, and decision-grade insights.",
  path = "/",
  image = "/brand/og.png",
}) {
  const baseUrl = "https://acooyaconsulting.com"; // update when domain is final
  const url = `${baseUrl}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${baseUrl}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Head>
  );
}
