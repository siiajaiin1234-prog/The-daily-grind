export interface BlogSection {
  heading: string;
  body: string;
  image?: {
    url: string;
    caption: string;
    alt: string;
  };
  tip?: string;
  bulletPoints?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'Brewing Guides' | 'Origins & Sourcing' | 'Barista Science' | 'Culture & Lifestyle' | 'Recipes';
  author: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
  };
  publishedDate: string;
  readTimeMinutes: number;
  featuredImage: string;
  imageAlt: string;
  tags: string[];
  tastingNotes?: string[];
  content: {
    introduction: string;
    pullQuote?: string;
    sections: BlogSection[];
    conclusion: string;
    tastingNotes?: string[];
    brewRecipe?: {
      coffeeGrams: number;
      waterGrams: number;
      ratio: string;
      tempCelsius: number;
      grindSize: string;
      brewTime: string;
      waterType?: string;
    };
  };
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Espresso' | 'Pour-Over' | 'Cold Brew' | 'Signature' | 'Bakery' | 'Whole Bean';
  description: string;
  price: number;
  notes?: string[];
  dietary?: ('Vegan' | 'Gluten-Free' | 'Dairy-Free' | 'House Special')[];
  image: string;
  roastLevel?: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  origin?: string;
}

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  customization?: {
    milk?: string;
    sweetness?: string;
    grind?: string;
  };
}
