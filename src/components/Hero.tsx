import heroImage from '@/assets/hero-sushi-box.jpg';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden bg-[#EEEBDD] min-h-[70vh] md:min-h-[78vh]"
    >
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-[#1B1717]">
              Sushi de autor directo a tu puerta
            </h1>
            <p className="text-lg md:text-xl text-[#1B1717]/80 max-w-xl">
              Combinamos técnica y frescura para que disfrutes en casa como si estuvieras en un restaurante.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="tel:+34633260476">
                <Button
                  size="lg"
                  className="rounded-full bg-[#810000] hover:bg-[#630000] text-[#EEEBDD] px-8 flex items-center gap-2 shadow-sm border-none"
                >
                  <Phone className="h-5 w-5" />
                  <span>Hacer pedido</span>
                </Button>
              </a>
              <a href="/menu">
                <Button
                  size="lg"
                  className="rounded-full bg-[#810000] hover:bg-[#630000] text-[#EEEBDD] px-8 border-none"
                >
                  Ver menú
                </Button>
              </a>
            </div>
          </div>
          <div className="animate-fade-in-up flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Caja de Sushi Box presentada cuidadosamente"
              className="w-full max-w-xl h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
