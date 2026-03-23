import { motion } from "framer-motion";
import { Monitor, Megaphone, PartyPopper, Building2 } from "lucide-react";
import ledIndoor from "@/assets/led-indoor-event.jpg";
import ledOutdoor from "@/assets/led-outdoor-billboard.jpg";

const services = [
{
  icon: PartyPopper,
  title: "Locação para Eventos",
  desc: "Painéis de LED para shows, festas, congressos, formaturas e eventos corporativos de todos os portes. Montagem e desmontagem inclusos.",
  image: ledIndoor
},
{
  icon: Megaphone,
  title: "Mídia Publicitária",
  desc: "Venda de espaço publicitário em nossos painéis de LED estrategicamente posicionados em Teresina. Máxima visibilidade para sua marca.",
  image: ledOutdoor
},
{
  icon: Monitor,
  title: "LED 3D Imersivo",
  desc: "Experiências visuais em 3D anamórfico nos dois únicos painéis 3D do Piauí. Publicidade que impressiona e viraliza.",
  image: null
},
{
  icon: Building2,
  title: "Projetos Corporativos",
  desc: "Soluções sob medida para fachadas, vitrines e ambientes corporativos com painéis modulares de alta definição.",
  image: null
}];


const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 relative bg-[sidebar-primary-foreground] bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14">
          
          <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-2">Nossos Serviços</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Soluções em tecnologia LED<br />
            <span className="text-gradient">para todos os segmentos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) =>
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-secondary/50 transition-all">
            
              {s.image &&
            <div className="absolute inset-0">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" />
                </div>
            }
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default ServicesSection;