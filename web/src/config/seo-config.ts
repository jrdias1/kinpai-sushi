export const seoConfig = {
  baseUrl: "https://kinpai-sushiv2.vercel.app",
  siteName: "Kinpai Sushi",
  title: "Kinpai Sushi - Culinária Japonesa Premium em Petrópolis RJ",
  description: "Kinpai Sushi: A arte autêntica da culinária japonesa. 20 anos de tradição, pratos sofisticados, ambiente elegante. 4.9★ com 1.078 avaliações.",
  
  // Keywords principais para SEO
  keywords: [
    "sushi Petrópolis",
    "restaurante japonês RJ",
    "rodízio sushi",
    "comida japonesa",
    "sushi premium",
    "culinária oriental",
    "Kinpai Sushi",
    "restaurante Petrópolis",
    "melhor sushi em Petrópolis",
    "autêntica culinária japonesa",
    "pratos especiais sushi",
    "chef especializado",
    "ambiente sofisticado",
    "sushi Valparaíso",
    "pedir sushi online",
    "delivery sushi Petrópolis",
    "combinado sushi",
    "hôs de sushi",
    "tempurá",
    "sashimi",
    "prato executivo",
    "buffet sushi",
    "reserva online",
    "celebre datas especiais"
  ],
  
  // Contatos
  contact: {
    phone: "+5524988622222",
    email: "contato@kinpai.com.br",
    address: "R. Gonçalves Dias, 423, Valparaíso, Petrópolis - RJ, 25655-122",
    instagram: "https://www.instagram.com/kinpaisushi/",
    facebook: "https://www.facebook.com/kinpai",
  },
  
  // Dados estruturados
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Kinpai Sushi",
    "description": "Restaurante de culinária japonesa premium com 20 anos de tradição",
    "image": "https://kinpai-sushiv2.vercel.app/images/hero-sushi-premium.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Gonçalves Dias, 423",
      "addressLocality": "Petrópolis",
      "addressRegion": "RJ",
      "postalCode": "25655-122",
      "addressCountry": "BR"
    },
    "telephone": "+5524988622222",
    "email": "contato@kinpai.com.br",
    "url": "https://kinpai-sushiv2.vercel.app",
    "priceRange": "R$",
    "servesCuisine": ["Japanese", "Sushi"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1078",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
};
