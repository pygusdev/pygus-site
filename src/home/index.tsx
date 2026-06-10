import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  AudioLines,
  Brain,
  Check,
  Heart,
  Menu,
  Mic,
  Plus,
  Star,
  Target,
  Users,
  X,
} from 'lucide-react'
import LogoImg from '../assets/logoImg.svg'
import appleStoreSvg from '../assets/apple-logo.svg'
import googlePlaySvg from '../assets/playstore.svg'
import pinguimFalando from '../assets/pinguim-falando.png'
import pinguimComemorando from '../assets/pinguim-comemorando.png'
import pinguimAcenando from '../assets/pinguim-acenando.png'
import telaNivel2 from '../assets/tela-nivel2.png'
import depoimento1 from '../assets/depoimento1.jpeg'
import depoimento2 from '../assets/depoimento2.jpeg'
import whatsappIcon from '../assets/whatsappIcon.svg'

const APP_STORE_URL =
  'https://apps.apple.com/br/app/pygus-profissional/id6514278911'
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.pygus.profissional'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
]

const marqueeWords = [
  '/R/',
  'PRATO',
  'NH',
  'GELO',
  'TR',
  'BLUSA',
  '/S/',
  'CHAVE',
  'LH',
  'SAPO',
  'PR',
  'TREM',
]

const steps = [
  {
    number: '1',
    title: 'O fono configura',
    text: 'Cadastra o paciente, libera só os fonemas certos e monta a trilha de treino em poucos minutos.',
  },
  {
    number: '2',
    title: 'A criança brinca',
    text: 'Em casa, ela joga com o pinguim: repete palavras, grava a própria voz e avança de nível.',
  },
  {
    number: '3',
    title: 'A evolução aparece',
    text: 'Cada tentativa volta para o painel do profissional com áudio, histórico e sinais claros de progresso.',
  },
]

const features = [
  {
    icon: Users,
    color: 'teal',
    title: 'Gestão de pacientes',
    text: 'Todos os pacientes em um só lugar: dados, fonemas liberados e evolução de cada criança.',
  },
  {
    icon: Brain,
    color: 'orange',
    title: 'RFA (Nomeação)',
    text: 'Avaliação de fala completa: acertos, omissões e substituições em uma lista de 34 palavras.',
  },
  {
    icon: Target,
    color: 'yellow',
    title: 'Liberação por fonema',
    text: 'A criança treina exatamente o que precisa, sem excesso de estímulos fora do plano terapêutico.',
  },
  {
    icon: AudioLines,
    color: 'blue',
    title: 'Áudios e progresso',
    text: 'Ouça as gravações, compare tentativas e acompanhe o comportamento fonético ao longo do tempo.',
  },
]

const levels = [
  {
    name: 'Nível 1',
    title: 'Olhar e reconhecer',
    text: 'Atividades visuais sem fala, para criar vínculo com o jogo.',
  },
  {
    name: 'Nível 2',
    title: 'Falar e gravar',
    text: 'Treino de palavras com gravação de voz e reforço positivo.',
  },
  {
    name: 'Nível 3',
    title: 'Frases completas',
    text: 'Repetição de frases com acompanhamento de progresso.',
  },
]

const plans = [
  {
    title: 'Gratuito',
    note: 'para experimentar',
    monthly: { price: '0', cents: ',00' },
    annual: { price: '0', cents: ',00' },
    features: [
      'Até 2 pacientes',
      '1 RFA por paciente',
      'RFA Maker: 1 template para 1 paciente',
      'Fonemas liberados',
      'Paciente teste incluído',
    ],
  },
  {
    title: 'Básico',
    note: 'para começar',
    monthly: { price: '39', cents: ',99' },
    annual: { price: '399', cents: ',90', discount: '17%' },
    features: [
      'Até 5 pacientes',
      '3 RFAs por paciente',
      'RFA Maker: 1 template para todos os pacientes',
      'Jogo da memória ilimitado',
      'Fonemas ilimitados',
    ],
  },
  {
    title: 'Pro',
    note: 'para a rotina cheia',
    featured: true,
    monthly: { price: '89', cents: ',99' },
    annual: { price: '899', cents: ',90', discount: '17%' },
    features: [
      'Até 15 pacientes',
      'RFA ilimitado',
      'RFA Maker: 2 templates',
      'Suporte prioritário',
      'Monitoramento completo',
    ],
  },
  {
    title: 'Premium',
    note: 'para agenda lotada',
    monthly: { price: '179', cents: ',90' },
    annual: { price: '1.799', cents: ',00', discount: '17%' },
    features: [
      'Até 30 pacientes',
      'RFA ilimitado',
      'RFA Maker: 4 templates',
      'Suporte prioritário',
      'Monitoramento completo',
    ],
  },
]

