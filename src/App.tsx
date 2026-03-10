import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, MapPin, Phone, CheckCircle2, 
  Star, Instagram, Facebook, ChevronRight,
  Award, Heart, Zap, Users
} from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/5517981740818?text=Ol%C3%A1%2C%20quero%20agendar%20minha%20aula%20experimental!";
const PHONE_NUMBER = "(17) 98174-0818";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAF8] font-sans text-slate-900">
      
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo2.png" alt="Logo" className="h-10 md:h-14 w-auto" onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/seed/pilates/200/200"; }} />
            <div>
              <p className="font-bold text-slate-800 text-xs sm:text-sm">Aula Experimental</p>
              <p className="text-[10px] sm:text-xs text-slate-500">Rio Preto</p>
            </div>
          </div>
          <motion.a 
            href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}
            className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2"
          >
            <MessageCircle size={16} /> <span className="hidden sm:inline">WhatsApp</span>
          </motion.a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">Pilates <span className="text-emerald-600">Gabriela Garcia</span></h1>
            <p className="text-xl text-slate-600 mb-8">Recupere sua qualidade de vida e fortaleça seu corpo em Rio Preto.</p>
            <motion.a 
              href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex bg-[#25D366] text-white px-8 py-4 rounded-2xl text-xl font-bold items-center gap-3 shadow-xl"
            >
              <MessageCircle size={24} /> Agendar Aula Experimental
            </motion.a>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {["Alívio de dores", "Postura Ideal", "Bem-estar", "Experiência"].map((t, i) => (
                <div key={i} className="flex items-center gap-2 font-bold text-slate-700"><CheckCircle2 size={18} className="text-emerald-600" /> {t}</div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
            <img src="/hero.png" alt="Pilates" className="rounded-[40px] shadow-2xl border-8 border-white" onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/seed/hero/800/600"; }} />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <img src="/profissional.png" alt="Gabriela" className="rounded-3xl shadow-xl" onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/seed/pro/600/800"; }} />
          <div>
            <h2 className="text-3xl font-bold mb-6">Dra. Gabriela Garcia</h2>
            <p className="text-lg text-slate-600 mb-6">Fisioterapeuta especializada em Pilates, focada em resultados reais e bem-estar.</p>
            <div className="bg-emerald-50 p-6 rounded-2xl italic text-emerald-800 font-medium">
              "Meu objetivo é transformar vidas através do movimento consciente."
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO E MAPA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nosso Espaço</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><MapPin className="text-emerald-600" /> Endereço</h3>
              <p className="text-slate-600 mb-6">R. José Marcelo, 762 - Caparroz, Rio Preto - SP</p>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Zap className="text-emerald-600" /> Horário</h3>
              <p className="text-slate-600">Segunda a Quinta: 07h às 19h<br />Sexta: 07h às 12h</p>
              <div className="mt-8 p-4 bg-emerald-600 text-white rounded-xl text-center">
                <p className="text-sm opacity-80">Telefone</p>
                <p className="text-xl font-bold">{PHONE_NUMBER}</p>
              </div>
            </div>
            <div className="h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.837854654924!2d-49.3667144247501!3d-20.797539980791485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad788888888b%3A0x8888888888888888!2sRua%20Jos%C3%A9%20Marcelo%2C%20762%20-%20Caparroz!5e0!3m2!1spt-BR!2sbr!4v1710000000000" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-slate-900 text-white text-center">
        <p className="font-bold mb-2">Pilates Gabriela Garcia Bezerra</p>
        <p className="text-slate-500 text-sm">© 2026 Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}
