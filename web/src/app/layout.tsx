import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kinpai Sushi - Culinária Japonesa Premium em Petrópolis RJ",
  description: "Kinpai Sushi: A arte autêntica da culinária japonesa. Restaurante premium com 20 anos de tradição em Petrópolis. Rodízio de sushi, pratos sofisticados e ambiente elegante.",
  keywords: "sushi Petrópolis, restaurante japonês RJ, rodízio sushi, comida japonesa, sushi premium, culinária oriental, Kinpai Sushi",
  authors: [{ name: "Kinpai Sushi" }],
  metadataBase: new URL("https://kinpai-sushiv2.vercel.app"),
  openGraph: {
    title: "Kinpai Sushi - Culinária Japonesa Premium",
    description: "20 anos de tradição e excelência. Venha desfrutar da autêntica culinária japonesa em um ambiente sofisticado e luxuoso.",
    url: "https://kinpai-sushiv2.vercel.app",
    siteName: "Kinpai Sushi",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-sushi-premium.jpg",
        width: 1200,
        height: 630,
        alt: "Kinpai Sushi - Culinária Japonesa Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinpai Sushi - Culinária Japonesa Premium",
    description: "20 anos de tradição em culinária japonesa. Restaurante premium em Petrópolis RJ.",
    images: ["/images/hero-sushi-premium.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://kinpai-sushiv2.vercel.app",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#E7C36B" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Web App Manifest & PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        
        <link rel="canonical" href="https://kinpai-sushiv2.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              "sameAs": [
                "https://www.instagram.com/kinpaisushi/",
                "https://www.facebook.com/kinpai"
              ],
              "priceRange": "R$",
              "servesCuisine": ["Japanese", "Sushi"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1078",
                "bestRating": "5",
                "worstRating": "1"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "11:00",
                  "closes": "23:00"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${cinzel.variable} ${manrope.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
