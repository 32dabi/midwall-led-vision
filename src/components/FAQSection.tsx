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
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-2">FAQ</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Dúvidas frequentes
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-heading font-semibold text-foreground pr-4">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
