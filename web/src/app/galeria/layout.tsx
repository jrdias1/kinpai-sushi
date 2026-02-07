import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria de Fotos - Kinpai Sushi",
  description: "Confira a galeria de fotos do Kinpai Sushi. Veja nossos pratos, ambiente sofisticado, equipe e dicas de ouro de culinária japonesa.",
  keywords: "fotos sushi, galeria Kinpai Sushi, pratos especiais, ambiente restaurante, equipe chefs, culinária japonesa visual",
  openGraph: {
    title: "Galeria de Fotos - Kinpai Sushi",
    description: "Explore as melhores fotos dos nossos pratos e ambiente. Qualidade, sofisticação e tradição em imagens.",
  },
};

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
