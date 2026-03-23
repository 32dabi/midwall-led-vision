import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Quais tipos de painéis de LED vocês oferecem para locação?",
    a: "Oferecemos painéis de LED P2.7 Indoor dobráveis (1,28m × 2,07m, acopláveis em até 6 módulos) e painéis P5 Outdoor modulares para mídias imersivas em 3D, com medidas conforme projeto.",
  },
  {
    q: "O que são os painéis de LED 3D?",
    a: "São painéis que utilizam tecnologia anamórfica para criar ilusões de profundidade e tridimensionalidade, gerando conteúdo que parece saltar da tela. A Midwall possui os dois únicos painéis com essa tecnologia no Piauí.",
  },
  {
    q: "Vocês atendem eventos de todos os portes?",
    a: "Sim! Atendemos desde eventos íntimos e corporativos até grandes shows e festivais. Nossa equipe cuida de toda a logística, montagem e operação técnica.",
  },
  {
    q: "Como funciona a venda de mídia nos painéis?",
    a: "Nossos painéis de LED estão posicionados em pontos estratégicos de Teresina. Você pode contratar espaço publicitário para exibir sua marca com alto impacto visual e alcance garantido.",
  },
  {
    q: "Qual a área de cobertura da locação?",
    a: "Atendemos Teresina e região metropolitana, além de cidades do interior do Piauí e estados vizinhos, conforme disponibilidade e logística.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-midwall-darker">
      {"\n"}
    </section>
  );
};

export default FAQSection;
