import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  menuItems,
  allergenEmojis,
  allergenLabels,
  type MenuItem,
} from '@/data/menuData';
import makiImage from '@/assets/MAKI.png';
import gyozasImage from '@/assets/GYOZAS.png';
import hotAkitaImage from '@/assets/HOT MAKI__AKITA.png';
import hotSakeTempuraImage from '@/assets/HOT MAKI_SAKE TEMPURA.png';
import hotUnagiTempuraImage from '@/assets/HOT MAKI_UNAGI TEMPURA.png';
import sashimiImage from '@/assets/SASHIMI.png';
import heroSushiBoxImage from '@/assets/hero-sushi-box.jpg';
import galeria1 from '@/assets/galeria1.jpg';
import galeria2 from '@/assets/galeria2.jpg';
import galeria3 from '@/assets/galeria3.jpg';
import galeria4 from '@/assets/galeria4.jpg';

const featuredGenericImages: string[] = [
  hotAkitaImage,
  hotSakeTempuraImage,
  hotUnagiTempuraImage,
  makiImage,
  sashimiImage,
  gyozasImage,
  galeria1,
  galeria2,
  galeria3,
  galeria4,
];

const featuredItemIds: string[] = [
  'hot-akit',
  'hot-sake-tempura',
  'caliente-gyozas',
  'ensalada-wakame',
  'sashimi-salmon',
  'nigiri-salmon',
  'uramaki-dragon',
  'combo-6',
];

const featuredDishes: MenuItem[] = featuredItemIds
  .map((id) => menuItems.find((item) => item.id === id))
  .filter((item): item is MenuItem => Boolean(item));

const FeaturedDishes = () => {
  return (
    <section className="py-24 bg-[#F5F5F5] border-t border-black/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1B1717] mb-4">
            Platos destacados
          </h2>
          <div className="h-[2px] w-14 md:w-16 bg-[#810000] mx-auto rounded-full mb-5" />
          <p className="max-w-2xl mx-auto text-sm md:text-base text-[#1B1717]/80">
            Una selección de nuestros platos más atractivos para que empieces a descubrir Sushi Box.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((dish, index) => {
            const imageSrc =
              featuredGenericImages[index] ?? heroSushiBoxImage;

            return (
              <Card
                key={dish.id}
                className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="aspect-video w-full overflow-hidden bg-neutral-100">
                  <img
                    src={imageSrc}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              <CardContent className="p-4 md:p-5 flex flex-col gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-[#1B1717] mb-1">{dish.name}</h3>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {dish.ingredients}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xl font-bold text-[#810000]">{dish.price.toFixed(2)}€</span>
                  <div className="flex gap-1 text-lg">
                    {dish.allergens.map((allergen) => (
                      <span key={allergen} title={allergenLabels[allergen]}>
                        {allergenEmojis[allergen]}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="/menu">
            <Button
              size="lg"
              className="rounded-full bg-[#810000] hover:bg-[#630000] text-[#EEEBDD] px-10 shadow-sm border-none"
            >
              Ver menú completo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
