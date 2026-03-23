import { motion } from "framer-motion";
import led3d from "@/assets/led-3d-panel.jpg";
import ledFoldable from "@/assets/led-panel-foldable.avif";
import ledOutdoor from "@/assets/led-outdoor-billboard.jpg";

const products = [
{
  image: led3d,
  title: "Painel de LED 3D — P5 Outdoor",
  desc: "Os dois únicos painéis de LED 3D do Piauí. Tecnologia imersiva anamórfica para publicidade de alto impacto. Medidas e aplicações conforme projeto.",
  badge: "Exclusivo no Piauí"
},
{
  image: ledFoldable,
  title: "Painel de LED P2.7 Indoor Dobrável",
  desc: "Painéis dobráveis de 1,28m × 2,07m, acopláveis em até 6 módulos, gerando um painel de 7,68m × 2,07m. Ideal para eventos indoor de todos os portes.",
  badge: "Locação"
},
{
  image: ledOutdoor,
  title: "Mídia em Painéis LED — Publicidade",
  desc: "Venda de mídia publicitária em nossos painéis de LED espalhados por toda a cidade de Teresina. Visibilidade garantida para a sua marca.",
  badge: "Publicidade"
}];


const ProductsSection = () => {
  return (
    <section id="equipamentos" className="py-20 relative bg-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center">
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Nossos <span className="text-gradient">equipamentos</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça nossa linha de painéis de LED, desenvolvidos para oferecer impacto visual e alta definição.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) =>
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover:shadow-[var(--shadow-glow-pink)]">
            
              <div className="relative h-56 overflow-hidden">
                <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                  {p.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default ProductsSection;