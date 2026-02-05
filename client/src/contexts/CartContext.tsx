import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  image_url?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id" | "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Carregar do localStorage ao iniciar
    const saved = localStorage.getItem("kinpai_cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Salvar no localStorage sempre que os itens mudam
  useEffect(() => {
    localStorage.setItem("kinpai_cart", JSON.stringify(items));
  }, [items]);

  const addItem = (item: Omit<CartItem, "id" | "quantity">) => {
    setItems((prevItems) => {
      // Verificar se o item já existe
      const existingItem = prevItems.find((i) => i.name === item.name);

      if (existingItem) {
        // Se existe, aumentar a quantidade
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Se não existe, adicionar novo item
        return [
          ...prevItems,
          {
            id: `${item.name}-${Date.now()}`,
            ...item,
            quantity: 1,
          },
        ];
      }
    });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setItems((prevItems) =>
        prevItems.map((i) => (i.id === id ? { ...i, quantity } : i))
      );
    }
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de CartProvider");
  }
  return context;
};
