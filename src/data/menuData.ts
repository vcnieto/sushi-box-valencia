export type Allergen = 'mariscos' | 'pescado' | 'gambas' | 'lactosa' | 'huevo' | 'gluten' | 'soja' | 'sesamo' | 'vegano';

export type Category = 'Maki' | 'Hot Maki' | 'Uramaki' | 'Nigiri' | 'Gunkan' | 'Sashimi' | 'Ensaladas' | 'Platos calientes' | 'Combos';

export interface MenuItem {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  category: Category;
  allergens: Allergen[];
  image: string;
}

export const allergenEmojis: Record<Allergen, string> = {
  mariscos: '🐚',
  pescado: '🐟',
  gambas: '🍤',
  lactosa: '🥛',
  huevo: '🥚',
  gluten: '🌾',
  soja: '🥢',
  sesamo: '🌰',
  vegano: '🌱'
};

export const allergenLabels: Record<Allergen, string> = {
  mariscos: 'Mariscos',
  pescado: 'Pescado',
  gambas: 'Gambas',
  lactosa: 'Lactosa',
  huevo: 'Huevo',
  gluten: 'Gluten',
  soja: 'Soja',
  sesamo: 'Sésamo',
  vegano: 'Vegano'
};

export const menuItems: MenuItem[] = [
  // Maki
  {
    id: 'maki-1',
    name: 'Maki de Salmón',
    ingredients: 'Arroz, alga nori, salmón fresco',
    price: 8.50,
    category: 'Maki',
    allergens: ['pescado', 'gluten', 'soja'],
    image: 'maki-salmon.jpg'
  },
  {
    id: 'maki-2',
    name: 'Maki de Atún',
    ingredients: 'Arroz, alga nori, atún rojo',
    price: 9.00,
    category: 'Maki',
    allergens: ['pescado', 'gluten', 'soja'],
    image: 'maki-atun.jpg'
  },
  {
    id: 'maki-3',
    name: 'Maki Vegetal',
    ingredients: 'Arroz, alga nori, aguacate, pepino, zanahoria',
    price: 7.00,
    category: 'Maki',
    allergens: ['vegano', 'gluten', 'soja'],
    image: 'maki-vegetal.jpg'
  },
  // Hot Maki
  {
    id: 'hot-maki-1',
    name: 'Hot Maki Spicy',
    ingredients: 'Arroz, salmón, aguacate, salsa spicy, tempura',
    price: 12.50,
    category: 'Hot Maki',
    allergens: ['pescado', 'gluten', 'huevo', 'soja'],
    image: 'hot-maki-spicy.jpg'
  },
  {
    id: 'hot-maki-2',
    name: 'Hot Maki de Langostino',
    ingredients: 'Arroz, langostino tempura, queso crema, cebollino',
    price: 13.00,
    category: 'Hot Maki',
    allergens: ['gambas', 'mariscos', 'lactosa', 'gluten', 'soja'],
    image: 'hot-maki-langostino.jpg'
  },
  // Uramaki
  {
    id: 'uramaki-1',
    name: 'California Roll',
    ingredients: 'Arroz, cangrejo, aguacate, pepino, mayonesa, sésamo',
    price: 11.00,
    category: 'Uramaki',
    allergens: ['mariscos', 'huevo', 'sesamo', 'gluten', 'soja'],
    image: 'california-roll.jpg'
  },
  {
    id: 'uramaki-2',
    name: 'Philadelphia Roll',
    ingredients: 'Arroz, salmón, queso crema, aguacate',
    price: 11.50,
    category: 'Uramaki',
    allergens: ['pescado', 'lactosa', 'gluten', 'soja'],
    image: 'philadelphia-roll.jpg'
  },
  {
    id: 'uramaki-3',
    name: 'Spicy Tuna Roll',
    ingredients: 'Arroz, atún, salsa spicy, cebollino, sésamo',
    price: 12.00,
    category: 'Uramaki',
    allergens: ['pescado', 'sesamo', 'gluten', 'soja'],
    image: 'spicy-tuna.jpg'
  },
  // Nigiri
  {
    id: 'nigiri-1',
    name: 'Nigiri de Salmón',
    ingredients: 'Arroz, salmón fresco',
    price: 3.50,
    category: 'Nigiri',
    allergens: ['pescado', 'soja'],
    image: 'nigiri-salmon.jpg'
  },
  {
    id: 'nigiri-2',
    name: 'Nigiri de Atún',
    ingredients: 'Arroz, atún rojo',
    price: 4.00,
    category: 'Nigiri',
    allergens: ['pescado', 'soja'],
    image: 'nigiri-atun.jpg'
  },
  {
    id: 'nigiri-3',
    name: 'Nigiri de Gamba',
    ingredients: 'Arroz, gamba cocida',
    price: 3.80,
    category: 'Nigiri',
    allergens: ['gambas', 'mariscos', 'soja'],
    image: 'nigiri-gamba.jpg'
  },
  // Gunkan
  {
    id: 'gunkan-1',
    name: 'Gunkan de Salmón Picante',
    ingredients: 'Arroz, salmón, salsa spicy, cebollino',
    price: 4.50,
    category: 'Gunkan',
    allergens: ['pescado', 'soja'],
    image: 'gunkan-salmon-spicy.jpg'
  },
  {
    id: 'gunkan-2',
    name: 'Gunkan de Tartar de Atún',
    ingredients: 'Arroz, tartar de atún, aguacate',
    price: 5.00,
    category: 'Gunkan',
    allergens: ['pescado', 'soja'],
    image: 'gunkan-atun.jpg'
  },
  // Sashimi
  {
    id: 'sashimi-1',
    name: 'Sashimi de Salmón',
    ingredients: '6 láminas de salmón fresco',
    price: 14.00,
    category: 'Sashimi',
    allergens: ['pescado'],
    image: 'sashimi-salmon.jpg'
  },
  {
    id: 'sashimi-2',
    name: 'Sashimi de Atún',
    ingredients: '6 láminas de atún rojo',
    price: 16.00,
    category: 'Sashimi',
    allergens: ['pescado'],
    image: 'sashimi-atun.jpg'
  },
  {
    id: 'sashimi-3',
    name: 'Sashimi Mixto',
    ingredients: 'Salmón, atún, lubina (12 piezas)',
    price: 22.00,
    category: 'Sashimi',
    allergens: ['pescado'],
    image: 'sashimi-mixto.jpg'
  },
  // Ensaladas
  {
    id: 'ensalada-1',
    name: 'Ensalada de Algas',
    ingredients: 'Wakame, sésamo, vinagreta de soja',
    price: 6.50,
    category: 'Ensaladas',
    allergens: ['sesamo', 'soja', 'vegano'],
    image: 'ensalada-algas.jpg'
  },
  {
    id: 'ensalada-2',
    name: 'Ensalada de Salmón',
    ingredients: 'Mix de lechugas, salmón, aguacate, vinagreta',
    price: 10.00,
    category: 'Ensaladas',
    allergens: ['pescado'],
    image: 'ensalada-salmon.jpg'
  },
  // Platos calientes
  {
    id: 'caliente-1',
    name: 'Gyozas de Pollo',
    ingredients: '6 empanadillas japonesas de pollo',
    price: 8.00,
    category: 'Platos calientes',
    allergens: ['gluten', 'soja', 'huevo'],
    image: 'gyozas.jpg'
  },
  {
    id: 'caliente-2',
    name: 'Yakisoba de Gambas',
    ingredients: 'Fideos salteados con gambas y verduras',
    price: 12.50,
    category: 'Platos calientes',
    allergens: ['gambas', 'mariscos', 'gluten', 'soja'],
    image: 'yakisoba.jpg'
  },
  // Combos
  {
    id: 'combo-1',
    name: 'Combo Sushi Box',
    ingredients: '20 piezas: maki, uramaki, nigiri variados',
    price: 28.00,
    category: 'Combos',
    allergens: ['pescado', 'gluten', 'soja', 'sesamo'],
    image: 'combo-box.jpg'
  },
  {
    id: 'combo-2',
    name: 'Combo Premium',
    ingredients: '30 piezas: sashimi, nigiri, uramaki premium',
    price: 42.00,
    category: 'Combos',
    allergens: ['pescado', 'mariscos', 'gluten', 'soja', 'sesamo', 'lactosa'],
    image: 'combo-premium.jpg'
  },
  {
    id: 'combo-3',
    name: 'Combo Vegano',
    ingredients: '18 piezas: maki y uramaki vegetales',
    price: 20.00,
    category: 'Combos',
    allergens: ['vegano', 'gluten', 'soja', 'sesamo'],
    image: 'combo-vegano.jpg'
  }
];
