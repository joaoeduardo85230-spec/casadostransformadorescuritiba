import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  Phone,
  Zap,
  Menu,
  X,
  ArrowRight,
  Settings2,
  Check,
  MapPin,
  Maximize2,
  Download
} from 'lucide-react';

import heroTransformerImg from './assets/images/hero_transformer_custom.jpg';
import productTrifasicoImg from './assets/images/product_trifasico_custom.jpg';
import productComandoImg from './assets/images/product_comando_custom.png';
import productDomesticoImg from './assets/images/product_domestico_custom.jpg';
import aboutEletricoImg from './assets/images/about_custom.jpg';

export default function App() {
  // Configurações de contato fáceis de editar
  const [whatsAppDisplay, setWhatsAppDisplay] = useState('(41) 9904-4039');
  const [whatsAppRaw, setWhatsAppRaw] = useState('554199044039');
  const [emailDisplay, setEmailDisplay] = useState('contato@casadostransformadores.com.br');
  
  // Controle do menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Modal de visualização de imagem em tamanho real
  const [selectedImageForPreview, setSelectedImageForPreview] = useState<{ url: string; name: string } | null>(null);
  // Modal de personalização rápida de contatos
  const [configModalOpen, setConfigModalOpen] = useState(false);
  const [tempPhone, setTempPhone] = useState(whatsAppDisplay);
  const [tempEmail, setTempEmail] = useState(emailDisplay);
  const [savedAlert, setSavedAlert] = useState(false);

  const cleanPhone = (val: string) => {
    const digits = val.replace(/\D/g, '');
    if (digits.startsWith('55')) return digits;
    return `55${digits}`;
  };

  const getWhatsAppUrl = (messageText: string) => {
    return `https://wa.me/${whatsAppRaw}?text=${encodeURIComponent(messageText)}`;
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    setWhatsAppDisplay(tempPhone);
    setWhatsAppRaw(cleanPhone(tempPhone));
    setEmailDisplay(tempEmail);
    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      setConfigModalOpen(false);
    }, 1200);
  };

  const products = [
    {
      id: 'trifasicos',
      name: 'TRANSFORMADORES TRIFÁSICOS',
      description: 'Transformadores para aplicações industriais e comerciais.',
      image: productTrifasicoImg,
      msg: 'Olá! Gostaria de solicitar um orçamento para Transformadores Trifásicos.',
    },
    {
      id: 'comando',
      name: 'TRANSFORMADORES DE COMANDO',
      description: 'Soluções para circuitos de comando e controle.',
      image: productComandoImg,
      msg: 'Olá! Gostaria de solicitar um orçamento para Transformadores de Comando.',
    },
    {
      id: 'domesticos',
      name: 'TRANSFORMADORES DOMÉSTICOS',
      description: 'Transformadores para equipamentos e aplicações residenciais.',
      image: productDomesticoImg,
      msg: 'Olá! Gostaria de solicitar um orçamento para Transformadores Domésticos.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col selection:bg-[#E10600] selection:text-white">
      {/* 1. MENU / CABEÇALHO (VERMELHO COM LETRAS BRANCAS) */}
      <header className="sticky top-0 z-40 bg-[#E10600] text-white shadow-md border-b border-[#b80500]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Nome */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-white text-[#E10600] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight uppercase leading-tight text-white">
                Casa dos Transformadores
              </span>
              <span className="text-xs font-bold tracking-wider text-white/90 uppercase">
                Curitiba
              </span>
            </div>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/90">
            <a
              href="#inicio"
              className="hover:text-white transition-colors py-1 hover:underline underline-offset-4 decoration-2"
            >
              Início
            </a>
            <a
              href="#produtos"
              className="hover:text-white transition-colors py-1 hover:underline underline-offset-4 decoration-2"
            >
              Produtos
            </a>
            <a
              href="#sobre"
              className="hover:text-white transition-colors py-1 hover:underline underline-offset-4 decoration-2"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="hover:text-white transition-colors py-1 hover:underline underline-offset-4 decoration-2"
            >
              Contato
            </a>
          </nav>

          {/* Botão Orçamento Topo */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppUrl('Olá! Gostaria de solicitar um orçamento de transformador.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-[#E10600] text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
              <span>ORÇAMENTO PELO WHATSAPP</span>
            </a>
          </div>

          {/* Botão Menu Hambúrguer (Mobile) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-[#E10600] px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-1 text-base font-semibold text-white">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Início
              </a>
              <a
                href="#produtos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Produtos
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Sobre
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Contato
              </a>
            </nav>
            <div className="pt-3 border-t border-white/20">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de solicitar um orçamento de transformador.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-[#E10600] font-extrabold py-3 px-4 rounded-lg shadow-sm text-sm"
              >
                <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
                <span>ORÇAMENTO PELO WHATSAPP</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. BANNER PRINCIPAL (HERO) */}
      <section id="inicio" className="relative py-12 md:py-20 lg:py-24 bg-neutral-50 overflow-hidden border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Texto Hero */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#E10600] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#E10600]"></span>
                <span>Casa dos Transformadores Curitiba</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.15] text-balance">
                TRANSFORMADORES ELÉTRICOS PARA SUA NECESSIDADE
              </h1>
              <p className="mt-5 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl text-pretty">
                Transformadores trifásicos, de comando e domésticos para diferentes aplicações.
              </p>

              {/* Botões do Hero */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#produtos"
                  className="inline-flex items-center justify-center gap-2 bg-[#E10600] hover:bg-[#b80500] text-white font-bold px-7 py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95 text-center text-sm sm:text-base whitespace-nowrap"
                >
                  <span>SOLICITAR ORÇAMENTO</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={getWhatsAppUrl('Olá! Gostaria de solicitar um orçamento de transformador.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-bold px-7 py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95 text-center text-sm sm:text-base whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 text-[#E10600]" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Imagem do Hero */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-lg lg:max-w-none rounded-2xl overflow-hidden shadow-lg bg-white border border-neutral-200 aspect-[4/3] group">
                <img
                  src={heroTransformerImg}
                  alt="Transformador elétrico industrial de alta potência"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  width="1200"
                  height="896"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUTOS */}
      <section id="produtos" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E10600] block mb-2">
              Linha Completa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight uppercase">
              NOSSOS PRODUTOS
            </h2>
            <div className="w-12 h-1 bg-[#E10600] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Grid com exatamente os 3 cards solicitados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Imagem do Produto (100% visível, sem cortes) */}
                <div 
                  onClick={() => setSelectedImageForPreview({ url: prod.image, name: prod.name })}
                  className="relative h-64 sm:h-72 bg-neutral-50 overflow-hidden border-b border-neutral-200 flex items-center justify-center p-3 cursor-pointer group/img"
                  title="Clique para ver a imagem inteira ampliada"
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain object-center group-hover/img:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2.5 right-2.5 bg-neutral-900/80 hover:bg-neutral-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Ver completa</span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-extrabold text-lg text-neutral-950 uppercase tracking-tight mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed flex-1">
                    {prod.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <a
                      href={getWhatsAppUrl(prod.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#E10600] hover:bg-[#b80500] text-white font-bold text-xs uppercase px-4 py-3 rounded-lg shadow-sm hover:shadow transition-colors duration-200"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>SOLICITAR ORÇAMENTO</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOBRE A EMPRESA */}
      <section id="sobre" className="py-16 md:py-24 bg-neutral-50 border-t border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Texto Sobre */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E10600] mb-2 block">
                Sobre Nós
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight uppercase leading-tight mb-6">
                CASA DOS TRANSFORMADORES CURITIBA
              </h2>
              <div className="prose prose-neutral">
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  Trabalhamos com soluções em transformadores elétricos para diferentes necessidades, oferecendo atendimento rápido e orientação para encontrar o produto adequado para cada aplicação.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap gap-4 text-xs font-semibold text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#E10600]" />
                  <span>Atendimento rápido e consultivo</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#E10600]" />
                  <span>Suporte direto via WhatsApp</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#E10600]" />
                  <span>Curitiba e Região Metropolitana</span>
                </div>
              </div>
            </div>

            {/* Imagem Sobre */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-md bg-white border border-neutral-200 aspect-[4/3]">
                <img
                  src={aboutEletricoImg}
                  alt="Instalações e setor de transformadores elétricos"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTATO / ORÇAMENTO (Fundo Vermelho #E10600) */}
      <section id="contato" className="py-16 md:py-24 bg-[#E10600] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
            PRECISA DE UM TRANSFORMADOR?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/90 font-medium max-w-xl mx-auto">
            Entre em contato conosco e solicite seu orçamento.
          </p>

          {/* Botão grande branco */}
          <div className="mt-10">
            <a
              href={getWhatsAppUrl('Olá! Gostaria de solicitar um orçamento de transformador.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-[#E10600] text-base sm:text-lg font-extrabold px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 uppercase tracking-wide"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>FALAR PELO WHATSAPP</span>
            </a>
          </div>

          {/* Informações de contato */}
          <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-lg mx-auto">
            <a
              href={getWhatsAppUrl('Olá! Gostaria de solicitar um orçamento de transformador.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 bg-black/10 hover:bg-black/20 p-4 rounded-lg transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white text-[#E10600] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-xs uppercase tracking-wider text-white/80 font-medium">
                  WhatsApp
                </span>
                <span className="block text-base font-bold text-white group-hover:underline truncate">
                  {whatsAppDisplay}
                </span>
              </div>
            </a>

            <a
              href={`mailto:${emailDisplay}`}
              className="flex items-center gap-3.5 bg-black/10 hover:bg-black/20 p-4 rounded-lg transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white text-[#E10600] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-xs uppercase tracking-wider text-white/80 font-medium">
                  E-mail
                </span>
                <span className="block text-base font-bold text-white group-hover:underline truncate">
                  {emailDisplay}
                </span>
              </div>
            </a>
          </div>

          {/* Localização e aviso */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/80">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Curitiba e Região Metropolitana - PR</span>
          </div>

          {/* Botão sutil para customizar contatos em tempo real */}
          <div className="mt-6">
            <button
              onClick={() => {
                setTempPhone(whatsAppDisplay);
                setTempEmail(emailDisplay);
                setConfigModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white underline underline-offset-4 transition-colors"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span>Configurar número de WhatsApp / E-mail</span>
            </button>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-neutral-900 text-neutral-400 py-10 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="block font-extrabold text-white text-base tracking-tight uppercase">
                CASA DOS TRANSFORMADORES CURITIBA
              </span>
              <p className="text-sm mt-1 text-neutral-400">
                Transformadores elétricos para diferentes aplicações.
              </p>
            </div>

            <nav className="flex items-center gap-6 text-xs font-semibold text-neutral-300">
              <a href="#inicio" className="hover:text-white transition-colors">
                Início
              </a>
              <a href="#produtos" className="hover:text-white transition-colors">
                Produtos
              </a>
              <a href="#sobre" className="hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#contato" className="hover:text-white transition-colors">
                Contato
              </a>
            </nav>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-neutral-400">
              <a
                href="/casa-dos-transformadores-curitiba.zip"
                download="casa-dos-transformadores-curitiba.zip"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-md text-xs font-semibold border border-neutral-700 transition-colors shadow-xs"
                title="Baixar arquivo ZIP com todo o código e imagens"
              >
                <Download className="w-3.5 h-3.5 text-[#E10600]" />
                <span>Baixar Projeto (ZIP)</span>
              </a>
              <span>© 2026 Casa dos Transformadores Curitiba.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE (Fixo canto inferior direito em todas as páginas) */}
      <aside aria-label="Atendimento WhatsApp" className="fixed bottom-6 right-6 z-50">
        <a
          href={getWhatsAppUrl('Olá! Gostaria de solicitar um orçamento de transformador.')}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          title="Fale conosco pelo WhatsApp"
          aria-label="Abrir conversa no WhatsApp"
        >
          {/* Pulso sutil */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping"></span>
          
          <MessageCircle className="w-8 h-8 relative z-10 fill-current" />

          {/* Tooltip no desktop */}
          <span className="hidden lg:block absolute right-full mr-3.5 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Orçamento pelo WhatsApp
          </span>
        </a>
      </aside>

      {/* MODAL DE VISUALIZAÇÃO COMPLETA DA IMAGEM (SEM CORTES) */}
      {selectedImageForPreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedImageForPreview(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200 bg-neutral-50">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#E10600]" />
                <h4 className="font-bold text-sm sm:text-base text-neutral-900 uppercase tracking-tight">
                  {selectedImageForPreview.name}
                </h4>
              </div>
              <button
                onClick={() => setSelectedImageForPreview(null)}
                className="text-neutral-500 hover:text-neutral-900 p-1.5 rounded-lg hover:bg-neutral-200 transition-colors"
                aria-label="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 flex items-center justify-center bg-neutral-100 overflow-auto max-h-[75vh]">
              <img
                src={selectedImageForPreview.url}
                alt={selectedImageForPreview.name}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
              />
            </div>
            <div className="p-3 bg-neutral-50 border-t border-neutral-200 text-center">
              <span className="text-xs text-neutral-500 font-medium">
                Imagem completa em alta resolução sem cortes
              </span>
            </div>
          </div>
        </div>
      )}

      {/* MODAL PARA CONFIGURAR NÚMEROS DE CONTATO EM TEMPO REAL */}
      {configModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-[#E10600]" />
                <h3 className="font-bold text-neutral-900 text-base">
                  Configurar Dados de Contato
                </h3>
              </div>
              <button
                onClick={() => setConfigModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-700 p-1 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveConfig} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                  Número do WhatsApp
                </label>
                <input
                  type="text"
                  value={tempPhone}
                  onChange={(e) => setTempPhone(e.target.value)}
                  placeholder="(41) 99999-9999"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#E10600]"
                  required
                />
                <p className="text-[11px] text-neutral-500 mt-1">
                  Ex: (41) 98765-4321. Todos os botões do site usarão esse número.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                  E-mail de Contato
                </label>
                <input
                  type="email"
                  value={tempEmail}
                  onChange={(e) => setTempEmail(e.target.value)}
                  placeholder="contato@casadostransformadores.com.br"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#E10600]"
                  required
                />
              </div>

              {savedAlert && (
                <div className="flex items-center gap-2 p-2.5 bg-emerald-50 text-emerald-800 text-xs rounded-lg font-medium">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Dados de contato atualizados com sucesso!</span>
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setConfigModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold bg-[#E10600] hover:bg-[#b80500] text-white rounded-lg shadow-sm"
                >
                  Salvar Contatos
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
