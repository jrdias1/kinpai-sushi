import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, MapPin, Phone, Clock, Instagram, Facebook, Star, Plus, ShoppingBag } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import { useCart } from "@/contexts/CartContext";
import CartButton from "@/components/CartButton";
import CartDrawer from "@/components/CartDrawer";

/**
 * Kinpai Sushi - Home Page
 * Design: Dark Luxury & Gold
 * 
 * Seções:
 * 1. Hero Section - Vídeo com CTA principal
 * 2. Feed Instagram - Carrossel de fotos
 * 3. Chef & Tradição - Autoridade e expertise
 * 4. Favoritos da Casa - Menu visual
 * 5. Localização - SEO Local
 */

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image_url: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { addItem, getTotalItems } = useCart();
  const lastClickRef = useRef<number>(0);
  const [randomDishes, setRandomDishes] = useState<MenuItem[]>([]);

  const carouselImages = [
    "/images/hero-sushi-premium.jpg",
    "/images/carousel-1-sushi-close.jpg",
    "/images/carousel-2-chef-hands.jpg",
    "/images/carousel-3-plating.jpg",
  ];

  // Fallback em caso de erro ao carregar o menu
  const fallbackDishes = [
    {
      name: "Salmão Trufado",
      description: "Salmão premium com óleo de trufado",
      image: "/images/hero-sushi-premium.jpg",
      price: "R$ 48,00",
    },
    {
      name: "Niguiri Especial",
      description: "Seleção de niguiris com peixes frescos",
      image: "/images/hero-sushi-premium.jpg",
      price: "R$ 52,00",
    },
    {
      name: "Uni Roe",
      description: "Ovas de ouriço fresco importado",
      image: "/images/hero-sushi-premium.jpg",
      price: "R$ 45,00",
    },
    {
      name: "Toro Nigiri",
      description: "Barriga de atum com gordura premium",
      image: "/images/hero-sushi-premium.jpg",
      price: "R$ 55,00",
    },
  ];

  // Usar pratos aleatórios ou fallback
  const dishes = randomDishes.length > 0 
    ? randomDishes.map(item => ({
        name: item.name,
        description: item.description,
        image: item.image_url || "/images/hero-sushi-premium.jpg",
        price: item.price,
      }))
    : fallbackDishes;

  const chefImages = [
    "/images/chef/chef (1).jpeg",
    "/images/chef/chef (2).jpeg",
    "/images/chef/chef (3).jpeg",
  ];

  // Carregar pratos aleatórios do cardápio
  useEffect(() => {
    fetch("/menu_data.json")
      .then((response) => response.json())
      .then((data: MenuItem[]) => {
        // Selecionar 4 pratos aleatórios
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setRandomDishes(shuffled.slice(0, 4));
      })
      .catch((error) => console.error("Erro ao carregar menu:", error));
  }, []);

  // Carrossel automático do chef
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % chefImages.length);
    }, 4000); // Troca a cada 4 segundos
    return () => clearInterval(interval);
  }, [chefImages.length]);

  const instagramPosts = [
    { id: 1, image: "/images/hero-sushi-premium.jpg", likes: 234 },
    { id: 2, image: "/images/chef-authority.jpg", likes: 567 },
    { id: 3, image: "/images/hero-sushi-premium.jpg", likes: 345 },
    { id: 4, image: "/images/chef-authority.jpg", likes: 456 },
    { id: 5, image: "/images/hero-sushi-premium.jpg", likes: 678 },
    { id: 6, image: "/images/chef-authority.jpg", likes: 789 },
  ];

  const handleOrderClick = (dishName: string, price: string) => {
    // Prevenir cliques duplos
    const now = Date.now();
    if (now - lastClickRef.current < 300) {
      return;
    }
    lastClickRef.current = now;

    // Converter preço de string para número (ex: "R$ 47,90" -> 4790 centavos)
    const priceStr = price.replace("R$ ", "").replace(",", ".");
    const priceInCents = Math.round(parseFloat(priceStr) * 100);
    
    addItem({
      name: dishName,
      price: priceInCents,
    });
  };

  const handleRefreshDishes = () => {
    fetch("/menu_data.json")
      .then((response) => response.json())
      .then((data: MenuItem[]) => {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setRandomDishes(shuffled.slice(0, 4));
      })
      .catch((error) => console.error("Erro ao carregar menu:", error));
  };

  const handleMainCTA = () => {
    setShowOrderModal(true);
  };

  const handleOrderOption = (option: string) => {
    let url = '';
    const message = "Olá! Gostaria de fazer um pedido.";
    
    if (option === 'whatsapp') {
      url = `https://wa.me/5524988622?text=${encodeURIComponent(message)}`;
    } else if (option === 'ifood') {
      url = 'https://www.ifood.com.br/delivery/petropolis-rj/kinpai-sushi-valparaiso/30557874-9aa9-4d08-a2b9-080cdc921a9f';
    } else if (option === 'xmenu') {
      url = 'https://xmenu.com.br/pedidos/?loja=19665';
    }
    
    window.open(url, '_blank');
    setShowOrderModal(false);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#F5F1E8]">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 w-full z-50 bg-[#1a1a1a]/95 backdrop-blur border-b border-[#5C4033]">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2 -ml-6">
            <img 
              src="/images/logo-kinpai.jpg" 
              alt="Kinpai Sushi" 
              className="h-24 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-[#D4AF37] transition">
              Home
            </a>
            <a href="#chef" className="hover:text-[#D4AF37] transition">
              Chef
            </a>
            <a href="/menu" className="hover:text-[#D4AF37] transition">
              Cardápio
            </a>
            <a href="#location" className="hover:text-[#D4AF37] transition">
              Localização
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
              onClick={() => window.location.href = '/menu'}
              className="bg-[#C41E3A] hover:bg-[#A01729] text-[#F5F1E8] uppercase text-sm font-bold tracking-widest"
            >
              Pedir no Site
            </Button>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Carousel Background */}
        <div className="absolute inset-0 top-0">
          <HeroCarousel images={carouselImages} autoPlayInterval={3000} />
        </div>

        {/* Content */}
        <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center pt-32">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-[#F5F1E8] leading-tight drop-shadow-lg">
            Kinpai <span className="gold-accent">Sushi</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#D4C5B9] mb-12 font-light drop-shadow">
            Experiência gastronômica de luxo em Petrópolis
          </p>

          {/* CTA Button */}
          <button
            onClick={handleMainCTA}
            className="cta-button mb-12 animate-pulse hover:animate-none"
          >
            Fazer Pedido Agora
          </button>

          {/* Order Modal */}
          {showOrderModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-[#2C1810] border-2 border-[#D4AF37] rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-[#F5F1E8] mb-6 text-center">Escolha como Pedir</h2>
                <div className="space-y-3">
                  <button
                    onClick={() => handleOrderOption('whatsapp')}
                    className="w-full bg-[#25D366] hover:bg-[#1fa857] text-white font-bold py-3 rounded transition"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => handleOrderOption('ifood')}
                    className="w-full bg-[#EA1D2C] hover:bg-[#c41a23] text-white font-bold py-3 rounded transition"
                  >
                    iFood
                  </button>
                  <button
                    onClick={() => handleOrderOption('xmenu')}
                    className="w-full bg-[#D4AF37] hover:bg-[#b8941f] text-[#1a1a1a] font-bold py-3 rounded transition"
                  >
                    xMenu
                  </button>
                </div>
                <button
                  onClick={() => setShowOrderModal(false)}
                  className="w-full mt-4 text-[#D4C5B9] hover:text-[#F5F1E8] transition"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          {/* Diferenciais */}
          <div className="flex flex-col md:flex-row justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <span>Embalagem Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <span>Nota 4.9 no Google</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-[#D4AF37]" size={24} />
        </div>
      </section>

      {/* ===== 20 ANOS DE HISTÓRIA ===== */}
      <section id="history" className="py-20 bg-[#2C1810] border-t border-[#5C4033]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="relative">
              <div className="luxury-border p-2">
                <video
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663043401180/CsXssxZRxBcpsFaM.mp4"
                  controls
                  className="w-full h-auto object-cover rounded"
                  poster="/images/hero-sushi-premium.jpg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                20 Anos de <span className="gold-accent">História</span>
              </h2>
              <p className="text-[#D4C5B9] text-lg mb-6 leading-relaxed">
                Nossa história continua. Desde o início, o Kinpai se dedica a trazer a autenticidade e qualidade da culinária japonesa para Petrópolis e Valparaíso.
              </p>
              <p className="text-[#D4C5B9] text-lg mb-8 leading-relaxed">
                Ao longo de duas décadas, consolidamos nossa reputação através de experiências memoráveis e um compromisso inabalável com a excelência.
              </p>
              
              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] p-4 rounded border border-[#5C4033] hover:border-[#D4AF37] transition">
                  <h3 className="text-[#D4AF37] font-bold mb-2">Rodízio</h3>
                  <p className="text-[#D4C5B9] text-sm">Experiência completa</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded border border-[#5C4033] hover:border-[#D4AF37] transition">
                  <h3 className="text-[#D4AF37] font-bold mb-2">Eventos</h3>
                  <p className="text-[#D4C5B9] text-sm">Celebrações especiais</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded border border-[#5C4033] hover:border-[#D4AF37] transition">
                  <h3 className="text-[#D4AF37] font-bold mb-2">Delivery</h3>
                  <p className="text-[#D4C5B9] text-sm">Entrega rápida</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded border border-[#5C4033] hover:border-[#D4AF37] transition">
                  <h3 className="text-[#D4AF37] font-bold mb-2">Almoço Executivo</h3>
                  <p className="text-[#D4C5B9] text-sm">Menu especial</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded border border-[#5C4033] hover:border-[#D4AF37] transition">
                  <h3 className="text-[#D4AF37] font-bold mb-2">À La Carte</h3>
                  <p className="text-[#D4C5B9] text-sm">Seleção premium</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded border border-[#5C4033] hover:border-[#D4AF37] transition">
                  <h3 className="text-[#D4AF37] font-bold mb-2">Dose Dupla</h3>
                  <p className="text-[#D4C5B9] text-sm">Promoção especial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAVORITOS DA CASA ===== */}
      <section id="menu" className="py-20 bg-[#1a1a1a] border-t border-[#5C4033]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Favoritos da <span className="gold-accent">Casa</span>
            </h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto"></div>
            <button
              onClick={handleRefreshDishes}
              className="mt-6 text-[#D4AF37] hover:text-[#F5F1E8] transition text-sm font-semibold flex items-center gap-2 mx-auto"
            >
              🔄 Ver outras sugestões
            </button>
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dishes.length > 0 ? dishes.map((dish, idx) => (
            <Card
              key={idx}
              className="bg-[#2C1810] border-[#5C4033] overflow-hidden group hover:border-[#D4AF37] transition-all duration-300"
            >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 gold-accent">
                    {dish.name}
                  </h3>
                  <p className="text-[#D4C5B9] text-sm mb-4">
                    {dish.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#D4AF37] font-bold text-lg">
                      {dish.price}
                    </span>
                    <button
                      onClick={() => handleOrderClick(dish.name, dish.price)}
                      className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#1a1a1a] px-2 py-1 rounded transition text-xs md:text-sm font-semibold flex items-center gap-1"
                    >
                      <Plus size={14} className="md:w-4 md:h-4" />
                      <span className="hidden md:inline">Adicionar</span>
                      <span className="md:hidden">+</span>
                    </button>
                  </div>
                </div>
              </Card>
            )) : (
              <div className="col-span-full text-center py-12">
                <p className="text-[#D4C5B9]">Carregando pratos especiais...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== CHEF & TRADIÇÃO ===== */}
      <section id="chef" className="py-20 bg-[#2C1810] border-t border-[#5C4033]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Chef Carousel */}
            <div className="relative">
              <div className="luxury-border p-2">
                <div className="relative overflow-hidden rounded bg-[#5C4033]">
                  <img
                    src={chefImages[activeTab]}
                    alt="Chef Nunes"
                    className="w-full h-auto object-cover transition-opacity duration-500 opacity-100"
                  />
                  {/* Overlay degradado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent"></div>
                </div>
                {/* Carousel Controls */}
                <div className="flex justify-center gap-3 mt-6">
                  {chefImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeTab === idx ? "bg-[#D4AF37] w-8" : "bg-[#5C4033] hover:bg-[#D4AF37]/50"
                      }`}
                      title={`Foto ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                O Chef & a <span className="gold-accent">Tradição</span>
              </h2>
              <p className="text-[#D4C5B9] text-lg mb-6 leading-relaxed">
                Com mais de 20 anos de experiência, o Chef Nunes traz a
                autenticidade da culinária japonesa para Petrópolis. Cada prato
                é preparado com rigor técnico e seleção minuciosa dos melhores
                peixes frescos importados.
              </p>
              <p className="text-[#D4C5B9] text-lg mb-8 leading-relaxed">
                Nossa filosofia é simples: qualidade premium, técnica impecável
                e respeito à tradição japonesa. Cada nigiri é uma obra de arte.
              </p>
              <a href="/history">
                <Button className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#2C1810] font-bold uppercase tracking-widest">
                  Conheça Nossa História
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCALIZAÇÃO ===== */}
      <section
        id="location"
        className="py-20 bg-[#2C1810] border-t border-[#5C4033]"
      >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Localização & <span className="gold-accent">Experiência</span>
            </h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="luxury-border p-2">
              <div className="bg-[#5C4033] h-96 flex items-center justify-center rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.123456789!2d-43.2045!3d-22.5055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda5c8b29b2d9%3A0x123456!2sKinpai%20Sushi%20Bar!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Kinpai Sushi - R. Gonçalves Dias, 423 - Valparaíso, Petrópolis"
                />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 gold-accent">
                  Petrópolis
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#D4AF37] mt-1 flex-shrink-0" />
                    <div className="text-[#D4C5B9]">
                      <p><strong>Kinpai Sushi Bar</strong></p>
                      <p>R. Gonçalves Dias, 423 - Valparaíso</p>
                      <p>Petrópolis - RJ, 25655-122</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-[#D4AF37] mt-1 flex-shrink-0" />
                    <a href="tel:+5524988622" className="text-[#D4C5B9] hover:text-[#D4AF37] transition">
                      (24) 2248-8622
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-[#D4AF37] mt-1 flex-shrink-0" />
                    <div className="text-[#D4C5B9]">
                      <p>Seg-Sab: 12h - 23:30h</p>
                      <p className="text-sm text-[#D4C5B9]/70 mt-1">Rodízio: Ter/Qui 18h</p>
                      <p className="text-sm text-[#D4C5B9]/70">Dose Dupla: Seg 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.ifood.com.br/delivery/petropolis-rj/kinpai-sushi-valparaiso/30557874-9aa9-4d08-a2b9-080cdc921a9f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 cta-button bg-[#C41E3A] hover:bg-[#A01729] text-[#F5F1E8] text-center"
                >
                  Pedir no iFood
                </a>
                <a
                  href="https://xmenu.com.br/pedidos/?loja=19665"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 cta-button bg-[#C41E3A] hover:bg-[#A01729] text-[#F5F1E8] text-center"
                >
                  Pedir no Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CART BUTTON */}
      <CartButton onClick={() => setShowCart(true)} />

      {/* CART DRAWER */}
      <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)} />

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0f0f0f] border-t border-[#5C4033] py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Sobre */}
            <div>
              <h4 className="font-bold mb-4 gold-accent">Sobre</h4>
              <p className="text-[#D4C5B9] text-sm">
                Kinpai Sushi: Tradição, qualidade e luxo em cada prato.
              </p>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="font-bold mb-4 gold-accent">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/kinpaisushi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#F5F1E8] transition"
                  title="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/kinpai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#F5F1E8] transition"
                  title="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.tripadvisor.com.br/Restaurant_Review-g303504-d6007492-Reviews-Kinpai_SushiBar-Petropolis_State_of_Rio_de_Janeiro.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#F5F1E8] transition"
                  title="TripAdvisor"
                >
                  <Star size={20} />
                </a>
              </div>
            </div>

            {/* Informações */}
            <div>
              <h4 className="font-bold mb-4 gold-accent">Informações</h4>
              <div className="text-[#D4C5B9] text-sm space-y-2">
                <p><strong>CNPJ:</strong> XX.XXX.XXX/0001-XX</p>
                <p><strong>Endereço:</strong></p>
                <p>R. Gonçalves Dias, 423</p>
                <p>Valparaíso, Petrópolis - RJ</p>
                <p>25655-122</p>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-bold mb-4 gold-accent">Contato</h4>
              <div className="text-[#D4C5B9] text-sm space-y-2">
                <p>
                  <strong>Telefone:</strong><br/>
                  <a href="tel:+5524988622" className="hover:text-[#D4AF37] transition">
                    (24) 98862-2222
                  </a>
                </p>
                <p>
                  <strong>Email:</strong><br/>
                  <a href="mailto:contato@kinpai.com.br" className="hover:text-[#D4AF37] transition">
                    contato@kinpai.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#5C4033] pt-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <p className="text-[#D4C5B9] text-sm">
                &copy; 2026 Kinpai Sushi. Todos os direitos reservados.
              </p>
              <a
                href="https://www.instagram.com/essencial_comunicacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                title="Essencial Comunicação"
              >
                <img
                  src="/images/logoessencial.png"
                  alt="Essencial Comunicação"
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>
            <div className="text-center text-[#D4C5B9] text-xs">
              <p>Desenvolvido por Essencial Comunicação</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
