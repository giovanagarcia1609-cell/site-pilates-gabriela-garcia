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
  Award,
  Heart,
  Zap,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/5517981740818?text=Ol%C3%A1%2C%20quero%20agendar%20minha%20aula%20experimental%20no%20est%C3%BAdio%20de%20pilates%20da%20Gabriela%20Garcia%20Bezerra!";
const PHONE_NUMBER = "(17) 98174-0818";

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
      
      {/* BANNER FIXO (Topo) */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo2.png" 
              alt="Logo Pilates" 
              className="h-10 md:h-14 w-auto"
              onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/seed/pilates-logo/200/200"; }}
            />
            <div className="flex flex-col">
              <p className="font-bold text-slate-800 text-[10px] sm:text-sm leading-tight">Agende sua aula experimental</p>
              <p className="text-[9px] sm:text-xs text-slate-500">Pilates em Rio Preto</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-green-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Agendar via WhatsApp</span>
              <span className="sm:hidden">Agendar</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-white" />
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
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 transition-all shadow-2xl shadow-green-200 group"
                >
                  <MessageCircle className="w-7 h-7" />
                  Agende sua aula experimental!
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
              
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-600">
                {[
                  "Alívio de dores",
                  "Postura Ideal",
                  "Bem-estar Total",
                  "Anos de Experiência"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-1.5 bg-emerald-100 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-sm font-bold">{item}</span>
                  </div>
                ))}
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
                  alt="Estúdio de Pilates" 
                  className="w-full h-auto object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/seed/pilates-hero/1200/800"; }}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-white p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-[180px] md:max-w-[240px] z-20">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-xs md:text-base font-bold text-slate-800 italic leading-tight">"Mudança de vida, assim que classifico."</p>
                <p className="text-[10px] md:text-sm text-slate-500 mt-1 font-medium">- Marta Solange Silva</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOBRE A PROFISSIONAL */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/profissional.png" 
                  alt="Gabriela Garcia" 
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/seed/physiotherapist/600/800"; }}
                />
              </div>
            </div>
            
            <div>
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
              
              <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                <p className="text-emerald-800 font-semibold italic">
                  "Meu objetivo é transformar vidas através do movimento consciente, oferecendo um acompanhamento que respeita os limites e potencializa os resultados de cada corpo."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por que escolher nosso Pilates?</h2>
            <p className="text-slate-600">Oferecemos soluções personalizadas para diferentes necessidades.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Alívio de Dores", icon: <Zap className="w-6 h-6 text-emerald-600" /> },
              { title: "Correção Postural", icon: <Award className="w-6 h-6 text-emerald-600" /> },
              { title: "Fortalecimento Muscular", icon: <Users className="w-6 h-6 text-emerald-600" /> },
              { title: "Pilates para Gestantes", icon: <Heart className="w-6 h-6 text-emerald-600" /> },
              { title: "Reabilitação Física", icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" /> },
              { title: "Flexibilidade e Mobilidade", icon: <ChevronRight className="w-6 h-6 text-emerald-600" /> }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">Resultados reais e duradouros focados na sua saúde.</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <motion.a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl text-xl font-bold items-center gap-3 shadow-xl shadow-green-200"
            >
              <MessageCircle className="w-6 h-6" />
              Agende sua aula experimental via WhatsApp!
            </motion.a>
          </div>
        </div>
      </section>

      {/* CONHEÇA NOSSO ESPAÇO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Conheça nosso espaço</h2>
            <p className="text-slate-600 mt-4">Ambiente climatizado e equipamentos modernos.</p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"><MapPin className="text-emerald-600" /> Nosso Endereço</h3>
                  <p className="text-slate-600 text-lg">R. José Marcelo, 762 - Caparroz<br />São José do Rio Preto - SP<br />CEP: 15050-470</p>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"><Zap className="text-emerald-600" /> Horário</h3>
                  <ul className="space-y-3 text-slate-600 text-lg">
                    <li className="flex justify-between"><span className="font-medium">Segunda a Quinta:</span><span>07:00 às 19:00</span></li>
                    <li className="flex justify-between"><span className="font-medium">Sexta-feira:</span><span>07:00 às 12:00</span></li>
                  </ul>
                </div>
                <div className="mt-8 bg-emerald-600 p-6 rounded-2xl text-white">
                  <p className="text-lg font-bold mb-2">Telefone</p>
                  <p className="text-2xl font-black">{PHONE_NUMBER}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.837854654924!2d-49.3667144247501!3d-20.797539980791485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad788888888b%3A0x8888888888888888!2sRua%20Jos%C3%A9%20Marcelo%2C%20762%20-%20Caparroz%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015050-470!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0"
              ></iframe>
              <a href="https://maps.google.com/?q=Rua+José+Marcelo,+762+-+Caparroz,+São+José+do+Rio+Preto+-+SP" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all">
                <div className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-all">Ver no Google Maps</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REDES SOCIAIS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Siga-nos!</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://www.instagram.com/fisiogabrielagarcia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:text-pink-600 font-bold border border-slate-100 transition-all"><Instagram /> @fisiogabrielagarcia</a>
            <a href="https://www.facebook.com/fisiogabrielagarcia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:text-blue-600 font-bold border border-slate-100 transition-all"><Facebook /> /fisiogabrielagarcia</a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Não deixe sua saúde para depois.</h2>
          <p className="text-xl text-emerald-100 mb-12">Agende sua aula experimental e comece hoje mesmo sua transformação.</p>
          <motion.a 
            href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex bg-[#25D366] hover:bg-[#128C7E] text-white px-12 py-6 rounded-[2rem] text-2xl font-bold items-center gap-4 shadow-2xl"
          >
            <MessageCircle className="w-8 h-8" /> Agendar minha aula agora!
          </motion.a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-12 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white font-bold text-lg">Pilates Gabriela Garcia Bezerra</p>
          <div className="flex gap-6">
            <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-emerald-500" /> Rio Preto - SP</div>
            <div className="flex items-center gap-2"><Phone className="w-5 h-5 text-emerald-500" /> {PHONE_NUMBER}</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