const faqs = [
  {
    question: 'O Pygus é para fonoaudiólogos ou para pacientes?',
    answer:
      'Para os dois. O profissional usa o Pygus Profissional para gestão e acompanhamento, enquanto a criança treina pelo app com atividades guiadas.',
  },
  {
    question: 'A RFA substitui a avaliação clínica?',
    answer:
      'Não. Ela apoia a rotina do profissional com sinais e organização dos dados, mas a interpretação clínica continua sendo do fonoaudiólogo.',
  },
  {
    question: 'Dá para controlar quais fonemas a criança treina?',
    answer:
      'Sim. O profissional libera fonemas por paciente, o que deixa o treino alinhado ao plano terapêutico.',
  },
  {
    question: 'Onde baixo o aplicativo?',
    answer:
      'O app está disponível na App Store e no Google Play. Os botões de download do site levam direto para a loja do seu celular.',
  },
]

const testimonials = [
  {
    quote:
      'Equipe Pygus, só gratidão! O aplicativo está sendo de grande ajuda na evolução do tratamento. Minha filha ama brincar e se desenvolver.',
    name: 'Mayara dos Santos',
    role: 'mãe da Marília, 7 anos',
    image: depoimento1,
  },
  {
    quote:
      'Minha filha ama aprender com o Pygus! Tem ajudado bastante no tratamento dela.',
    name: 'Flavia Pereira',
    role: 'mãe da Flávia, 5 anos',
    image: depoimento2,
  },
]

function openBestStore() {
  const userAgent = navigator.userAgent || navigator.vendor

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    window.open(APP_STORE_URL, '_blank')
    return
  }

  window.open(PLAY_STORE_URL, '_blank')
}

