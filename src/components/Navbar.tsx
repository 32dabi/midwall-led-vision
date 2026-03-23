import { useState } from "react";
import { Menu, X } from "lucide-react";
import midwallLogo from "@/assets/midwall-logo.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midwall-darker/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={midwallLogo} alt="Midwall Comunicação" className="h-[60px] rounded" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5586999999999?text=Olá, vim pelo site da Midwall"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-midwall-darker border-t border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5586999999999?text=Olá, vim pelo site da Midwall"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
