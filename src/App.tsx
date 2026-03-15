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
import { motion, AnimatePresence } from 'motion/react';

// CONFIGURAÇÕES GLOBAIS
const WHATSAPP_LINK = "https://wa.me/5517981740118?text=Ol%C3%A1.%20Quero%20agendar%20minha%20aula%20experimental%20no%20pilates%20Gabriela%20Garcia";
const PHONE_NUMBER = "(17) 98174-0118";
const ADDRESS = "Rua José Marcelo, 762 - Caparroz, São José do Rio Preto - SP";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F9FAF8] font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* CABEÇALHO FIXO */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMenuOpen || scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo2.png" 
              alt="Logo Pilates Gabriela Garcia" 
              className="h-10 md:h-14 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/pilates-logo/200/200";
              }}
            />
            <span className="font-bold text-slate-800 text-sm sm:text-lg">Pilates Gabriela Garcia</span>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-800 focus:outline-none"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[60] bg-white flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <img src="/logo2.png" alt="Logo" className="h-10 w-auto" />
                  <span className="font-bold text-slate-800">Pilates Gabriela Garcia</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-800">
                  <X size={32} />
                </button>
              </div>
              <nav className="flex flex-col gap-8 text-2xl font-bold text-slate-800">
                <button onClick={() => scrollToSection('inicio')} className="text-left hover:text-emerald-600 transition-colors">Início</button>
                <button onClick={() => scrollToSection('sobre')} className="text-left hover:text-emerald-600 transition-colors">Sobre</button>
                <button onClick={() => scrollToSection('servicos')} className="text-left hover:text-emerald-600 transition-colors">Serviços</button>
                <button onClick={() => scrollToSection('depoimentos')} className="text-left hover:text-emerald-600 transition-colors">Depoimentos</button>
                <button onClick={() => scrollToSection('localizacao')} className="text-left hover:text-emerald-600 transition-colors">Localização</button>
                <button onClick={() => scrollToSection('redes')} className="text-left hover:text-emerald-600 transition-colors">Redes Sociais</button>
              </nav>
              <div className="mt-auto pt-8 border-t border-slate-100">
                <p className="text-slate-500 text-sm mb-4">Entre em contato:</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-emerald-600 font-bold text-xl">
                  <MessageCircle />
                  {PHONE_NUMBER}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden">
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
                <motion.a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-green-200 group"
                >
                  <MessageCircle className="w-7 h-7" />
                  Agende sua aula experimental!
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.a>
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
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/pilates-hero/1200/800";
                  }}
                />
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

      {/* SOBRE A PROFISSIONAL */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/profissional.png" 
                  alt="fisioterapeuta Gabriela Garcia" 
                  className="w-full h-full object-cover brightness-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/physiotherapist/600/800";
                  }}
                />
              </div>
            </motion.div>
            
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Conheça a <span className="text-emerald-600">fisioterapeuta Gabriela Garcia Bezerra</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Com uma abordagem humanizada e focada no bem-estar integral, a fisioterapeuta Gabriela combina anos de formação especializada com um atendimento próximo e individualizado.
              </p>
              
              <div className="space-y-3 mb-10">
                {[
                  "Graduada em Fisioterapia pela Universidade Paulista - UNIP (2018)",
                  "Formação em Pilates - FISIONET (2019)",
                  "Curso de Anatomia Palpatória - EBRAFIM (2019)",
                  "Curso de Crochetagem Miofascial - EBRAFIM (2019)",
                  "Curso de Liberação Miofascial e Ventosaterapia (2019)",
                  "Curso de Drenagem Linfática Manual (2019)",
                  "Curso de Massagem na Fisioterapia (2019)",
                  "Disfunções Posturais com ênfase na Escoliose (2020)",
                  "Imersão em Pilates com Adriana Coldebella (2021)",
                  "Pilates Fitness método Amanda Louise (2022)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS / SERVIÇOS */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por que escolher nosso Pilates?</h2>
            <p className="text-slate-600">Oferecemos soluções personalizadas para diferentes necessidades.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Alívio de Dores", icon: <Zap className="w-6 h-6 text-emerald-600" /> },
              { title: "Correção Postural", icon: <Award className="w-6 h-6 text-emerald-600" /> },
              { title: "Fortalecimento", icon: <Users className="w-6 h-6 text-emerald-600" /> },
              { title: "Gestantes", icon: <Heart className="w-6 h-6 text-emerald-600" /> },
              { title: "Reabilitação", icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" /> },
              { title: "Flexibilidade", icon: <ChevronRight className="w-6 h-6 text-emerald-600" /> }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">Acompanhamento profissional focado na sua saúde e limites.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 bg-emerald-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Histórias de Transformação</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Excelente estúdio, com ótimas aulas. Minha postura corporal mudou completamente.", author: "Evany Camargo" },
              { text: "Mudança de vida! Eu vivia com dores lombar e depois que comecei as dores acabaram.", author: "Marta Solange Silva" },
              { text: "Ótima profissional. Estou fazendo pilates para gestantes e está sendo ótimo!", author: "Jennifer Camilla" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-lg leading-relaxed italic mb-8">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-emerald-200">{testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <MapPin className="text-emerald-600" /> Nosso Endereço
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{ADDRESS}</p>
                </div>
                <div className="mt-8 bg-emerald-600 p-6 rounded-2xl text-white shadow-lg">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5" /> Telefone
                  </h3>
                  <p className="text-2xl font-black">{PHONE_NUMBER}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.837854654924!2d-49.3667144247501!3d-20.797539980791485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad788888888b%3A0x8888888888888888!2sRua%20Jos%C3%A9%20Marcelo%2C%20762%20-%20Caparroz!5e0!3m2!1spt-BR!2sbr!4v1710000000000" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* REDES SOCIAIS */}
      <section id="redes" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Siga-nos nas redes sociais!</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://www.instagram.com/fisiogabrielagarcia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:text-pink-600 font-bold border border-slate-100 transition-all"><Instagram className="w-6 h-6" /> @fisiogabrielagarcia</a>
            <a href="https://www.facebook.com/fisiogabrielagarcia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:text-blue-600 font-bold border border-slate-100 transition-all"><Facebook className="w-6 h-6" /> /fisiogabrielagarcia</a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Não deixe sua saúde para depois.</h2>
          <motion.a 
            href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex bg-[#25D366] hover:bg-[#128C7E] text-white px-12 py-6 rounded-[2rem] text-2xl font-bold items-center gap-4 transition-all transform hover:scale-105 shadow-2xl"
          >
            <MessageCircle className="w-8 h-8" />
            Agendar minha aula agora!
          </motion.a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg mb-2">Pilates Gabriela Garcia Bezerra</p>
            <p>© 2026 Todos os direitos reservados.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-emerald-500" /> <span>Rio Preto - SP</span></div>
            <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-emerald-500" /> <span>{PHONE_NUMBER}</span></div>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <motion.a 
        href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-all transform hover:scale-110"
      >
        <MessageCircle size={32} />
      </motion.a>

    </div>
  );
}
