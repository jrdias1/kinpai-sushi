import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, X, MessageCircle, Plus, ShoppingBag } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/contexts/CartContext";
import CartButton from "@/components/CartButton";
import CartDrawer from "@/components/CartDrawer";
import HeroCarousel from "@/components/HeroCarousel";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image_url: string;
  xmenu_id?: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export default function Menu() {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [filteredData, setFilteredData] = useState<MenuItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { addItem, getTotalItems } = useCart();
  const lastClickRef = useRef<number>(0);

  const carouselImages = [
    "/images/hero-sushi-premium.jpg",
    "/images/carousel-1-sushi-close.jpg",
    "/images/carousel-2-chef-hands.jpg",
    "/images/carousel-3-plating.jpg",
  ];

  // Categorias organizadas
  const categories = [
    "Todos",
    "Combos & Executivos",
    "Entradas",
    "Sashimi",
    "Sushi & Nigiri",
    "Hot Rolls",
    "Makimono",
    "Combinados",
    "Temaki",
    "Especiais",
    "Bebidas"
  ];

  useEffect(() => {
    fetch("/menu_data.json")
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Erro ao carregar menu:", error));
  }, []);

  useEffect(() => {
    let filtered = menuData;

    // Filtrar por categoria
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter((item) =>
        categorizeItem(item.name).includes(selectedCategory)
      );
    }

    // Filtrar por busca
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedCategory, menuData]);

  const categorizeItem = (name: string): string => {
    const nameLower = name.toLowerCase();
    
    if (nameLower.includes("combo") || nameLower.includes("executivo")) {
      return "Combos & Executivos";
    }
    if (
      nameLower.includes("gyoza") ||
      nameLower.includes("harumaki") ||
      nameLower.includes("edamame") ||
      nameLower.includes("sunomono") ||
      nameLower.includes("shimeji") ||
      nameLower.includes("shiitake") ||
      nameLower.includes("missoshiro") ||
      nameLower.includes("pipoca") ||
      nameLower.includes("nira")
    ) {
      return "Entradas";
    }
    if (nameLower.includes("sashimi")) {
      return "Sashimi";
    }
    if (nameLower.includes("sushi") && !nameLower.includes("combinado")) {
      return "Sushi & Nigiri";
    }
    if (nameLower.includes("hot") || nameLower.includes("crock")) {
      return "Hot Rolls";
    }
    if (
      nameLower.includes("roll") ||
      nameLower.includes("maki") ||
      nameLower.includes("uramaki")
    ) {
      return "Makimono";
    }
    if (nameLower.includes("combinado") || nameLower.includes("monte")) {
      return "Combinados";
    }
    if (nameLower.includes("temaki")) {
      return "Temaki";
    }
    if (
      nameLower.includes("tataki") ||
      nameLower.includes("poke") ||
      nameLower.includes("ceviche") ||
      nameLower.includes("carpaccio") ||
      nameLower.includes("ussuzukuri")
    ) {
      return "Especiais";
    }
    if (
      nameLower.includes("refrigerante") ||
      nameLower.includes("suco") ||
      nameLower.includes("água") ||
      nameLower.includes("cerveja") ||
      nameLower.includes("sake") ||
      nameLower.includes("vinho")
    ) {
      return "Bebidas";
    }
    return "Todos";
  };

  const handleOrderClick = (item: MenuItem) => {
    // Prevenir cliques duplos
    const now = Date.now();
    if (now - lastClickRef.current < 300) {
      return;
    }
    lastClickRef.current = now;

    // Converter preço de string para número (ex: "R$ 47,90" -> 4790 centavos)
    const priceStr = item.price.replace("R$ ", "").replace(",", ".");
    const priceInCents = Math.round(parseFloat(priceStr) * 100);
    
    addItem({
      name: item.name,
      price: priceInCents,
      description: item.description,
      image_url: item.image_url,
    });
  };

  const handleOrderOption = (option: string) => {
    let url = "";
    const message = selectedItem
      ? `Olá! Vi o ${selectedItem.name} no cardápio e gostaria de pedir!`
      : "Olá! Gostaria de fazer um pedido.";

    if (option === "whatsapp") {
      url = `https://wa.me/5524988622?text=${encodeURIComponent(message)}`;
    } else if (option === "ifood") {
      url =
        "https://www.ifood.com.br/delivery/petropolis-rj/kinpai-sushi-valparaiso/30557874-9aa9-4d08-a2b9-080cdc921a9f";
    } else if (option === "xmenu") {
      url = "https://xmenu.com.br/pedidos/?loja=19665";
    }

    window.open(url, "_blank");
    setShowOrderModal(false);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#F5F1E8]">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#1a1a1a]/95 backdrop-blur border-b border-[#5C4033]">
        <div className="container flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/images/logo-kinpai.jpg" 
              alt="Kinpai Sushi" 
              className="h-14 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="hover:text-[#D4AF37] transition">
              Home
            </a>
            <a href="/menu" className="text-[#D4AF37]">
              Menu
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowCart(true)}
              className="relative text-[#D4AF37] hover:text-[#F5F1E8] transition p-2 rounded hover:bg-[#2C1810]"
              title="Ver carrinho"
            >
              <ShoppingBag size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C41E3A] text-[#F5F1E8] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <Button
              onClick={() => setShowOrderModal(true)}
              className="bg-[#C41E3A] hover:bg-[#A01729] text-[#F5F1E8] uppercase text-sm font-bold tracking-widest"
            >
              Pedir Agora
            </Button>
          </div>
        </div>
      </header>

      {/* HERO SECTION - Com Carrossel Background */}
      <section className="relative pt-20 pb-12 md:pb-16">
        {/* Background Carrossel */}
        <div className="absolute inset-0 top-0 h-80 md:h-96">
          <HeroCarousel images={carouselImages} autoPlayInterval={5000} />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 top-0 h-80 md:h-96 bg-gradient-to-b from-black/30 via-black/50 to-[#1a1a1a]"></div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="text-center mb-8 md:mb-12 pt-20 md:pt-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4">
              Nosso <span className="gold-accent">Cardápio</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#D4C5B9] max-w-2xl mx-auto px-3">
              Explore nossa seleção premium de pratos japoneses autênticos
            </p>
            <div className="h-1 w-20 sm:w-24 bg-[#D4AF37] mx-auto mt-4 md:mt-6"></div>
          </div>

          {/* SEARCH BAR */}
          <div className="max-w-2xl mx-auto mb-8 md:mb-12 px-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37]" size={20} />
              <Input
                type="text"
                placeholder="Buscar pratos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-12 h-12 md:h-14 bg-[#2C1810] border-[#5C4033] text-[#F5F1E8] placeholder:text-[#D4C5B9]/50 focus:border-[#D4AF37] text-sm md:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D4C5B9] hover:text-[#F5F1E8]"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-4 mb-0 scrollbar-hide px-3 md:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 md:px-6 py-2 md:py-3 rounded-full whitespace-nowrap font-semibold transition text-xs sm:text-sm md:text-base ${
                  selectedCategory === category
                    ? "bg-[#D4AF37] text-[#1a1a1a]"
                    : "bg-[#2C1810] text-[#D4C5B9] border border-[#5C4033] hover:border-[#D4AF37]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MENU GRID */}
      <section className="py-8 md:py-12 bg-[#1a1a1a]">
        <div className="container">
          {filteredData.length === 0 ? (
            <div className="text-center py-12 md:py-20">
              <p className="text-[#D4C5B9] text-base md:text-xl">
                Nenhum prato encontrado com "{searchTerm}"
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredData.map((item, idx) => (
                <Card
                  key={idx}
                  className="bg-[#2C1810] border-[#5C4033] overflow-hidden group hover:border-[#D4AF37] transition-all duration-300 cursor-pointer flex flex-col"
                  onClick={() => handleOrderClick(item)}
                >
                  <div className="relative overflow-hidden h-48 md:h-56">
                    {item.image_url &&
                    !item.image_url.includes("no-image.png") ? (
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
                        <span className="text-[#5C4033] text-xs md:text-sm text-center px-2">
                          Imagem não disponível
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/40">
                      <span className="text-[#D4AF37] font-bold text-xs md:text-sm uppercase tracking-widest">Clique para pedir</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <span className="text-[#D4AF37] font-bold text-lg md:text-xl">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 md:p-5 flex flex-col flex-1">
                    <h3 className="text-base md:text-lg font-bold mb-2 gold-accent line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-[#D4C5B9] text-xs md:text-sm line-clamp-2 min-h-[40px] flex-1">
                      {item.description || "Delicioso prato japonês"}
                    </p>
                    <div className="flex items-center justify-between mt-3 md:mt-4 gap-2">
                      <span className="text-[#D4AF37] font-bold text-sm md:text-base">{item.price}</span>
                      <button
                        onClick={() => handleOrderClick(item)}
                        className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#1a1a1a] p-2 md:p-2 rounded transition flex items-center gap-1 font-semibold text-xs md:text-sm"
                      >
                        <Plus size={16} className="md:w-5 md:h-5" />
                        <span className="hidden md:inline">Adicionar</span>
                        <span className="md:hidden">+</span>
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>



      {/* CART BUTTON - MOBILE ONLY - Floating */}
      <div className="md:hidden">
        <CartButton onClick={() => setShowCart(true)} />
      </div>

      {/* CART DRAWER */}
      <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)} />

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/5524988622"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-6 right-6 z-40 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle size={28} className="md:w-8 md:h-8" />
      </a>

      {/* FOOTER */}
      <footer className="bg-[#0f0f0f] border-t border-[#5C4033] py-8 md:py-12 text-center">
        <div className="container">
          <p className="text-[#D4C5B9] text-xs md:text-sm">&copy; 2026 Kinpai Sushi. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
