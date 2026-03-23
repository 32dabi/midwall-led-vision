import { motion } from "framer-motion";
import { Shield, Settings, Zap, Eye, Truck } from "lucide-react";

const features = [
{
  icon: Shield,
  title: "Atendimento consultivo e seguro",
  desc: "Suporte técnico completo, instalação com equipe própria e acompanhamento dedicado em cada etapa do seu projeto."
},
{
  icon: Settings,
  title: "Soluções personalizadas",
  desc: "Painéis ajustáveis em tamanho e configuração. Opções para indoor, outdoor e mídias imersivas em 3D."
},
{
  icon: Zap,
  title: "Tecnologia de ponta",
  desc: "Os dois únicos painéis de LED 3D do Piauí, com alta definição, brilho intenso e cores vibrantes."
},
{
  icon: Eye,
  title: "Impacto visual garantido",
  desc: "Experiências visuais imersivas que capturam a atenção do público e maximizam o retorno da sua comunicação."
},
{
  icon: Truck,
  title: "Logística completa",
  desc: "Transporte, montagem e desmontagem inclusos. Atendemos eventos de todos os portes em Teresina e região."
}];


const FeaturesSection = () => {
  return (
    <section className="py-20 relative bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14">
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Tecnologia que entrega<br />
            <span className="text-gradient">o que promete</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl">
            Somos referência em LED no Piauí. Diferentes em cada detalhe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) =>
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
            
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default FeaturesSection;