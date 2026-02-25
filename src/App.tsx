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
      
      {/* HEADER FIXO (Ponto 8: Ajustado com "via WhatsApp") */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo2.png" alt="Logo" className="h-10 md:h-14 w-auto" />
            <div className="flex flex-col">
              <p className="font-bold text-slate-800 text-[10px] sm:text-sm leading-tight">Agende sua aula experimental</p>
              <p className="text-[9px] sm:text-xs text-slate-500">Pilates em Rio Preto</p>
            </div>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
            <MessageCircle className="w-4 h-4" />
            <span>Agendar via WhatsApp</span>
          </a>
        </div>
      </div>

      {/* HERO SECTION (Ponto 7: Verde claro no fundo e ícones de benefícios rápidos) */}
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
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
                Pilates <br /> <span className="text-[#2D8A4E]">Gabriela Garcia</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Recupere sua qualidade de vida, alivie dores e fortaleça seu corpo no melhor <span className="font-bold text-slate-800">Estúdio de Pilates em São José do Rio Preto</span>.
              </p>
              
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl group mb-12">
                <MessageCircle className="w-7 h-7" /> Agende sua aula experimental!
              </a>

              {/* Ponto 7: Ícones de benefícios rápidos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-emerald-100 rounded-lg"><CheckCircle2 className="w-5 h-5 text-emerald-600" /></div>
                  <span className="text-sm font-bold">Alívio de dores</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-emerald-100 rounded-lg"><CheckCircle2 className="w-5 h-5 text-emerald-600" /></div>
                  <span className="text-sm font-bold">Postura Ideal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-emerald-100 rounded-lg"><CheckCircle2 className="w-5 h-5 text-emerald-600" /></div>
                  <span className="text-sm font-bold">Bem-estar Total</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
              <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-100">
                <img src="/hero.png" alt="Hero" className="w-full h-auto object-cover" />
              </div>
              
              {/* Balão de Avaliação (Ajustado para Mobile) */}
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

      {/* SEÇÃO SOBRE A PROFISSIONAL (Ponto 9: Quadro verde com frase de efeito) */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <img src="/profissional.png" alt="fisioterapeuta Gabriela" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Conheça a <span className="text-emerald-600">fisioterapeuta Gabriela Garcia Bezerra</span></h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">Com uma abordagem humanizada e focada no bem-estar integral, a fisioterapeuta Gabriela combina anos de formação especializada com um atendimento próximo e individualizado.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
                {[
                  "Graduada em Fisioterapia (UNIP 2018)",
                  "Formação em Pilates (FISIONET 2019)",
                  "Anatomia Palpatória (EBRAFIM)",
                  "Crochetagem Miofascial",
                  "Liberação Miofascial e Ventosa",
                  "Drenagem Linfática Manual",
                  "Massagem na Fisioterapia",
                  "Disfunções Posturais (Escoliose)",
                  "Imersão em Pilates (A. Coldebella)",
                  "Pilates Fitness (Amanda Louise)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Ponto 9: Quadro verde com frase de efeito */}
              <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 italic text-emerald-800 font-semibold">
                "Meu objetivo é transformar vidas através do movimento consciente, oferecendo um acompanhamento que respeita os limites e potencializa os resultados de cada corpo."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS (Ponto 10 e 11: Subtítulo e CTA abaixo dos ícones) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por que escolher nosso Pilates?</h2>
            {/* Ponto 10: Subtítulo */}
            <p className="text-slate-600 max-w-2xl mx-auto">Oferecemos soluções personalizadas para diferentes necessidades, sempre com foco em resultados reais e duradouros.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Alívio de Dores", desc: "Tratamento eficaz para dores lombares, cervicais e articulares.", icon: <Zap className="w-6 h-6" /> },
              { title: "Correção Postural", desc: "Melhore sua postura no dia a dia e previna cansaço muscular.", icon: <Award className="w-6 h-6" /> },
              { title: "Fortalecimento", desc: "Desenvolva músculos fortes e definidos sem impacto agressivo.", icon: <Users className="w-6 h-6" /> },
              { title: "Pilates para Gestantes", desc: "Acompanhamento seguro para uma gestação saudável e feliz.", icon: <Heart className="w-6 h-6" /> },
              { title: "Reabilitação Física", desc: "Recuperação de lesões com protocolos fisioterapêuticos.", icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: "Flexibilidade", desc: "Aumente sua amplitude de movimento e sinta-se mais leve.", icon: <ChevronRight className="w-6 h-6" /> }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 bg-emerald-50 group-hover:bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Ponto 11: CTA abaixo dos ícones */}
          <div className="text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl text-xl font-bold items-center gap-3 transition-all transform hover:scale-105 shadow-xl">
              <MessageCircle className="w-6 h-6" /> Agende sua aula experimental via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS (Ponto 1 e 12: Texto completo, estrelas, ícones de perfil e subtítulo) */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos alunos</h2>
          {/* Ponto 12: Subtítulo */}
          <p className="text-emerald-300 font-bold mb-16 uppercase tracking-widest text-sm">Histórias de Transformação</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Excelente estúdio, com ótimas aulas. Minha postura corporal mudou completamente e me sinto muito bem.", author: "Evany Camargo" },
              { text: "Mudança de vida, assim que classifico. Eu vivia com dores lombar, Cervical e depois que comecei fazer minhas dores acabaram. Profissionalismo dez, ambiente 10. Adoro as aulas.", author: "Marta Solange Silva" },
              { text: "Ótima profissional e super educada. Estou fazendo pilates para gestantes e está sendo ótimo, recomendo!", author: "Jennifer Camilla" }
            ].map((t, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-[2.5rem] border border-white/10 italic flex flex-col justify-between text-left">
                <div>
                  {/* Ponto 1: Estrelas */}
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="mb-8 text-lg leading-relaxed">"{t.text}"</p>
                </div>
                {/* Ponto 1: Ícone de perfil */}
                <div className="flex items-center gap-4 not-italic">
                  <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center font-bold text-xl">
                    {t.author[0]}
                  </div>
                  <p className="font-bold text-emerald-300">{t.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONHEÇA NOSSO ESPAÇO (Ponto 2: Subtítulo) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Conheça nosso espaço</h2>
          {/* Ponto 2: Subtítulo */}
          <p className="text-slate-600 mb-12">Ambiente climatizado, equipamentos modernos e higienizados para sua total segurança.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((v) => (
              <div key={v} className="rounded-3xl overflow-hidden shadow-xl aspect-[9/16] bg-slate-200">
                <video src={`/video${v}.mp4`} className="w-full h-full object-cover" autoPlay muted loop playsInline />
              </div>
            ))}
          </div>

          {/* MAPA (Ponto 3: Botão Abrir no Google Maps) */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] border-8 border-white relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.837854654924!2d-49.3667144247501!3d-20.797539980791485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad788888888b%3A0x8888888888888888!2sRua%20Jos%C3%A9%20Marcelo%2C%20762%20-%20Caparroz%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            {/* Ponto 3: Botão Abrir no Google Maps */}
            <a href="https://maps.google.com/?q=Rua+José+Marcelo,+762+-+Caparroz,+São+José+do+Rio+Preto+-+SP" target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-6 bg-white text-slate-900 px-6 py-3 rounded-2xl font-bold shadow-2xl flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <MapPin className="w-5 h-5 text-emerald-600" /> Abrir no Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Ponto 4: SIGA-NOS NAS REDES SOCIAIS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Siga-nos nas redes sociais!</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://www.instagram.com/fisiogabrielagarcia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-slate-700 hover:text-pink-600 font-bold border border-slate-100">
              <Instagram className="w-6 h-6" /> @fisiogabrielagarcia
            </a>
            <a href="https://www.facebook.com/fisiogabrielagarcia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-slate-700 hover:text-blue-600 font-bold border border-slate-100">
              <Facebook className="w-6 h-6" /> /fisiogabrielagarcia
            </a>
          </div>
        </div>
      </section>

      {/* Ponto 5: CTA FINAL (Não deixe a saúde para depois) */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Não deixe sua saúde para depois.</h2>
          <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
            Agende sua aula experimental e comece hoje mesmo sua transformação. Sinta a diferença de um corpo equilibrado e sem dores.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#25D366] hover:bg-[#128C7E] text-white px-12 py-6 rounded-[2rem] text-2xl font-bold items-center gap-4 transition-all transform hover:scale-105 shadow-2xl">
            <MessageCircle className="w-8 h-8" /> Agendar minha aula agora!
          </a>
          <p className="mt-8 text-emerald-200 font-medium flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Vagas limitadas para novos alunos
          </p>
        </div>
      </section>

      {/* RODAPÉ (Ponto 6: Ajustado para o design completo) */}
      <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <p className="text-white font-bold text-lg mb-2">Pilates Gabriela Garcia Bezerra</p>
              <p>© 2026 Todos os direitos reservados.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-500" /> <span>São José do Rio Preto - SP</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500" /> <span>(17) 98174-0118</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
