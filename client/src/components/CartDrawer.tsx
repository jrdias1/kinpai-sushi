import { X, Minus, Plus, Trash2, Send, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } =
    useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    // Gerar mensagem formatada
    const itemsList = items
      .map((item) => `• ${item.quantity}x ${item.name} - R$ ${(item.price / 100).toFixed(2).replace(".", ",")}`)
      .join("\n");

    const totalPrice = (getTotalPrice() / 100).toFixed(2).replace(".", ",");

    const message = `Olá! Gostaria de fazer o seguinte pedido:\n\n${itemsList}\n\n*Total: R$ ${totalPrice}*\n\nPor favor, confirme a disponibilidade e o tempo de entrega.`;

    const whatsappUrl = `https://wa.me/5524988622?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Limpar carrinho após enviar
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-full md:w-96 lg:w-96 bg-[#1a1a1a] border-l border-[#5C4033] z-50 flex flex-col shadow-2xl">
        {/* Header - Mais limpo e profissional */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-6 border-b border-[#5C4033] bg-[#2C1810]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#D4AF37]/10 rounded-lg">
              <ShoppingBag size={24} className="text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-[#F5F1E8]">Seu Pedido</h2>
              <p className="text-xs text-[#D4C5B9]">{items.length} {items.length === 1 ? 'item' : 'itens'}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#D4C5B9] hover:text-[#F5F1E8] transition p-2 hover:bg-[#1a1a1a] rounded"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items - Com melhor espacejamento */}
        <div className="flex-1 overflow-y-auto px-3 md:px-4 py-4 md:py-6 space-y-3 md:space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 md:py-16 text-center">
              <div className="p-4 bg-[#2C1810] rounded-full mb-4">
                <ShoppingBag size={32} className="text-[#5C4033]" />
              </div>
              <p className="text-[#D4C5B9] text-sm md:text-base">
                Seu carrinho está vazio
              </p>
              <p className="text-[#5C4033] text-xs md:text-sm mt-2">
                Adicione pratos para começar
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-[#2C1810] p-3 md:p-4 rounded-lg border border-[#5C4033] hover:border-[#D4AF37] transition-all duration-200 group"
              >
                {/* Item Header */}
                <div className="flex justify-between items-start gap-2 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#F5F1E8] text-sm md:text-base line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-[#D4AF37] font-semibold text-sm md:text-base mt-1">
                      R$ {(item.price / 100).toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex-shrink-0 text-[#5C4033] hover:text-[#C41E3A] transition p-2 hover:bg-[#1a1a1a] rounded"
                    title="Remover item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Quantity Controls - Melhor design */}
                <div className="flex items-center justify-between gap-2 bg-[#1a1a1a] rounded-lg p-2 md:p-3 mb-3">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="text-[#D4AF37] hover:text-[#F5F1E8] hover:bg-[#2C1810] transition p-2 rounded"
                    title="Diminuir quantidade"
                  >
                    <Minus size={18} />
                  </button>
                  <div className="flex-1 text-center">
                    <span className="text-[#F5F1E8] font-bold text-lg">
                      {item.quantity}
                    </span>
                  </div>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-[#D4AF37] hover:text-[#F5F1E8] hover:bg-[#2C1810] transition p-2 rounded"
                    title="Aumentar quantidade"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                {/* Subtotal - Mais destacado */}
                <div className="flex justify-between items-center pt-2 border-t border-[#5C4033]">
                  <p className="text-[#D4C5B9] text-xs md:text-sm font-medium">
                    Subtotal:
                  </p>
                  <p className="text-[#D4AF37] font-bold text-sm md:text-base">
                    R$ {((item.price * item.quantity) / 100)
                      .toFixed(2)
                      .replace(".", ",")}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer - Total e Botões */}
        {items.length > 0 && (
          <div className="border-t border-[#5C4033] bg-[#2C1810] px-3 md:px-6 py-4 md:py-6 space-y-4 md:space-y-5">
            {/* Total Box - Destaque */}
            <div className="bg-[#1a1a1a] rounded-lg p-3 md:p-4 border-2 border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition">
              <div className="flex justify-between items-center">
                <span className="font-bold text-[#D4C5B9] text-sm md:text-base">
                  Total do Pedido:
                </span>
                <span className="text-[#D4AF37] font-bold text-2xl md:text-3xl">
                  R$ {(getTotalPrice() / 100).toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>

            {/* Checkout Button - Mais destaque */}
            <button
              onClick={handleCheckout}
              className="w-full bg-[#25D366] hover:bg-[#1fa857] active:scale-95 text-white font-bold py-3 md:py-4 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-widest text-sm md:text-base shadow-lg hover:shadow-xl"
            >
              <Send size={20} />
              Enviar Pedido
            </button>

            {/* Clear Cart Button - Mais discreto */}
            <button
              onClick={() => {
                clearCart();
                onClose();
              }}
              className="w-full bg-[#5C4033]/30 hover:bg-[#5C4033]/50 text-[#D4C5B9] hover:text-[#F5F1E8] font-semibold py-2 md:py-3 px-4 rounded-lg transition-all duration-200 text-sm md:text-base"
            >
              Limpar Carrinho
            </button>

            {/* Info Footer */}
            <p className="text-xs text-[#5C4033] text-center pt-2">
              Você será redirecionado para o WhatsApp para confirmar seu pedido
            </p>
          </div>
        )}
      </div>
    </>
  );
}

