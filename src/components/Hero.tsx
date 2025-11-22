import heroImage from '@/assets/hero-sushi-box.jpg';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  const handleOrder = () => {
    window.location.href = 'tel:+34633260476';
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Sushi de autor directo a tu puerta
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Combinamos técnica y frescura para que disfrutes en casa como si estuvieras en un restaurante.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={handleOrder}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Phone className="mr-2 h-5 w-5" />
                Hacer pedido
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToMenu}
                className="border-2"
              >
                Ver menú
              </Button>
            </div>
          </div>
          <div className="animate-fade-in-up">
            <img 
              src={heroImage} 
              alt="Sushi Box - Alta cocina japonesa a domicilio" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