const Squiggle = () => (
  <svg
    className="squiggle"
    viewBox="0 0 220 14"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M4 9 Q 22 3, 42 8 T 86 8 T 130 8 T 174 8 T 216 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
)

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  const whatsappMessage = useMemo(
    () => encodeURIComponent('Olá! Vim do site e gostaria de mais informações'),
    [],
  )

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="site-shell" id="inicio">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-link" href="#inicio" aria-label="Pygus">
            <img src={LogoImg} alt="Pygus" />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <button className="btn btn-primary desktop-only" onClick={openBestStore}>
            Baixar app
            <ArrowRight size={17} />
          </button>

          <button
            className="menu-button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <button className="btn btn-primary" onClick={openBestStore}>
            Baixar app
            <ArrowRight size={17} />
          </button>
        </nav>
      )}

      <section className="hero">
        <div className="hero-copy" data-reveal>
          <span className="sticker sticker-eyebrow">
            <Mic size={15} />
            fonoaudiologia + jogos
          </span>

          <h1>
            A terapia de fala
            <br />
            que a criança{' '}
            <span className="squiggle-wrap">
              pede para repetir
              <Squiggle />
            </span>
            .
          </h1>

          <p>
            O fonoaudiólogo define os fonemas, a criança treina brincando com o
            pinguim — e a evolução volta para o consultório em dados claros.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary btn-big" onClick={openBestStore}>
              Baixar o app
              <ArrowRight size={19} />
            </button>
            <a className="btn btn-ghost btn-big" href="#como-funciona">
              Ver como funciona
            </a>
          </div>

        </div>

        <div className="hero-stage" data-reveal>
          <img
            className="hero-mascot-img"
            src={pinguimFalando}
            alt="Pinguim mascote da Pygus cantando no microfone"
          />

          <div className="float-block float-one" aria-hidden="true">
            <span className="letter-block block-teal">R</span>
          </div>
          <div className="float-block float-two" aria-hidden="true">
            <span className="letter-block block-orange">S</span>
          </div>
          <div className="float-block float-three" aria-hidden="true">
            <span className="letter-block block-yellow">A</span>
          </div>

          <div className="sticker float-sticker sticker-note" aria-hidden="true">
            ♪ rá-rá-rá
          </div>
          <div className="sticker float-sticker sticker-voice" aria-hidden="true">
            <Mic size={16} />
            voz gravada
            <strong>92%</strong>
          </div>
          <div className="sticker float-sticker sticker-fonema" aria-hidden="true">
            /R/ liberado
            <Check size={15} />
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {marqueeWords.map((word) => (
                <span key={`${copy}-${word}`}>
                  {word}
                  <i className="marquee-dot" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="steps-section" id="como-funciona">
        <div className="section-heading" data-reveal>
          <span className="sticker sticker-eyebrow">como funciona</span>
          <h2>
            Um ciclo simples entre{' '}
            <em>consultório</em> e <em>casa</em>.
          </h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className={`step-card step-${index + 1}`} key={step.title} data-reveal>
              <span className={`letter-block step-block block-${['teal', 'orange', 'yellow'][index]}`}>
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="features-section" id="recursos">
        <div className="section-heading" data-reveal>
          <span className="sticker sticker-eyebrow">pygus profissional</span>
          <h2>
            Ferramentas de gente grande, com <em>cara de brincadeira</em>.
          </h2>
          <p>
            O painel organiza a rotina clínica e transforma cada treino em
            informação útil para a próxima sessão.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article className="feature-card" key={feature.title} data-reveal>
                <div className={`feature-icon icon-${feature.color}`}>
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="app-section" id="app">
        <div className="app-stage" data-reveal>
          <div className="phone-mockup">
            <div className="phone-notch" />
            <div className="phone-screen">
              <img
                className="app-screen-img"
                src={telaNivel2}
                alt="Tela do nível 2 do app Pygus: a criança vê a palavra abacaxi e toca para falar"
              />
            </div>
          </div>
          <img
            className="phone-mascot-img"
            src={pinguimComemorando}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="app-copy" data-reveal>
          <span className="sticker sticker-eyebrow">pygus paciente</span>
          <h2>
            Em casa, o treino continua — <em>sem parecer dever</em>.
          </h2>
          <p>
            A criança joga, grava a própria voz e ganha reforço positivo do
            pinguim. A família participa, e o profissional vê tudo.
          </p>

          <ol className="level-list">
            {levels.map((level) => (
              <li key={level.name}>
                <span className="level-tag">{level.name}</span>
                <div>
                  <strong>{level.title}</strong>
                  <p>{level.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-heading" data-reveal>
          <span className="sticker sticker-eyebrow">famílias</span>
          <h2>
            Quem usa, <em>recomenda de coração</em>.
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <figure
              className={`polaroid polaroid-${index + 1}`}
              key={testimonial.name}
              data-reveal
            >
              <span className="tape" aria-hidden="true" />
              <figcaption>
                <div className="stars" aria-label="5 estrelas">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={15} fill="currentColor" />
                  ))}
                </div>
                <blockquote>"{testimonial.quote}"</blockquote>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={`Foto de ${testimonial.name}`} />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="plans-section" id="planos">
        <div className="section-heading" data-reveal>
          <span className="sticker sticker-eyebrow">planos</span>
          <h2>
            Comece grátis, cresça <em>no seu ritmo</em>.
          </h2>
          <p>Sem fidelidade. Atendimento das 8h às 18h.</p>

          <div className="billing-toggle" data-reveal>
            <button
              className={billing === 'monthly' ? 'is-active' : ''}
              onClick={() => setBilling('monthly')}
            >
              Mensal
            </button>
            <button
              className={billing === 'annual' ? 'is-active' : ''}
              onClick={() => setBilling('annual')}
            >
              Anual
              <span className="toggle-discount">−17%</span>
            </button>
          </div>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article
              className={`plan-card ${plan.featured ? 'is-featured' : ''}`}
              key={plan.title}
              data-reveal
            >
              {plan.featured && <span className="plan-badge">mais popular</span>}
              <h3>{plan.title}</h3>
              <span className="plan-note">{plan.note}</span>
              <div className="plan-price">
                <span className="currency">R$</span>
                <strong>{plan[billing].price}</strong>
                <span className="cents">{plan[billing].cents}</span>
                <span className="period">
                  /{billing === 'monthly' ? 'mês' : 'ano'}
                </span>
                {billing === 'annual' && plan.annual.discount && (
                  <span className="discount-tag">−{plan.annual.discount}</span>
                )}
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`btn ${plan.featured ? 'btn-light' : 'btn-primary'}`}
                onClick={openBestStore}
              >
                Começar
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading" data-reveal>
          <span className="sticker sticker-eyebrow">dúvidas</span>
          <h2>
            Perguntas que <em>sempre chegam</em>.
          </h2>
        </div>

        <div className="faq-list" data-reveal>
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={faq.question}>
                <button
                  onClick={() => setActiveFaq(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <strong>{faq.question}</strong>
                  <span className="faq-toggle">
                    <Plus size={19} strokeWidth={2.6} />
                  </span>
                </button>
                {isOpen && <p>{faq.answer}</p>}
              </div>
            )
          })}
        </div>
      </section>

      <section className="cta-section" id="contato">
        <div className="cta-inner" data-reveal>
          <div className="cta-copy">
            <h2>
              Bora colocar o pinguim para{' '}
              <span className="squiggle-wrap">
                trabalhar
                <Squiggle />
              </span>
              ?
            </h2>
            <p>
              Baixe o app, cadastre um paciente teste e veja em minutos como o
              treino fica mais leve — para a criança e para você.
            </p>
            <div className="store-buttons">
              <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
                <img src={appleStoreSvg} alt="" />
                <span>
                  Baixar na
                  <strong>App Store</strong>
                </span>
              </a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                <img src={googlePlaySvg} alt="" />
                <span>
                  Disponível no
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>
          </div>
          <div className="cta-mascot" aria-hidden="true">
            <img className="cta-mascot-img" src={pinguimAcenando} alt="" />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <img src={LogoImg} alt="Pygus" />
        <p>
          Transformando a comunicação de crianças através da tecnologia.
          <br />
          suporte@pygus.com.br · +55 (81) 99420-6939
        </p>
        <span>
          CNPJ 47.932.823/0001-19 · feito pela Pygus com{' '}
          <Heart size={13} fill="currentColor" aria-label="amor" />
        </span>
      </footer>

      <a
        className="whatsapp-fab"
        href={`https://wa.me/+5581994206939?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar pelo WhatsApp"
      >
        <img src={whatsappIcon} alt="" />
      </a>
    </main>
  )
}
