import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useCallback } from "react";

interface CartButtonProps {
  onClick: () => void;
}

export default function CartButton({ onClick }: CartButtonProps) {
  const { getTotalItems, getTotalPrice } = useCart();
  const totalItems = getTotalItems();

  // Usar useCallback para evitar renderizações múltiplas
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  if (totalItems === 0) {
    return null; // Não mostrar se o carrinho está vazio
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-40 bg-[#D4AF37] text-[#1a1a1a] p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group md:p-4"
      title="Ver carrinho"
    >
      <div className="relative">
        <ShoppingBag size={22} className="md:w-7 md:h-7" />
        <span className="absolute -top-2 -right-2 bg-[#C41E3A] text-[#F5F1E8] text-xs font-bold rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
          {totalItems}
        </span>
      </div>
      <div className="absolute left-full ml-3 bg-[#2C1810] text-[#F5F1E8] px-3 py-2 rounded whitespace-nowrap text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#D4AF37] hidden md:block">
        R$ {(getTotalPrice() / 100).toFixed(2).replace(".", ",")}
      </div>
    </button>
  );
}
