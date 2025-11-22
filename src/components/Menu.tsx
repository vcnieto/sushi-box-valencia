import { useState } from 'react';
import { menuItems, allergenEmojis, allergenLabels, type Category, type Allergen } from '@/data/menuData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const categories: Category[] = [
  'Maki',
  'Hot Maki',
  'Uramaki',
  'Nigiri',
  'Gunkan',
  'Sashimi',
  'Ensaladas',
  'Platos calientes',
  'Combos'
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
  'vegano'
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedAllergens, setSelectedAllergens] = useState<Allergen[]>([]);

  const toggleAllergen = (allergen: Allergen) => {
    setSelectedAllergens(prev =>
      prev.includes(allergen)
        ? prev.filter(a => a !== allergen)
        : [...prev, allergen]
    );
  };

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const allergenMatch = selectedAllergens.length === 0 || 
      selectedAllergens.some(allergen => item.allergens.includes(allergen));
    return categoryMatch && allergenMatch;
  });

  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Menú</h2>
          <p className="text-xl text-muted-foreground">
            Descubre nuestra selección de sushi y platos japoneses
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
              Categorías
            </h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                size="sm"
              >
                Todos
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Allergens */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
              Alérgenos
            </h3>
            <div className="flex flex-wrap gap-2">
              {allergens.map(allergen => (
                <Button
                  key={allergen}
                  variant={selectedAllergens.includes(allergen) ? 'default' : 'outline'}
                  onClick={() => toggleAllergen(allergen)}
                  size="sm"
                >
                  {allergenEmojis[allergen]} {allergenLabels[allergen]}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-6xl">{allergenEmojis[item.allergens[0]] || '🍱'}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.ingredients}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {item.price.toFixed(2)}€
                  </span>
                  <div className="flex gap-1">
                    {item.allergens.map(allergen => (
                      <span key={allergen} className="text-lg" title={allergenLabels[allergen]}>
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
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No se encontraron platos con los filtros seleccionados
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
