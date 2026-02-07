"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import menuData from "@/data/menu.json";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  image_url?: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

export default function PedidoPage() {
  const items: MenuItem[] = Array.isArray(menuData) ? menuData : [];
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const parsePrice = (price: string): number => {
    return parseFloat(price.replace("R$", "").replace(",", "."));
  };

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.name === item.name);
      if (existing) {
        return prev.map((c) =>
          c.name === item.name ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((c) => c.name !== name));
  };

  const updateQuantity = (name: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(name);
    } else {
      setCart((prev) =>
        prev.map((c) => (c.name === name ? { ...c, quantity: qty } : c))
      );
    }
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.quantity,
    0
  );

  const generateMessage = () => {
    const items = cart
      .map((item) => `• ${item.name} (${item.quantity}x) - ${item.price}`)
      .join("\n");
    const total = `R$ ${totalPrice.toFixed(2).replace(".", ",")}`;
    return encodeURIComponent(
      `Olá! Gostaria de fazer o seguinte pedido:\n\n${items}\n\n*Total: ${total}*`
    );
  };

  const handleFinalizeOrder = () => {
    if (cart.length === 0) return;
    const msg = generateMessage();
    window.open(`https://wa.me/5524988622222?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black/30 to-black px-6 py-32 text-center">
        <h1 className="font-display text-5xl tracking-widest">MONTE SEU PEDIDO</h1>
        <p className="mt-4 text-stone-300">
          Escolha seus pratos favoritos e envie direto para o WhatsApp
        </p>
      </section>

      {/* Menu Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Menu Items - Left Side */}
          <div className="lg:col-span-3">
            {items.length === 0 ? (
              <div className="flex min-h-96 items-center justify-center">
                <p className="text-stone-400">Nenhum item encontrado</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {items.map((item, idx) => {
                  const img =
                    item.image_url && !item.image_url.includes("no-image")
                      ? item.image_url
                      : "/images/menu-1.jpg";

                  return (
                    <div
                      key={idx}
                      className="group rounded-lg border border-white/10 bg-white/5 p-0 transition hover:border-[#E7C36B]/50 hover:bg-white/10"
                    >
                      {/* Imagem */}
                      <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
                        <img
                          src={img}
                          alt={item.name}
                          className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                          onError={(e) => {
                            e.currentTarget.src = "/images/menu-1.jpg";
                          }}
                        />
                      </div>

                      {/* Info */}
                      <div className="p-4">
                        <h3 className="text-sm font-semibold line-clamp-2">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="mt-1 text-xs text-stone-400 line-clamp-1">
                            {item.description}
                          </p>
                        )}
                        <div className="mt-3 flex items-center justify-between">
                          <span className="font-bold text-[#E7C36B]">
                            {item.price}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="rounded bg-[#E7C36B] px-2 py-1 text-xs font-bold text-black hover:bg-[#f3d77f]"
                          >
                            Adicionar
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Carrinho - Right Side (Desktop) / Modal (Mobile) */}
          <div className="hidden lg:block sticky top-24 h-fit">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h2 className="font-display text-xl tracking-widest">CARRINHO</h2>
              <div className="mt-6 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-center text-sm text-stone-400">
                    Sem itens
                  </p>
                ) : (
                  <>
                    {cart.map((item) => (
                      <div
                        key={item.name}
                        className="border-b border-white/10 pb-4"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="text-sm font-semibold line-clamp-1">
                              {item.name}
                            </p>
                            <p className="text-xs text-[#E7C36B]">
                              {item.price}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.name)}
                            className="text-xs text-stone-400 hover:text-red-400"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.name, item.quantity - 1)
                            }
                            className="w-6 h-6 flex items-center justify-center rounded border border-white/20 hover:bg-white/10"
                          >
                            −
                          </button>
                          <span className="flex-1 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.name, item.quantity + 1)
                            }
                            className="w-6 h-6 flex items-center justify-center rounded border border-white/20 hover:bg-white/10"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="mt-4 border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-[#E7C36B]">
                          R$ {totalPrice.toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                      <button
                        onClick={handleFinalizeOrder}
                        className="w-full rounded bg-[#E7C36B] py-2 font-bold text-black hover:bg-[#f3d77f] transition"
                      >
                        Finalizar Pedido
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Cart Button */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <button
          onClick={() => setShowCart(!showCart)}
          className="relative rounded-full bg-[#E7C36B] p-4 text-black font-bold shadow-lg hover:bg-[#f3d77f] transition"
        >
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/50 lg:hidden">
          <div className="w-full rounded-t-2xl border border-white/10 bg-[#070707] p-6 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-xl tracking-widest">CARRINHO</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-sm text-stone-400">Sem itens</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div
                      key={item.name}
                      className="border-b border-white/10 pb-4"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="text-sm font-semibold line-clamp-1">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#E7C36B]">{item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="text-xs text-stone-400 hover:text-red-400"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.name, item.quantity - 1)
                          }
                          className="w-6 h-6 flex items-center justify-center rounded border border-white/20 hover:bg-white/10"
                        >
                          −
                        </button>
                        <span className="flex-1 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.name, item.quantity + 1)
                          }
                          className="w-6 h-6 flex items-center justify-center rounded border border-white/20 hover:bg-white/10"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold text-[#E7C36B]">
                        R$ {totalPrice.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        handleFinalizeOrder();
                        setShowCart(false);
                      }}
                      className="w-full rounded bg-[#E7C36B] py-2 font-bold text-black hover:bg-[#f3d77f] transition"
                    >
                      Finalizar Pedido
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
