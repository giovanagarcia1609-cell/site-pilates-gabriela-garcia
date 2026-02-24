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
    <div className="min-h-screen bg-[#F9FAF8] font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* HEADER FIXO */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo2.png" alt="Logo" className="h-10 md:h-14 w-auto" />
            <div className="hidden md:block">
              <p className="font-bold text-slate-800 text-sm leading-tight">Agende sua aula experimental</p>
              <p className="text-xs text-slate-500">Pilates em Rio Preto</p>
            </div>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
            <MessageCircle className="w-4 h-4" />
            <span>Agendar</span>
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-white" />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-100/20 rounded-l-[200px] -z-10 transform translate-x-40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-100/80 rounded-full border border-emerald-200">
                <MapPin className="w-3.5 h-3.5" /> Estúdio de Pilates em Rio Preto
              <div className="flex flex-col">
              <p className="font-bold text-slate-800 text-[10px] sm:text-sm leading-tight">Agende sua aula experimental</p>
              <p className="text-[9px] sm:text-xs text-slate-500">Pilates em Rio Preto</p>
            </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
                Pilates <br /> <span className="text-[#2D8A4E]">Gabriela Garcia</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Recupere sua qualidade de vida, alivie dores e fortaleça seu corpo no melhor <span className="font-bold text-slate-800">Estúdio de Pilates em São José do Rio Preto</span>.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl group">
                <MessageCircle className="w-7 h-7" /> Agende sua aula experimental!
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
              <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-100">
                <img src="/hero.png" alt="Hero" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-[240px] hidden md:block">
                {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-white" />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-100/20 rounded-l-[200px] -z-10 transform translate-x-40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-100/80 rounded-full border border-emerald-200">
                <MapPin className="w-3.5 h-3.5" />
                Estúdio de Pilates em Rio Preto
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
                Pilates <br />
                <span className="text-[#2D8A4E]">Gabriela Garcia</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Recupere sua qualidade de vida, alivie dores e fortaleça seu corpo no melhor <span className="font-bold text-slate-800">Estúdio de Pilates em São José do Rio Preto</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-green-200 group"
                >
                  <MessageCircle className="w-7 h-7" />
                  Agende sua aula experimental!
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-100">
                <img 
                  src="/hero.png" 
                  alt="Estúdio de Pilates Gabriela Garcia" 
                  className="w-full h-auto object-cover brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-white p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-[180px] md:max-w-[240px] z-20">
                <div className="flex items-center gap-0.5 md:gap-1 mb-2 md:mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-xs md:text-base font-bold text-slate-800 italic leading-tight">"Mudança de vida, assim que classifico."</p>
                <p className="text-[10px] md:text-sm text-slate-500 mt-1 md:mt-2 font-medium">- Marta Solange Silva</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
                <p className="font-bold text-emerald-300">- {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEOS E ESPAÇO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Conheça nosso espaço</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((v) => (
              <div key={v} className="rounded-3xl overflow-hidden shadow-xl aspect-[9/16] bg-slate-200">
                <video src={`/video${v}.mp4`} className="w-full h-full object-cover" autoPlay muted loop playsInline />
              </div>
            ))}
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] border-8 border-white">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.837854654924!2d-49.3667144247501!3d-20.797539980791485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad788888888b%3A0x8888888888888888!2sRua%20Jos%C3%A9%20Marcelo%2C%20762%20-%20Caparroz%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-900 text-slate-400 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-white font-bold text-xl mb-2">Pilates Gabriela Garcia Bezerra</p>
          <p className="mb-6">{ADDRESS}</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://www.instagram.com/fisiogabrielagarcia/" target="_blank" className="flex items-center gap-2 hover:text-pink-500 transition-colors">
              <Instagram /> <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/fisiogabrielagarcia" target="_blank" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Facebook /> <span>Facebook</span>
            </a>
          </div>
          <p className="text-sm">© 2026 Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
