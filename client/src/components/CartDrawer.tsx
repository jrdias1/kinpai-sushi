import { X, Minus, Plus, Trash2, Send } from "lucide-react";
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
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-[#2C1810] border-l border-[#5C4033] z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#5C4033]">
          <h2 className="text-2xl font-bold text-[#F5F1E8]">Seu Pedido</h2>
          <button
            onClick={onClose}
            className="text-[#D4C5B9] hover:text-[#F5F1E8] transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-[#D4C5B9] text-center py-8">
              Seu carrinho está vazio
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-[#1a1a1a] p-4 rounded border border-[#5C4033] hover:border-[#D4AF37] transition"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-[#F5F1E8]">{item.name}</h3>
                    <p className="text-[#D4AF37] font-semibold">
                      R$ {(item.price / 100).toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-[#C41E3A] hover:text-[#FF6B6B] transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-[#2C1810] rounded p-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="text-[#D4AF37] hover:text-[#F5F1E8] transition p-1"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="flex-1 text-center text-[#F5F1E8] font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-[#D4AF37] hover:text-[#F5F1E8] transition p-1"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <p className="text-[#D4C5B9] text-sm mt-2">
                  Subtotal: R${" "}
                  {((item.price * item.quantity) / 100)
                    .toFixed(2)
                    .replace(".", ",")}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#5C4033] p-6 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-bold text-[#F5F1E8]">Total:</span>
              <span className="text-[#D4AF37] font-bold text-xl">
                R$ {(getTotalPrice() / 100).toFixed(2).replace(".", ",")}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#25D366] hover:bg-[#1fa857] text-white font-bold py-4 rounded transition flex items-center justify-center gap-2 uppercase tracking-widest"
            >
              <Send size={20} />
              Finalizar no WhatsApp
            </button>

            <button
              onClick={() => {
                clearCart();
                onClose();
              }}
              className="w-full bg-[#5C4033] hover:bg-[#6B5344] text-[#F5F1E8] font-semibold py-2 rounded transition"
            >
              Limpar Carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
}
