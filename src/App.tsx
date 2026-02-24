import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Star, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Menu,
  X,
  Award,
  Heart,
  Zap,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_LINK = "https://wa.me/5517981740118?text=Ol%C3%A1%2C%20quero%20agendar%20minha%20aula%20experimental%20no%20est%C3%BAdio%20de%20pilates%20da%20Gabriela%20Garcia%20Bezerra!";
const PHONE_NUMBER = "(17) 98174-0118";
const ADDRESS = "Rua José Marcelo, 762 - Caparroz, São José do Rio Preto - SP";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAF8] font-sans text-slate-900">
      {/* HEADER */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-white py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <img src="/logo2.png" alt="Logo" className="h-10 md:h-14 w-auto" />
          <a href={WHATSAPP_LINK} target="_blank" className="bg-[#25D366] text-white px-5 py-2 rounded-full font-bold">Agendar</a>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
            Pilates <br /> <span className="text-[#2D8A4E]">Gabriela Garcia</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10">Recupere sua qualidade de vida no melhor Estúdio de Pilates em Rio Preto.</p>
          <a href={WHATSAPP_LINK} target="_blank" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl text-xl font-bold inline-flex items-center gap-3">
            <MessageCircle /> Agende sua aula!
          </a>
        </motion.div>
        <div className="relative rounded-[60px] overflow-hidden border-[12px] border-white shadow-2xl">
          <img src="/hero.png" alt="Hero" className="w-full h-auto" />
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/profissional.png" alt="Profissional" className="w-full h-auto" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Conheça a <span className="text-emerald-600">fisioterapeuta Gabriela</span></h2>
            <p className="text-lg text-slate-600 mb-8">Atendimento humanizado e focado no bem-estar integral.</p>
            <div className="space-y-3">
              <p>• Graduada em Fisioterapia (UNIP)</p>
              <p>• Formação em Pilates (FISIONET)</p>
              <p>• Especialista em reabilitação</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-900 text-white text-center">
        <p className="font-bold mb-2">Pilates Gabriela Garcia Bezerra</p>
        <p className="text-slate-400">São José do Rio Preto - SP | (17) 98174-0118</p>
      </footer>
    </div>
  );
}
