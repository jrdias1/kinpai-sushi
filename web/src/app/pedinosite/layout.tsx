import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cardápio e Pedidos - Kinpai Sushi",
  description: "Confira o cardápio completo de pratos especiais, rodízio, combinados e bebidas. Faça seu pedido online por WhatsApp no Kinpai Sushi Petrópolis.",
  keywords: "cardápio sushi, prato especial, rodízio, combinado, pedir online, WhatsApp, delivery sushi, preço sushi",
  openGraph: {
    title: "Cardápio e Pedidos Online - Kinpai Sushi",
    description: "Faça seu pedido online de sushi, combinados e pratos especiais. Entrega e retirada em Petrópolis RJ.",
  },
};

export default function PedinositeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
