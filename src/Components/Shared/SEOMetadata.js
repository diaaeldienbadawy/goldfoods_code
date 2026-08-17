import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

const SEOMetadata = ({ title, description, canonical, ogType = 'website', schema }) => {
  const { language } = useLanguage();
  const baseDomain = 'https://www.gf-egypt.com';
  
  // Format canonical cleanly
  const currentPath = canonical || window.location.pathname;
  const cleanPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
  const fullCanonical = `${baseDomain}${cleanPath === '/' ? '' : cleanPath}`;

  // Default Organization Schema representing Gold Foods as the manufacturer entity
  const defaultOrgSchema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Gold Foods",
    "legalName": "Gold Foods for Food Industries",
    "url": "https://www.gf-egypt.com",
    "logo": "https://www.gf-egypt.com/logo.png",
    "description": language === 'ar' 
      ? "جولد فودز هي الشركة الأم المالكة والمصنعة لعلامة سيد البلد التجارية، متخصصة في تصنيع الرنجة المدخنة واستيراد وتعبئة المأكولات البحرية واللحوم والدواجن المجمدة."
      : "Gold Foods is a premium food processing and seafood manufacturing company, specializing in smoked fish production, packaging, and B2B wholesale supply.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": language === 'ar' 
        ? "مبنى رقم 39، برج جولد، المنطقة المتميزة" 
        : "Building No. 39, Gold Tower, Prime District",
      "addressLocality": language === 'ar' ? "مدينة 15 مايو، القاهرة" : "15th of May City, Cairo",
      "addressCountry": "EG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+201032033302",
      "contactType": "sales",
      "email": "ceo@gf-egypt.com",
      "areaServed": "EG",
      "availableLanguage": ["Arabic", "English"]
    },
    "brand": {
      "@type": "Brand",
      "name": "Seed El Balad",
      "alternateName": "سيد البلد",
      "url": "https://www.gf-egypt.com"
    }
  };

  // Combine schemas if custom schema is provided
  const schemasToRender = schema ? [defaultOrgSchema, schema] : [defaultOrgSchema];

  return (
    <Helmet>
      {/* HTML Language Tag */}
      <html lang={language} />

      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Alternate Language Links */}
      <link rel="alternate" hreflang="en" href={fullCanonical} />
      <link rel="alternate" hreflang="ar" href={`${fullCanonical}?lang=ar`} />
      <link rel="alternate" hreflang="x-default" href={fullCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${baseDomain}/logo.png`} />
      <meta property="og:locale" content={language === 'ar' ? 'ar_EG' : 'en_US'} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseDomain}/logo.png`} />

      {/* JSON-LD Schemas */}
      {schemasToRender.map((sch, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(sch)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOMetadata;
