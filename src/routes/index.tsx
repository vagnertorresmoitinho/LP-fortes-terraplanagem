import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Construction,
  Layers,
  Mountain,
  Tractor,
  Truck,
  MessageCircle,
} from "lucide-react";
import "../landing.css";

export const Route = createFileRoute("/")({ component: Home });
const message = "Olá! Gostaria de solicitar um orçamento com a Fortes Terraplanagem.";
const whatsapp = (phone: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const principal = whatsapp("5565999485776");
const copyrightYear = new Intl.DateTimeFormat("pt-BR", {
  year: "numeric",
  timeZone: "America/Cuiaba",
}).format(new Date());
const services = [
  {
    icon: Layers,
    title: "Terraplanagem & Nivelamento",
    text: "Preparação precisa do solo para galpões, edificações e obras civis.",
  },
  {
    icon: Mountain,
    title: "Movimentação de Terra",
    text: "Aterro, desaterro, cortes e escavações com maquinário pesado.",
  },
  {
    icon: Truck,
    title: "Transporte de Materiais",
    text: "Logística ágil de cascalho, terra, brita e insumos para obras e lavouras.",
  },
  {
    icon: Tractor,
    title: "Demandas Rurais & Fazendas",
    text: "Abertura de estradas, construção e limpeza de açudes, curvas de nível e drenagem.",
  },
  {
    icon: Construction,
    title: "Apoio a Construtoras",
    text: "Suporte operacional para loteamentos e empreiteiras.",
  },
  {
    icon: MessageCircle,
    title: "Orçamento Sob Medida",
    text: "Avaliação detalhada do terreno e cronograma claro sem surpresas.",
  },
];
const differences = [
  ["Cumprimento rigoroso de prazos", "Cronograma cumprido à risca para sua obra não parar."],
  ["Comunicação e transparência", "Alinhamento constante do andamento do trabalho."],
  [
    "Equipamentos adequados",
    "Máquinas revisadas e dimensionadas para o volume exato da sua demanda.",
  ],
  [
    "Atendimento rural e urbano",
    "Experiência prática tanto em áreas urbanas quanto no agronegócio.",
  ],
];
function Home() {
  return (
    <div className="fortes-page">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="landing-container header-inner">
          <a className="brand" href="#inicio" aria-label="Fortes Terraplanagem, início">
            <span className="brand-image">
              <img
                src="/images/fortes-marca.jpeg"
                alt="Fortes Terraplanagem"
                width="1254"
                height="580"
              />
            </span>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#servicos">Serviços</a>
            <a href="#diferenciais">Por que a Fortes</a>
            <a href="#contatos">Contatos</a>
          </nav>
          <a
            className="button header-button"
            href={principal}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar orçamento <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </header>
      <main id="conteudo">
        <section id="inicio" className="hero">
          <div className="landing-container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span />
                Qualidade • Compromisso • Eficiência
              </p>
              <h1>
                Terraplanagem, movimentação de terra e transporte <em>com precisão</em> para sua
                obra ou fazenda.
              </h1>
              <p className="hero-description">
                Soluções completas para produtores rurais, construtoras e proprietários que exigem
                pontualidade, maquinário adequado e transparência em cada etapa.
              </p>
              <div className="hero-actions">
                <a className="button" href={principal} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} aria-hidden="true" /> Solicitar orçamento{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a className="text-link" href="#servicos">
                  Conheça os serviços <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
              <p className="hero-phone">
                Fale com a Fortes{" "}
                <a href={principal} target="_blank" rel="noopener noreferrer">
                  (65) 99948-5776
                </a>
              </p>
            </div>
            <div
              className="hero-art"
              role="img"
              aria-label="Arte da Fortes com retroescavadeira e caminhão em terreno de obra"
            >
              <div className="art-label">
                <span>FORTES TERRAPLANAGEM</span>
                <strong>
                  Estrutura forte.
                  <br />
                  Trabalho de precisão.
                </strong>
              </div>
              <span className="photo-caption">TERRAPLANAGEM & TRANSPORTES</span>
            </div>
          </div>
        </section>
        <div className="audience-strip">
          <div className="landing-container">
            <span>O seu próximo projeto começa com uma base bem feita.</span>
            <strong>
              OBRAS CIVIS <span> / </span> CONSTRUÇÃO <span> / </span> AGRONEGÓCIO
            </strong>
          </div>
        </div>
        <section id="servicos" className="services section-space landing-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">NOSSOS SERVIÇOS</p>
              <h2>
                Força no campo.
                <br />
                Precisão na obra.
              </h2>
            </div>
            <p>
              Da preparação do solo ao transporte de materiais, soluções para cada etapa do seu
              projeto.
            </p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <Icon size={31} strokeWidth={1.5} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="diferenciais" className="differences section-space">
          <div className="landing-container difference-grid">
            <div>
              <p className="eyebrow">POR QUE ESCOLHER A FORTES</p>
              <h2>
                Compromisso que
                <br />
                você vê em
                <br />
                <em>cada etapa.</em>
              </h2>
              <p className="difference-intro">
                Sua obra ou fazenda merece um parceiro que entende o trabalho e respeita o que foi
                combinado.
              </p>
            </div>
            <div className="difference-list">
              {differences.map(([title, text]) => (
                <article key={title}>
                  <span className="check-icon">
                    <Check size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="campaigns section-space landing-container"
          aria-labelledby="campaign-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FORÇA DA NOSSA MARCA</p>
              <h2 id="campaign-title">
                Seu projeto.
                <br />
                <em>A nossa força.</em>
              </h2>
            </div>
            <p>
              Terraplanagem, preparação de terrenos e transporte de materiais. Conheça as soluções
              da Fortes.
            </p>
          </div>
          <div className="campaign-grid">
            {[
              {
                image: "fortes-foto-3.jpeg",
                title: "Terraplanagem e preparação",
                alt: "Arte da Fortes sobre terraplanagem, com retroescavadeira e caminhão",
              },
              {
                image: "fortes-foto-1.jpeg",
                title: "Terra e transporte para aterro",
                alt: "Arte da Fortes sobre carga de terra para aterro, com caminhão caçamba",
              },
              {
                image: "fortes-foto-2.jpeg",
                title: "Limpeza e nivelamento",
                alt: "Arte da Fortes sobre limpeza de terrenos, com retroescavadeira",
              },
            ].map(({ image, title, alt }) => (
              <a
                className="campaign-card"
                key={image}
                href={`/images/${image}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/images/${image}`}
                  alt={alt}
                  width={image === "fortes-foto-3.jpeg" ? 1086 : 899}
                  height={image === "fortes-foto-3.jpeg" ? 1448 : 1599}
                  loading="lazy"
                />
                <span>
                  {title}
                  <ArrowUpRight size={19} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>
        <section id="contatos" className="section-space landing-container">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">VAMOS CONVERSAR?</p>
              <h2>
                Conte com a Fortes
                <br />
                no seu próximo projeto.
              </h2>
              <p>Fale sobre sua demanda e solicite um orçamento sob medida.</p>
            </div>
            <div className="contact-options">
              <a href={principal} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                <span>
                  <small>WHATSAPP PRINCIPAL</small>
                  <strong>(65) 99948-5776</strong>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a href={whatsapp("5565999183788")} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                <span>
                  <small>WHATSAPP ADICIONAL</small>
                  <strong>(65) 99918-3788</strong>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="landing-container site-footer">
        <a className="brand" href="#inicio">
          <span className="brand-image">
            <img
              src="/images/fortes-marca.jpeg"
              alt="Fortes Terraplanagem"
              width="1254"
              height="580"
            />
          </span>
        </a>
        <div className="footer-credit">
          <p>Qualidade • Compromisso • Eficiência</p>
          <p>
            Site desenvolvido por <strong>SCK Soluções</strong>
          </p>
          <p>© {copyrightYear} SCK Soluções · Todos os direitos reservados.</p>
        </div>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
      <a
        className="floating-whatsapp"
        href={principal}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp da Fortes"
      >
        <MessageCircle size={27} aria-hidden="true" />
      </a>
    </div>
  );
}
