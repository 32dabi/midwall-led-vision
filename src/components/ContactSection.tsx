import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-midwall-darkest relative">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Central de <span className="text-gradient">vendas</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Fale com a gente pelo canal que for melhor para você.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: MessageCircle,
              title: "WhatsApp",
              info: "(86) 9 9999-9999",
              href: "https://wa.me/5586999999999?text=Olá, vim pelo site da Midwall",
            },
            {
              icon: Phone,
              title: "Telefone",
              info: "(86) 9 9999-9999",
              href: "tel:+5586999999999",
            },
            {
              icon: Mail,
              title: "E-mail",
              info: "contato@midwall.com.br",
              href: "mailto:contato@midwall.com.br",
            },
            {
              icon: MapPin,
              title: "Localização",
              info: "Teresina, Piauí",
              href: "#",
            },
          ].map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.info}</p>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5586999999999?text=Olá, vim pelo site da Midwall"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
