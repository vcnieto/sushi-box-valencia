import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-[#F5F5F5] border-t border-black/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1B1717] mb-4">
            Contacto
          </h2>
          <div className="h-[2px] w-14 md:w-16 bg-[#810000] mx-auto rounded-full mb-5" />
          <p className="text-sm md:text-base text-[#1B1717]/80 max-w-2xl mx-auto">
            Encuéntranos y realiza tu pedido fácilmente.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Mapa */}
          <div className="w-full h-full">
            <div className="overflow-hidden rounded-2xl shadow-sm border border-neutral-200 bg-neutral-100 h-[260px] md:h-[340px]">
              <iframe
                title="Ubicación Sushi Box Valencia"
                src="https://www.google.com/maps?q=C.%20de%20Beatr%C3%ADz%20Tortosa%2C%201%2C%20Algir%C3%B3s%2C%2046021%20Val%C3%A8ncia%2C%20Valencia&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-[#1B1717]" />
                <div className="text-sm md:text-base text-muted-foreground">
                  <p className="font-medium text-[#1B1717]">Dirección</p>
                  <p>C. de Beatríz Tortosa, 1</p>
                  <p>Algirós, 46021 València, Valencia</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1B1717]" />
                <div className="text-sm md:text-base text-muted-foreground">
                  <p className="font-medium text-[#1B1717]">Teléfono</p>
                  <a href="tel:+34633260476" className="hover:text-[#810000] transition-colors">
                    +34 633 26 04 76
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-[#1B1717]" />
                <div className="text-sm md:text-base text-muted-foreground">
                  <p className="font-medium text-[#1B1717]">Horario</p>
                  <p>Domingo: Cerrado</p>
                  <p>Lunes: Cerrado</p>
                  <p>Martes: Cerrado</p>
                  <p>Miércoles: Cerrado</p>
                  <p>Jueves: 12:00–16:00 / 19:00–21:30</p>
                  <p>Viernes: 12:00–16:00 / 19:00–21:30</p>
                  <p>Sábado: 12:00–16:00 / 19:00–21:30</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a href="tel:+34633260476" className="flex-1">
                <Button
                  size="lg"
                  className="w-full rounded-full bg-[#810000] hover:bg-[#630000] text-[#EEEBDD] flex items-center justify-center gap-2 border-none"
                >
                  <Phone className="w-5 h-5" />
                  <span>Llamar ahora</span>
                </Button>
              </a>
              <a href="https://wa.me/34633260476" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button
                  size="lg"
                  className="w-full rounded-full bg-emerald-500 hover:bg-emerald-500/90 text-white flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
