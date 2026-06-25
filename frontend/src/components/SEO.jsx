import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonical, schema, image }) {
  const siteUrl = 'https://www.wibly.in';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  const defaultDescription = 'Premium websites built for modern businesses. Fast, responsive and designed to convert visitors into customers.';
  const finalDescription = description || defaultDescription;
  const finalImage = image || `${siteUrl}/logo192.png`;

  // Default Organization & WebSite Schema present on all pages
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.wibly.in/#organization",
        "name": "WIBLY",
        "url": "https://www.wibly.in",
        "logo": "https://www.wibly.in/logo.png",
        "sameAs": [
          "https://www.instagram.com/wibly.in/",
          "https://www.linkedin.com/company/wibly-in/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.wibly.in/#website",
        "url": "https://www.wibly.in",
        "name": "WIBLY",
        "publisher": {
          "@id": "https://www.wibly.in/#organization"
        }
      }
    ]
  };

  // If a specific schema is passed (like Service or FAQ), append it to the graph
  if (schema) {
    baseSchema["@graph"].push(schema);
  }

  // Breadcrumb schema
  const pathParts = canonical ? canonical.split('/').filter(Boolean) : [];
  if (pathParts.length > 0) {
    const breadcrumbSchema = {
      "@type": "BreadcrumbList",
      "@id": `${fullCanonical}#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.wibly.in/"
        }
      ]
    };
    
    let currentPath = "https://www.wibly.in";
    pathParts.forEach((part, index) => {
      currentPath += `/${part}`;
      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": part.charAt(0).toUpperCase() + part.slice(1),
        "item": currentPath
      });
    });

    baseSchema["@graph"].push(breadcrumbSchema);
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="WIBLY" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
    </Helmet>
  );
}
