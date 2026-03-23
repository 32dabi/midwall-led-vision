import { motion } from "framer-motion";
import led3d from "@/assets/led-3d-panel.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Sobre a Midwall</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Não vendemos pixels.<br />
              <span className="text-gradient">Vendemos impacto.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Midwall Comunicação é referência em painéis de LED em Teresina, Piauí. Atuamos com locação de painéis para eventos de todos os portes e venda de mídia publicitária em nossos painéis espalhados pela cidade.
              </p>
              <p>
                Contamos com os <strong className="text-foreground">dois únicos painéis de LED 3D do Estado do Piauí</strong>, nos tornando referência neste tipo de tecnologia imersiva para publicidade.
              </p>
              <p>
                Transformamos qualquer evento em uma experiência visual única, com tecnologia de ponta, suporte completo e compromisso com a excelência.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-glow-cyan)]">
              <img src={led3d} alt="Painel LED 3D Midwall" loading="lazy" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/20 blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl bg-secondary/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
