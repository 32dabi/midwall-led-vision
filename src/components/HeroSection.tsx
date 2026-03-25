import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/midwall-hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-midwall-darkest/80 via-midwall-darker/50 to-transparent" />
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground"
          >
            Painel de LED é com a{" "}
            <span className="text-gradient">Midwall!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg"
          >
            Locação de painéis de LED para eventos e venda de mídia publicitária em Teresina, Piauí. Os dois únicos painéis de LED 3D do estado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#equipamentos"
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Ver equipamentos
            </a>
            <a
              href="https://wa.me/5586999999999?text=Olá, vim pelo site da Midwall"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-foreground/30 text-foreground font-semibold hover:bg-foreground/10 transition-colors"
            >
              Solicite um orçamento
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
