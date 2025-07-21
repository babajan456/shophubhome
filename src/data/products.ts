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
  }
];

export const featuredProducts = products.filter(product => product.isFeatured);
export const newProducts = products.filter(product => product.isNew);
export const saleProducts = products.filter(product => product.discount && product.discount > 0);