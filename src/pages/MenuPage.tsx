import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  menuItems,
  allergenEmojis,
  allergenLabels,
  type Category,
  type Allergen,
  type MenuItem,
} from '@/data/menuData';
import makiImage from '@/assets/MAKI.png';
import gyozasImage from '@/assets/GYOZAS.png';
import hotAkitaImage from '@/assets/HOT MAKI__AKITA.png';
import hotSakeTempuraImage from '@/assets/HOT MAKI_SAKE TEMPURA.png';
import hotUnagiTempuraImage from '@/assets/HOT MAKI_UNAGI TEMPURA.png';
import sashimiImage from '@/assets/SASHIMI.png';
import heroSushiBoxImage from '@/assets/hero-sushi-box.jpg';

const categories: Category[] = [
  'Maki',
  'Hot Maki',
  'Uramaki',
  'Nigiri',
  'Gunkan',
  'Sashimi',
  'Ensaladas',
  'Platos calientes',
  'Combos',
];

const allergens: Allergen[] = [
  'mariscos',
  'pescado',
  'gambas',
  'lactosa',
  'huevo',
  'gluten',
  'soja',
  'sesamo',
  'vegano',
];

const specificItemImages: Record<string, string> = {
  'hot-akit': hotAkitaImage,
  'hot-sake-tempura': hotSakeTempuraImage,
  'hot-unagi-tempura': hotUnagiTempuraImage,
  'caliente-gyozas': gyozasImage,
};

const defaultCategoryImages: Partial<Record<Category, string>> = {
  Maki: makiImage,
  'Hot Maki': makiImage,
  Sashimi: sashimiImage,
  'Platos calientes': gyozasImage,
};

const getItemImage = (item: MenuItem): string => {
  return (
    specificItemImages[item.id] ||
    (defaultCategoryImages[item.category] as string | undefined) ||
    heroSushiBoxImage
  );
};

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    return categoryMatch;
  });

  return (
    <div className="min-h-screen bg-[#EEEBDD] pt-20 page-fade-in">
      <Header />
      <main className="pt-16 pb-24">
        <section className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1B1717] mb-4">
              Nuestro Menú
            </h1>
            <div className="h-[2px] w-16 md:w-20 bg-[#810000] mx-auto rounded-full mb-5" />
            <p className="text-sm md:text-base text-[#1B1717]/80 max-w-2xl mx-auto">
              Descubre nuestra carta completa de sushi y platos japoneses.
            </p>
          </div>

          <div className="space-y-8 mb-14">
            {/* Filtros de categorías */}
            <div className="border border-neutral-200 rounded-2xl p-4 bg-white">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-3">
                Categorías
              </h2>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  size="sm"
                  className="rounded-full text-xs md:text-sm"
                  onClick={() => setSelectedCategory('all')}
                >
                  Todas
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    className="rounded-full text-xs md:text-sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Leyenda de alérgenos (informativa, sin filtro) */}
            <div className="border border-neutral-200 rounded-2xl p-4 bg-white">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-3">
                Alérgenos
              </h2>
              <div className="flex flex-wrap gap-2 text-xs md:text-sm text-muted-foreground">
                {allergens.map((allergen) => (
                  <div
                    key={allergen}
                    className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-3 py-1 bg-white"
                  >
                    <span>{allergenEmojis[allergen]}</span>
                    <span>{allergenLabels[allergen]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {selectedCategory === 'all' ? (
            <div className="space-y-20">
              {categories.map((category) => {
                const itemsInCategory = menuItems.filter(
                  (item) => item.category === category,
                );

                if (itemsInCategory.length === 0) return null;

                return (
                  <div key={category} className="space-y-6">
                    <div className="text-left">
                      <h2 className="text-2xl md:text-3xl font-extrabold text-[#1B1717] tracking-tight mb-1">
                        {category}
                      </h2>
                      <div className="h-[2px] w-14 md:w-16 bg-[#810000] rounded-full mt-1" />
                    </div>
                    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {itemsInCategory.map((item) => (
                        <Card
                          key={item.id}
                          className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden"
                        >
                          <div className="aspect-video w-full overflow-hidden bg-neutral-100">
                            <img
                              src={getItemImage(item)}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="p-5 md:p-6 flex flex-col gap-3">
                            <div>
                              <h3 className="text-lg md:text-xl font-semibold text-[#1B1717] mb-1">
                                {item.name}
                              </h3>
                              <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                                {item.ingredients}
                              </p>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-lg font-bold text-[#810000]">
                                {item.price.toFixed(2)}€
                              </span>
                              <div className="flex gap-1 text-lg">
                                {item.allergens.map((allergen) => (
                                  <span key={allergen} title={allergenLabels[allergen]}>
                                    {allergenEmojis[allergen]}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredItems.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-neutral-100">
                      <img
                        src={getItemImage(item)}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-5 md:p-6 flex flex-col gap-3">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-[#1B1717] mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                          {item.ingredients}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-lg font-bold text-[#810000]">
                          {item.price.toFixed(2)}€
                        </span>
                        <div className="flex gap-1 text-lg">
                          {item.allergens.map((allergen) => (
                            <span key={allergen} title={allergenLabels[allergen]}>
                              {allergenEmojis[allergen]}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="py-12 text-center text-sm md:text-base text-muted-foreground">
                  No se encontraron platos con los filtros seleccionados.
                </div>
              )}
            </>
          )}
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MenuPage;
