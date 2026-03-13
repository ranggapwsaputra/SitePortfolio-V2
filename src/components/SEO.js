import Head from 'next/head';

const SITE_URL = 'https://ranggapwsaputra.com';
const SITE_NAME = 'Rangga Saputra';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/og-default.png`;
const TWITTER_HANDLE = '@ranggapwsaputra';

/**
 * SEO Component — handles all meta tags including Open Graph & Twitter Card
 *
 * @param {string} title         - Page title (will append "| Rangga Saputra" automatically)
 * @param {string} description   - Page description shown in previews
 * @param {string} ogImage       - Absolute URL to OG image (1200x630 recommended)
 * @param {string} ogType        - "website" | "article"
 * @param {string} canonicalUrl  - Canonical URL for this page
 * @param {string} articleDate   - ISO date string (for articles)
 * @param {string[]} articleTags - Array of article tags
 */
export default function SEO({
  title,
  description,
  ogImage,
  ogType = 'website',
  canonicalUrl,
  articleDate,
  articleTags = [],
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — From Code to Launch, Start with Security`;
  const metaDesc = description || 'IT Manager & Cybersecurity Enthusiast. Writing about infrastructure, web dev, and security.';
  const imageUrl = ogImage || DEFAULT_OG_IMAGE;
  const pageUrl = canonicalUrl || SITE_URL;

  return (
    <Head>
      {/* Primary Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="author" content={SITE_NAME} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="id_ID" />

      {/* Article-specific OG tags */}
      {ogType === 'article' && articleDate && (
        <meta property="article:published_time" content={articleDate} />
      )}
      {ogType === 'article' && (
        <meta property="article:author" content={SITE_NAME} />
      )}
      {ogType === 'article' && articleTags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#1b1b1b" />
    </Head>
  );
}
