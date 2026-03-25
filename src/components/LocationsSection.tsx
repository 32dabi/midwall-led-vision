import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Edifício Studio Homero",
    href: "https://www.google.com/maps/place/Edif%C3%ADcio+Studio+Homero/@-5.0792444,-42.7827321,17z/data=!3m1!4b1!4m6!3m5!1s0x78e3b13f01239a7:0xd398a63fcc39f5cf!8m2!3d-5.0792497!4d-42.7801572!16s%2Fg%2F11h79n6dp5",
  },
  {
    name: "Rodovia Antônio Medeiros Filho",
    href: "https://www.google.com/maps/place/CEV+Col%C3%A9gio+-+Unidade+Kennedy/@-5.0726171,-42.7722957,3a,90y,91.66h,93.24t/data=!3m7!1e1!3m5!1spg5IvVfT1OccjiQrtqC3Xg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.2371962546631465%26panoid%3Dpg5IvVfT1OccjiQrtqC3Xg%26yaw%3D91.66049338330191!7i16384!8i8192!4m10!1m2!2m1!1sCEV!3m6!1s0x78e3a3ea5f58e41:0x4d450bcb2cc20a76!8m2!3d-5.0726306!4d-42.770973!15sCgNDRVZaBSIDY2V2kgEOcHJpdmF0ZV9zY2hvb2zgAQA!16s%2Fg%2F11bwh56gf4",
  },
];

const LocationsSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-card relative">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Localização dos{" "}
            <span className="text-gradient">Painéis 3D</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-6"
        >
          <img
            src="/Midwall_Logo.png"
            alt="Midwall Logo"
            className="h-16 md:h-20 mb-4"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            {locations.map((loc, i) => (
              <motion.a
                key={loc.name}
                href={loc.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
              >
                <MapPin className="w-5 h-5 shrink-0" />
                {loc.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
