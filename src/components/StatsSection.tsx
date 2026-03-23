import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2, suffix: "", label: "Painéis LED 3D exclusivos no Piauí" },
  { value: 6, suffix: "", label: "Módulos acopláveis indoor" },
  { value: 500, suffix: "+", label: "Eventos atendidos" },
  { value: 1000, suffix: "+", label: "Marcas impactadas" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-heading text-4xl md:text-5xl font-black text-gradient">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-midwall-darkest relative">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <Counter target={s.value} suffix={s.suffix} />
              <p className="mt-2 text-muted-foreground text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
