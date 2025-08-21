import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export default function SEOHead({
  title = "KGS CREW Inc. - Pennsylvania's Best Prices in Firearms",
  description = "Family-owned FFL dealer since 2020. Best prices on firearms. 98% customer satisfaction. VIP appointment-only service in Newville, PA.",
  keywords = "KGS CREW, firearms dealer Pennsylvania, gun store Newville PA",
  ogImage = "https://kgscrewinc.com/og-image.jpg",
  canonicalUrl = "https://kgscrewinc.com",
  structuredData
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (selector: string, content: string) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      }
    };
    
    // Update standard meta tags
    updateMetaTag('meta[name="title"]', title);
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="keywords"]', keywords);
    
    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:image"]', ogImage);
    updateMetaTag('meta[property="og:url"]', canonicalUrl);
    
    // Update Twitter tags
    updateMetaTag('meta[property="twitter:title"]', title);
    updateMetaTag('meta[property="twitter:description"]', description);
    updateMetaTag('meta[property="twitter:image"]', ogImage);
    updateMetaTag('meta[property="twitter:url"]', canonicalUrl);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
    
    // Add structured data if provided
    if (structuredData) {
      const scriptId = 'page-structured-data';
      let script = document.getElementById(scriptId);
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(structuredData);
    }
    
    // Cleanup function to restore defaults when component unmounts
    return () => {
      document.title = "KGS CREW Inc. - Pennsylvania's Best Prices in Firearms | By Appointment Only";
    };
  }, [title, description, keywords, ogImage, canonicalUrl, structuredData]);
  
  return null;
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: "KGS CREW Inc. - Pennsylvania's Best Prices in Firearms | By Appointment Only",
    description: "Family-owned FFL dealer since 2020. Best prices on Glock, S&W, Sig Sauer, Ruger firearms. 98% customer satisfaction. VIP appointment-only service in Newville, PA. Call 717-249-0000.",
    keywords: "KGS CREW, Keystone Gun Sales, firearms dealer Pennsylvania, gun store Newville PA, FFL dealer, best gun prices Pennsylvania",
    canonicalUrl: "https://kgscrewinc.com/"
  },
  catalog: {
    title: "Firearms Catalog - Handguns, Rifles, Shotguns | KGS CREW",
    description: "Browse our extensive inventory of firearms including Glock, S&W, Sig Sauer, Ruger. Best prices in PA on handguns, rifles, shotguns, and ammunition. By appointment only.",
    keywords: "gun catalog, firearms inventory, Glock dealer PA, S&W firearms, Sig Sauer, Ruger, ammunition, handguns, rifles, shotguns",
    canonicalUrl: "https://kgscrewinc.com/catalog"
  },
  about: {
    title: "About KGS CREW - Family-Owned Gun Store Since 2020",
    description: "Learn about KGS CREW's story. Founded by Brent Miller and Amber Kane in 2020. 98% customer satisfaction with VIP appointment-only service. Pennsylvania's best firearm prices.",
    keywords: "about KGS CREW, Keystone Gun Sales history, Brent Miller, Amber Kane, family gun store, Pennsylvania FFL dealer",
    canonicalUrl: "https://kgscrewinc.com/about"
  },
  appointment: {
    title: "Book Your VIP Appointment | KGS CREW Gun Store",
    description: "Schedule your private firearms consultation. No crowds, no waiting. Personal service with Pennsylvania's best prices. Call 717-249-0000 or book online.",
    keywords: "gun store appointment, private firearms consultation, VIP gun shopping, appointment only gun store, KGS CREW booking",
    canonicalUrl: "https://kgscrewinc.com/appointment"
  },
  contact: {
    title: "Contact KGS CREW - Newville PA Gun Store | 717-249-0000",
    description: "Contact KGS CREW at 10 Vale Road, Newville, PA 17241. Call 717-249-0000 for appointments. Family-owned FFL dealer with best prices and VIP service.",
    keywords: "contact KGS CREW, gun store Newville PA, 717-249-0000, 10 Vale Road, firearms dealer contact",
    canonicalUrl: "https://kgscrewinc.com/contact"
  },
  community: {
    title: "KGS CREW Community - Exclusive Member Benefits",
    description: "Join the KGS CREW community for exclusive deals, early access to new inventory, and VIP events. 500+ satisfied members with special pricing on firearms.",
    keywords: "KGS CREW community, gun store membership, exclusive firearm deals, VIP gun events, member benefits",
    canonicalUrl: "https://kgscrewinc.com/community"
  },
  policies: {
    title: "Store Policies - FFL Instructions & Terms | KGS CREW",
    description: "Review KGS CREW's store policies including FFL transfer instructions, shipping policies, return policies, and terms of purchase. Licensed FFL dealer compliance.",
    keywords: "FFL policies, gun store policies, firearm shipping, FFL transfers, return policy, terms of purchase, compliance",
    canonicalUrl: "https://kgscrewinc.com/policies"
  },
  cart: {
    title: "Shopping Cart | KGS CREW Firearms",
    description: "Review your selected firearms and accessories. Complete your purchase with Pennsylvania's best prices. FFL transfer required for all firearm purchases.",
    keywords: "gun shopping cart, firearm purchase, checkout, FFL transfer",
    canonicalUrl: "https://kgscrewinc.com/cart"
  },
  checkout: {
    title: "Secure Checkout - Complete Your Purchase | KGS CREW",
    description: "Complete your firearm purchase securely. FFL information required. Best prices in Pennsylvania with VIP service. Family-owned since 2020.",
    keywords: "firearm checkout, secure gun purchase, FFL checkout, payment",
    canonicalUrl: "https://kgscrewinc.com/checkout"
  },
  fflTransfer: {
    title: "FFL Transfer Service - $35 Transfers | KGS CREW",
    description: "Professional FFL transfer services in Newville, PA. Fast processing, competitive rates at $35 per transfer. Licensed dealer handling all your firearm transfer needs.",
    keywords: "FFL transfer PA, gun transfer service, firearm transfer Newville, FFL dealer Pennsylvania, background check service",
    canonicalUrl: "https://kgscrewinc.com/ffl-transfer"
  },
  nfaTransfer: {
    title: "NFA Transfer Service - Suppressors & SBRs | KGS CREW",
    description: "Expert NFA transfer services for suppressors, SBRs, and other NFA items. ATF Form 4 processing, fingerprinting, and compliance verification. $75 per transfer.",
    keywords: "NFA transfer PA, suppressor transfer, SBR transfer, ATF Form 4, NFA dealer Pennsylvania, tax stamp service",
    canonicalUrl: "https://kgscrewinc.com/nfa-transfer"
  }
};

// Helper function to generate product-specific SEO
export function getProductSEO(product: any) {
  return {
    title: `${product.name} - ${product.category} | KGS CREW`,
    description: `${product.name} available at KGS CREW. ${product.description}. Best price in Pennsylvania. In stock: ${product.inStock ? 'Yes' : 'Limited'}. Call 717-249-0000 to schedule appointment.`,
    keywords: `${product.name}, ${product.category}, ${product.brand || ''}, buy ${product.name} Pennsylvania, ${product.specs?.join(', ') || ''}`,
    canonicalUrl: `https://kgscrewinc.com/product/${product.id}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "image": product.image || "https://kgscrewinc.com/product-image.jpg",
      "brand": {
        "@type": "Brand",
        "name": product.brand || "Various"
      },
      "offers": {
        "@type": "Offer",
        "url": `https://kgscrewinc.com/product/${product.id}`,
        "priceCurrency": "USD",
        "price": product.price,
        "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/LimitedAvailability",
        "seller": {
          "@type": "Organization",
          "name": "KGS CREW Inc."
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "94"
      }
    }
  };
}