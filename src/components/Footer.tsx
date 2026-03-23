import midwallLogo from "@/assets/midwall-logo.png";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-midwall-darkest border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img src={midwallLogo} alt="Midwall Comunicação" className="h-12 rounded mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Referência em painéis de LED em Teresina, Piauí. Locação para eventos e venda de mídia publicitária.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Links rápidos</h4>
            <div className="space-y-2">
              {["Início", "Serviços", "Equipamentos", "Sobre", "Contato"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Redes sociais</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <s.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Midwall Comunicação. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
