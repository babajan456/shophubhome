import { Product, Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    description: "Latest tech gadgets and electronics",
    productCount: 15,
  },
  {
    id: "2",
    name: "Clothing",
    slug: "clothing",
    description: "Fashion and apparel for all",
    productCount: 25,
  },
  {
    id: "3",
    name: "Home & Garden",
    slug: "home-garden",
    description: "Everything for your home",
    productCount: 18,
  },
  {
    id: "4",
    name: "Sports & Outdoors",
    slug: "sports-outdoors",
    description: "Gear for active lifestyle",
    productCount: 12,
  },
  {
    id: "5",
    name: "Books & Media",
    slug: "books-media",
    description: "Books, movies, and more",
    productCount: 8,
  },
];

export const products: Product[] = [
  {
    id: "1",
    title: "Wireless Bluetooth Headphones",
    description: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    rating: 4.8,
    reviewCount: 156,
    stock: 12,
    isNew: true,
    isFeatured: true,
    tags: ["wireless", "audio", "noise-cancelling"],
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g",
      "Color": "Midnight Black"
    }
  },
  {
    id: "2",
    title: "Organic Cotton T-Shirt",
    description: "Soft, comfortable organic cotton t-shirt in various colors and sizes.",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=500&h=500&fit=crop"
    ],
    category: "Clothing",
    rating: 4.5,
    reviewCount: 89,
    stock: 25,
    tags: ["organic", "cotton", "casual"],
    specifications: {
      "Material": "100% Organic Cotton",
      "Fit": "Regular",
      "Care": "Machine washable",
      "Origin": "Ethically sourced"
    }
  },
  {
    id: "3",
    title: "Smart Home Security Camera",
    description: "HD security camera with night vision, motion detection, and smartphone app integration.",
    price: 149.99,
    originalPrice: 179.99,
    discount: 17,
    images: [
      "https://images.unsplash.com/photo-1558618666-fbd2c20cd3ac?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    rating: 4.6,
    reviewCount: 234,
    stock: 8,
    isFeatured: true,
    tags: ["smart-home", "security", "HD"],
    specifications: {
      "Resolution": "1080p HD",
      "Night Vision": "Up to 30ft",
      "Storage": "Cloud & Local",
      "App": "iOS & Android"
    }
  },
  {
    id: "4",
    title: "Yoga Exercise Mat",
    description: "Non-slip yoga mat perfect for home workouts and studio classes.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.7,
    reviewCount: 167,
    stock: 15,
    tags: ["yoga", "fitness", "non-slip"],
    specifications: {
      "Material": "TPE Foam",
      "Thickness": "6mm",
      "Size": "183cm x 61cm",
      "Weight": "1.2kg"
    }
  },
  {
    id: "5",
    title: "Coffee Table Book Collection",
    description: "Beautiful collection of photography and art books perfect for any coffee table.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop"
    ],
    category: "Books & Media",
    rating: 4.4,
    reviewCount: 45,
    stock: 6,
    tags: ["books", "photography", "art"],
    specifications: {
      "Pages": "300+ each",
      "Format": "Hardcover",
      "Language": "English",
      "Publisher": "Premium Arts"
    }
  },
  {
    id: "6",
    title: "Minimalist Desk Lamp",
    description: "Modern LED desk lamp with adjustable brightness and USB charging port.",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
    ],
    category: "Home & Garden",
    rating: 4.5,
    reviewCount: 112,
    stock: 18,
    isNew: true,
    tags: ["LED", "desk", "USB", "modern"],
    specifications: {
      "Power": "12W LED",
      "Brightness": "3 levels",
      "USB Port": "2.1A output",
      "Material": "Aluminum"
    }
  },
  {
    id: "7",
    title: "Premium Running Shoes",
    description: "Lightweight running shoes with advanced cushioning technology.",
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.8,
    reviewCount: 203,
    stock: 22,
    isFeatured: true,
    tags: ["running", "lightweight", "cushioning"],
    specifications: {
      "Weight": "280g",
      "Drop": "10mm",
      "Upper": "Breathable mesh",
      "Sole": "Rubber compound"
    }
  },
  {
    id: "8",
    title: "Ceramic Plant Pot Set",
    description: "Set of 3 modern ceramic plant pots in different sizes with drainage holes.",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop"
    ],
    category: "Home & Garden",
    rating: 4.3,
    reviewCount: 78,
    stock: 14,
    tags: ["ceramic", "plants", "decor", "set"],
    specifications: {
      "Material": "Ceramic",
      "Sizes": "Small, Medium, Large",
      "Drainage": "Yes",
      "Color": "Matte White"
    }
  },
  {
    id: "9",
    title: "MacBook Air M2",
    description: "Apple MacBook Air with M2 chip, 13.6-inch Liquid Retina display, 8GB RAM, 256GB SSD.",
    price: 1199.99,
    originalPrice: 1299.99,
    discount: 8,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    rating: 4.9,
    reviewCount: 342,
    stock: 5,
    isFeatured: true,
    tags: ["apple", "laptop", "m2", "lightweight"],
    specifications: {
      "Processor": "Apple M2 8-core",
      "Memory": "8GB unified",
      "Storage": "256GB SSD",
      "Display": "13.6\" Liquid Retina"
    }
  },
  {
    id: "10",
    title: "iPhone 15 Pro",
    description: "Latest iPhone with titanium design, A17 Pro chip, and advanced camera system.",
    price: 999.99,
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    rating: 4.8,
    reviewCount: 567,
    stock: 18,
    isNew: true,
    isFeatured: true,
    tags: ["apple", "smartphone", "titanium", "camera"],
    specifications: {
      "Processor": "A17 Pro",
      "Storage": "128GB",
      "Camera": "48MP main",
      "Display": "6.1\" Super Retina XDR"
    }
  },
  {
    id: "11",
    title: "Designer Leather Jacket",
    description: "Premium genuine leather jacket with classic design and superior craftsmanship.",
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop"
    ],
    category: "Clothing",
    rating: 4.6,
    reviewCount: 134,
    stock: 8,
    tags: ["leather", "jacket", "premium", "classic"],
    specifications: {
      "Material": "100% Genuine Leather",
      "Lining": "Polyester",
      "Fit": "Slim fit",
      "Care": "Professional cleaning"
    }
  },
  {
    id: "12",
    title: "Luxury Watch Collection",
    description: "Swiss-made automatic watch with sapphire crystal and leather strap.",
    price: 1899.99,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&h=500&fit=crop"
    ],
    category: "Clothing",
    rating: 4.9,
    reviewCount: 89,
    stock: 3,
    isFeatured: true,
    tags: ["luxury", "watch", "swiss", "automatic"],
    specifications: {
      "Movement": "Swiss automatic",
      "Case": "Stainless steel",
      "Crystal": "Sapphire",
      "Water Resistance": "100m"
    }
  },
  {
    id: "13",
    title: "Gaming Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with Cherry MX switches for ultimate gaming experience.",
    price: 149.99,
    originalPrice: 189.99,
    discount: 21,
    images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    rating: 4.7,
    reviewCount: 298,
    stock: 15,
    isNew: true,
    tags: ["gaming", "mechanical", "rgb", "keyboard"],
    specifications: {
      "Switches": "Cherry MX Red",
      "Backlighting": "RGB",
      "Layout": "Full-size",
      "Connection": "USB-C"
    }
  },
  {
    id: "14",
    title: "Professional Camera Lens",
    description: "85mm f/1.4 portrait lens with exceptional optical quality and beautiful bokeh.",
    price: 799.99,
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    rating: 4.8,
    reviewCount: 145,
    stock: 7,
    tags: ["photography", "lens", "portrait", "professional"],
    specifications: {
      "Focal Length": "85mm",
      "Max Aperture": "f/1.4",
      "Mount": "Canon EF",
      "Weight": "950g"
    }
  },
  {
    id: "15",
    title: "Scandinavian Dining Chair",
    description: "Elegant wooden dining chair with comfortable cushion and modern Scandinavian design.",
    price: 189.99,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=500&h=500&fit=crop"
    ],
    category: "Home & Garden",
    rating: 4.5,
    reviewCount: 167,
    stock: 12,
    tags: ["furniture", "chair", "scandinavian", "wooden"],
    specifications: {
      "Material": "Solid oak wood",
      "Cushion": "High-density foam",
      "Dimensions": "45×52×78cm",
      "Weight": "6.5kg"
    }
  },
  {
    id: "16",
    title: "Wireless Gaming Mouse",
    description: "High-precision wireless gaming mouse with customizable DPI and RGB lighting.",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    rating: 4.6,
    reviewCount: 223,
    stock: 20,
    tags: ["gaming", "mouse", "wireless", "rgb"],
    specifications: {
      "DPI": "Up to 25,600",
      "Battery": "70-hour life",
      "Connection": "2.4GHz wireless",
      "Buttons": "8 programmable"
    }
  },
  {
    id: "17",
    title: "Artisan Coffee Beans",
    description: "Single-origin premium coffee beans roasted to perfection for the ultimate coffee experience.",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop"
    ],
    category: "Books & Media",
    rating: 4.7,
    reviewCount: 156,
    stock: 35,
    isNew: true,
    tags: ["coffee", "artisan", "single-origin", "premium"],
    specifications: {
      "Origin": "Ethiopia",
      "Roast": "Medium",
      "Weight": "500g",
      "Process": "Washed"
    }
  },
  {
    id: "18",
    title: "Professional Tennis Racket",
    description: "Carbon fiber tennis racket used by professionals, perfect balance of power and control.",
    price: 259.99,
    originalPrice: 319.99,
    discount: 19,
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.8,
    reviewCount: 187,
    stock: 9,
    isFeatured: true,
    tags: ["tennis", "professional", "carbon-fiber", "sports"],
    specifications: {
      "Weight": "300g",
      "Head Size": "100 sq in",
      "String Pattern": "16x19",
      "Balance": "320mm"
    }
  },
  {
    id: "19",
    title: "Smart Fitness Tracker",
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life.",
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.5,
    reviewCount: 312,
    stock: 25,
    isNew: true,
    tags: ["fitness", "tracker", "smartwatch", "health"],
    specifications: {
      "Battery": "7 days",
      "Display": "1.4\" AMOLED",
      "GPS": "Built-in",
      "Water Resistance": "5ATM"
    }
  },
  {
    id: "20",
    title: "Vintage Vinyl Record Player",
    description: "Classic turntable with modern features, perfect for vinyl enthusiasts and audiophiles.",
    price: 349.99,
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop"
    ],
    category: "Books & Media",
    rating: 4.6,
    reviewCount: 98,
    stock: 6,
    tags: ["vinyl", "turntable", "vintage", "audiophile"],
    specifications: {
      "Speeds": "33⅓ & 45 RPM",
      "Drive": "Belt drive",
      "Cartridge": "Pre-installed",
      "Output": "Line & Phono"
    }
  }
];

export const featuredProducts = products.filter(product => product.isFeatured);
export const newProducts = products.filter(product => product.isNew);
export const saleProducts = products.filter(product => product.discount && product.discount > 0);