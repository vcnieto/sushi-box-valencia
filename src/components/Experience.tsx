import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María García',
    rating: 5,
    comment: 'La calidad del sushi es excepcional. Siempre fresco y la presentación es impecable.'
  },
  {
    name: 'Carlos Ruiz',
    rating: 5,
    comment: 'El mejor sushi a domicilio de Valencia. Los combos son generosos y deliciosos.'
  },
  {
    name: 'Laura Martínez',
    rating: 5,
    comment: 'Me encanta la variedad del menú. El servicio es rápido y el producto llega perfecto.'
  }
];

const Experience = () => {
  return (
    <section id="galeria" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">La Experiencia Sushi Box</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada caja es preparada con dedicación para que disfrutes de una experiencia única
          </p>
        </div>

        {/* Gallery placeholder - would be replaced with actual images */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-6xl">
              🍱
            </div>
          </div>
          <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-6xl">
              🍣
            </div>
          </div>
          <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-6xl">
              🥢
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.comment}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
