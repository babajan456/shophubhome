import { Product, Category } from "@/types";

// Import local images
import headphones1 from "@/assets/images/headphones-1.jpg";
import headphones2 from "@/assets/images/headphones-2.jpg";
import laptop1 from "@/assets/images/laptop-1.jpg";
import laptop2 from "@/assets/images/laptop-2.jpg";
import securityCamera from "@/assets/images/security-camera.jpg";
import tablet from "@/assets/images/tablet.jpg";
import laptopDesk from "@/assets/images/laptop-desk.jpg";
import watch from "@/assets/images/watch.jpg";
import sneakers1 from "@/assets/images/sneakers-1.jpg";
import sneakers2 from "@/assets/images/sneakers-2.jpg";
import camera from "@/assets/images/camera.jpg";
import macbook1 from "@/assets/images/macbook-1.jpg";
import macbook2 from "@/assets/images/macbook-2.jpg";
import programmingMonitor from "@/assets/images/programming-monitor.jpg";
import colorfulCode from "@/assets/images/colorful-code.jpg";
import macbookCode from "@/assets/images/macbook-code.jpg";
import circuitBoard from "@/assets/images/circuit-board.jpg";
import laptopGray from "@/assets/images/laptop-gray.jpg";
import leatherJacket1 from "@/assets/images/leather-jacket-1.jpg";
import leatherJacket2 from "@/assets/images/leather-jacket-2.jpg";
import luxuryWatch1 from "@/assets/images/luxury-watch-1.jpg";
import luxuryWatch2 from "@/assets/images/luxury-watch-2.jpg";
import gamingKeyboard from "@/assets/images/gaming-keyboard.jpg";
import cameraLens from "@/assets/images/camera-lens.jpg";
import diningChair1 from "@/assets/images/dining-chair-1.jpg";
import diningChair2 from "@/assets/images/dining-chair-2.jpg";
import gamingMouse from "@/assets/images/gaming-mouse.jpg";
import coffeeBeans from "@/assets/images/coffee-beans.jpg";
import tennisRacket from "@/assets/images/tennis-racket.jpg";
import fitnessTracker from "@/assets/images/fitness-tracker.jpg";
import vinylPlayer from "@/assets/images/vinyl-player.jpg";

// Additional product images
import headphonesPremium from "@/assets/images/headphones-premium.jpg";
import deskSetup from "@/assets/images/desk-setup.jpg";
import monitor4k from "@/assets/images/monitor-4k.jpg";
import headphonesGaming from "@/assets/images/headphones-gaming.jpg";
import sneakersWhite from "@/assets/images/sneakers-white.jpg";
import dressCasual from "@/assets/images/dress-casual.jpg";
import hoodieGray from "@/assets/images/hoodie-gray.jpg";
import jeansDenim from "@/assets/images/jeans-denim.jpg";
import sofaGray from "@/assets/images/sofa-gray.jpg";
import kitchenUtensils from "@/assets/images/kitchen-utensils.jpg";
import chairWooden from "@/assets/images/chair-wooden.jpg";
import basketball from "@/assets/images/basketball.jpg";
import yogaBlocks from "@/assets/images/yoga-blocks.jpg";
import weightsSet from "@/assets/images/weights-set.jpg";
import bookNovel from "@/assets/images/book-novel.jpg";
import booksStack from "@/assets/images/books-stack.jpg";
import cookbook from "@/assets/images/cookbook.jpg";
import bookEducation from "@/assets/images/book-education.jpg";
import tabletPro from "@/assets/images/tablet-pro.jpg";
import monitorCoding from "@/assets/images/monitor-coding.jpg";
import motherboard from "@/assets/images/motherboard.jpg";
import laptopGaming from "@/assets/images/laptop-gaming.jpg";

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
      headphones1,
      headphones2
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
      laptop1,
      laptop2
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
      camera
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
      tablet
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
      laptopDesk
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
      watch
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
      sneakers1,
      sneakers2
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
      camera
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
      macbook1,
      macbook2
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
    title: "Security Camera",
    description: "Professional HD security camera with night vision, motion detection, and weatherproof design for home and business surveillance.",
    price: 149.99,
    images: [
      securityCamera,
      circuitBoard
    ],
    category: "Electronics",
    rating: 4.6,
    reviewCount: 234,
    stock: 25,
    isNew: true,
    isFeatured: true,
    tags: ["security", "surveillance", "camera", "hd", "night-vision"],
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
      leatherJacket1,
      leatherJacket2
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
      luxuryWatch1,
      luxuryWatch2
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
      gamingKeyboard
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
      cameraLens
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
      diningChair1,
      diningChair2
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
      gamingMouse
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
      coffeeBeans
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
      tennisRacket
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
      fitnessTracker
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
      vinylPlayer
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
  },
  {
    id: "21",
    title: "Premium Gaming Headphones",
    description: "Professional gaming headset with 7.1 surround sound and noise-cancelling microphone.",
    price: 179.99,
    originalPrice: 219.99,
    discount: 18,
    images: [
      headphonesGaming
    ],
    category: "Electronics",
    rating: 4.7,
    reviewCount: 324,
    stock: 16,
    isNew: true,
    tags: ["gaming", "headset", "surround-sound", "microphone"],
    specifications: {
      "Audio": "7.1 Surround Sound",
      "Microphone": "Noise-cancelling",
      "Connection": "USB & 3.5mm",
      "Weight": "320g"
    }
  },
  {
    id: "22",
    title: "4K Gaming Monitor",
    description: "27-inch 4K monitor with 144Hz refresh rate and HDR support for immersive gaming.",
    price: 599.99,
    originalPrice: 699.99,
    discount: 14,
    images: [
      monitor4k
    ],
    category: "Electronics",
    rating: 4.8,
    reviewCount: 198,
    stock: 9,
    isFeatured: true,
    tags: ["monitor", "4k", "gaming", "hdr"],
    specifications: {
      "Resolution": "3840x2160",
      "Refresh Rate": "144Hz",
      "Panel Type": "IPS",
      "HDR": "HDR10"
    }
  },
  {
    id: "23",
    title: "Gaming Laptop RTX 4070",
    description: "High-performance gaming laptop with RTX 4070, 16GB RAM, and 1TB SSD.",
    price: 1899.99,
    images: [
      laptopGaming
    ],
    category: "Electronics",
    rating: 4.9,
    reviewCount: 267,
    stock: 4,
    isFeatured: true,
    tags: ["gaming", "laptop", "rtx", "high-performance"],
    specifications: {
      "GPU": "RTX 4070",
      "RAM": "16GB DDR5",
      "Storage": "1TB NVMe SSD",
      "Display": "15.6\" 165Hz"
    }
  },
  {
    id: "24",
    title: "iPad Pro 12.9",
    description: "Apple iPad Pro with M2 chip, 12.9-inch Liquid Retina XDR display, and Apple Pencil support.",
    price: 1099.99,
    images: [
      tabletPro
    ],
    category: "Electronics",
    rating: 4.8,
    reviewCount: 445,
    stock: 11,
    isNew: true,
    tags: ["apple", "tablet", "m2", "pro"],
    specifications: {
      "Processor": "Apple M2",
      "Display": "12.9\" Liquid Retina XDR",
      "Storage": "256GB",
      "Support": "Apple Pencil 2nd gen"
    }
  },
  {
    id: "25",
    title: "Motherboard Z790",
    description: "High-end motherboard with DDR5 support, Wi-Fi 6E, and multiple PCIe slots.",
    price: 449.99,
    images: [
      motherboard
    ],
    category: "Electronics",
    rating: 4.6,
    reviewCount: 156,
    stock: 7,
    tags: ["motherboard", "ddr5", "wifi6e", "gaming"],
    specifications: {
      "Socket": "LGA 1700",
      "RAM Support": "DDR5-5600",
      "Wi-Fi": "Wi-Fi 6E",
      "Form Factor": "ATX"
    }
  },
  {
    id: "26",
    title: "White Athletic Sneakers",
    description: "Classic white sneakers with comfortable cushioning and breathable material.",
    price: 89.99,
    originalPrice: 109.99,
    discount: 18,
    images: [
      sneakersWhite
    ],
    category: "Clothing",
    rating: 4.5,
    reviewCount: 289,
    stock: 28,
    tags: ["sneakers", "white", "athletic", "comfortable"],
    specifications: {
      "Material": "Synthetic leather",
      "Sole": "Rubber",
      "Closure": "Lace-up",
      "Weight": "320g per shoe"
    }
  },
  {
    id: "27",
    title: "Casual Summer Dress",
    description: "Light and airy summer dress perfect for casual outings and warm weather.",
    price: 69.99,
    images: [
      dressCasual
    ],
    category: "Clothing",
    rating: 4.4,
    reviewCount: 176,
    stock: 19,
    isNew: true,
    tags: ["dress", "summer", "casual", "lightweight"],
    specifications: {
      "Material": "Cotton blend",
      "Length": "Knee-length",
      "Sleeves": "Short sleeve",
      "Care": "Machine washable"
    }
  },
  {
    id: "28",
    title: "Comfortable Gray Hoodie",
    description: "Soft and warm hoodie made from premium cotton blend with kangaroo pocket.",
    price: 59.99,
    originalPrice: 74.99,
    discount: 20,
    images: [
      hoodieGray
    ],
    category: "Clothing",
    rating: 4.6,
    reviewCount: 234,
    stock: 32,
    tags: ["hoodie", "gray", "comfortable", "cotton"],
    specifications: {
      "Material": "80% Cotton, 20% Polyester",
      "Fit": "Regular",
      "Features": "Kangaroo pocket, drawstring hood",
      "Care": "Machine washable"
    }
  },
  {
    id: "29",
    title: "Classic Denim Jeans",
    description: "Timeless straight-fit jeans made from premium denim with classic five-pocket design.",
    price: 79.99,
    images: [
      jeansDenim
    ],
    category: "Clothing",
    rating: 4.5,
    reviewCount: 198,
    stock: 24,
    tags: ["jeans", "denim", "classic", "straight-fit"],
    specifications: {
      "Material": "100% Cotton denim",
      "Fit": "Straight",
      "Rise": "Mid-rise",
      "Care": "Machine washable"
    }
  },
  {
    id: "30",
    title: "Modern Gray Sofa",
    description: "Comfortable 3-seater sofa with modern design and premium upholstery.",
    price: 899.99,
    originalPrice: 1199.99,
    discount: 25,
    images: [
      sofaGray
    ],
    category: "Home & Garden",
    rating: 4.7,
    reviewCount: 145,
    stock: 6,
    isFeatured: true,
    tags: ["sofa", "modern", "3-seater", "comfortable"],
    specifications: {
      "Seating": "3 seats",
      "Material": "Fabric upholstery",
      "Dimensions": "200×85×80cm",
      "Frame": "Solid wood"
    }
  },
  {
    id: "31",
    title: "Kitchen Utensil Set",
    description: "Complete 15-piece kitchen utensil set with stainless steel and silicone construction.",
    price: 49.99,
    images: [
      kitchenUtensils
    ],
    category: "Home & Garden",
    rating: 4.4,
    reviewCount: 267,
    stock: 18,
    tags: ["kitchen", "utensils", "stainless-steel", "set"],
    specifications: {
      "Pieces": "15 utensils",
      "Material": "Stainless steel & silicone",
      "Features": "Heat resistant, dishwasher safe",
      "Includes": "Spatulas, spoons, tongs, etc."
    }
  },
  {
    id: "32",
    title: "Wooden Office Chair",
    description: "Ergonomic wooden office chair with adjustable height and comfortable cushioning.",
    price: 299.99,
    images: [
      chairWooden
    ],
    category: "Home & Garden",
    rating: 4.6,
    reviewCount: 123,
    stock: 9,
    tags: ["chair", "office", "wooden", "ergonomic"],
    specifications: {
      "Material": "Solid wood frame",
      "Cushion": "Memory foam",
      "Height": "Adjustable",
      "Weight Capacity": "120kg"
    }
  },
  {
    id: "33",
    title: "Professional Basketball",
    description: "Official size basketball made from premium composite leather for indoor and outdoor play.",
    price: 34.99,
    images: [
      basketball
    ],
    category: "Sports & Outdoors",
    rating: 4.7,
    reviewCount: 189,
    stock: 25,
    tags: ["basketball", "professional", "composite-leather", "official"],
    specifications: {
      "Size": "Official (Size 7)",
      "Material": "Composite leather",
      "Use": "Indoor/Outdoor",
      "Weight": "600g"
    }
  },
  {
    id: "34",
    title: "Yoga Block Set",
    description: "Set of 2 high-density foam yoga blocks for improved alignment and support.",
    price: 24.99,
    images: [
      yogaBlocks
    ],
    category: "Sports & Outdoors",
    rating: 4.5,
    reviewCount: 234,
    stock: 31,
    tags: ["yoga", "blocks", "foam", "support"],
    specifications: {
      "Quantity": "2 blocks",
      "Material": "High-density foam",
      "Dimensions": "23×15×10cm each",
      "Weight": "150g each"
    }
  },
  {
    id: "35",
    title: "Adjustable Dumbbell Set",
    description: "Space-saving adjustable dumbbells with weight range from 5-50 lbs per dumbbell.",
    price: 399.99,
    originalPrice: 499.99,
    discount: 20,
    images: [
      weightsSet
    ],
    category: "Sports & Outdoors",
    rating: 4.8,
    reviewCount: 167,
    stock: 8,
    isFeatured: true,
    tags: ["dumbbells", "adjustable", "weights", "fitness"],
    specifications: {
      "Weight Range": "5-50 lbs each",
      "Adjustment": "Quick-change system",
      "Material": "Cast iron with rubber coating",
      "Space": "Compact design"
    }
  },
  {
    id: "36",
    title: "Bestselling Novel",
    description: "Award-winning contemporary fiction novel that topped the bestseller lists.",
    price: 16.99,
    images: [
      bookNovel
    ],
    category: "Books & Media",
    rating: 4.6,
    reviewCount: 1247,
    stock: 45,
    isNew: true,
    tags: ["novel", "fiction", "bestseller", "award-winning"],
    specifications: {
      "Pages": "352",
      "Format": "Paperback",
      "Language": "English",
      "Genre": "Contemporary Fiction"
    }
  },
  {
    id: "37",
    title: "Classic Literature Collection",
    description: "Beautifully bound collection of 10 classic literature books in a decorative box set.",
    price: 129.99,
    images: [
      booksStack
    ],
    category: "Books & Media",
    rating: 4.8,
    reviewCount: 89,
    stock: 12,
    tags: ["classics", "literature", "collection", "hardcover"],
    specifications: {
      "Books": "10 classic titles",
      "Format": "Hardcover",
      "Box": "Decorative storage box",
      "Language": "English"
    }
  },
  {
    id: "38",
    title: "Gourmet Cookbook",
    description: "Professional cookbook with 200+ gourmet recipes from world-renowned chefs.",
    price: 39.99,
    images: [
      cookbook
    ],
    category: "Books & Media",
    rating: 4.7,
    reviewCount: 178,
    stock: 22,
    tags: ["cookbook", "gourmet", "recipes", "chefs"],
    specifications: {
      "Recipes": "200+ recipes",
      "Format": "Hardcover",
      "Pages": "480",
      "Features": "Full-color photos"
    }
  },
  {
    id: "39",
    title: "Educational Science Book",
    description: "Comprehensive science textbook covering physics, chemistry, and biology fundamentals.",
    price: 89.99,
    images: [
      bookEducation
    ],
    category: "Books & Media",
    rating: 4.5,
    reviewCount: 134,
    stock: 18,
    tags: ["education", "science", "textbook", "comprehensive"],
    specifications: {
      "Subjects": "Physics, Chemistry, Biology",
      "Format": "Hardcover",
      "Pages": "650",
      "Level": "Undergraduate"
    }
  },
  {
    id: "40",
    title: "Wireless Earbuds Pro",
    description: "Premium wireless earbuds with active noise cancellation and 8-hour battery life.",
    price: 249.99,
    originalPrice: 299.99,
    discount: 17,
    images: [
      headphonesPremium
    ],
    category: "Electronics",
    rating: 4.8,
    reviewCount: 456,
    stock: 14,
    isFeatured: true,
    tags: ["earbuds", "wireless", "noise-cancellation", "premium"],
    specifications: {
      "Battery": "8 hours + 24 hours case",
      "Noise Cancellation": "Active ANC",
      "Water Resistance": "IPX5",
      "Connectivity": "Bluetooth 5.3"
    }
  },
  {
    id: "41",
    title: "Complete Desk Setup",
    description: "All-in-one desk setup including monitor stand, keyboard tray, and cable management.",
    price: 199.99,
    images: [
      deskSetup
    ],
    category: "Home & Garden",
    rating: 4.6,
    reviewCount: 98,
    stock: 11,
    tags: ["desk", "setup", "organization", "office"],
    specifications: {
      "Includes": "Monitor stand, keyboard tray, cable management",
      "Material": "Bamboo and steel",
      "Compatibility": "Universal",
      "Assembly": "Easy assembly"
    }
  },
  {
    id: "42",
    title: "Coding Monitor 32\"",
    description: "Ultra-wide 32-inch monitor perfect for coding and productivity with USB-C connectivity.",
    price: 799.99,
    originalPrice: 899.99,
    discount: 11,
    images: [
      monitorCoding
    ],
    category: "Electronics",
    rating: 4.9,
    reviewCount: 234,
    stock: 6,
    isFeatured: true,
    tags: ["monitor", "coding", "ultrawide", "productivity"],
    specifications: {
      "Size": "32 inches",
      "Resolution": "3440x1440",
      "Connectivity": "USB-C, HDMI, DisplayPort",
      "Features": "Height adjustable, VESA mount"
    }
  },
  {
    id: "43",
    title: "Leather Messenger Bag",
    description: "Professional leather messenger bag with laptop compartment and adjustable strap.",
    price: 159.99,
    images: [
      leatherJacket1
    ],
    category: "Clothing",
    rating: 4.7,
    reviewCount: 145,
    stock: 16,
    tags: ["bag", "leather", "messenger", "professional"],
    specifications: {
      "Material": "Genuine leather",
      "Laptop Fit": "Up to 15 inches",
      "Compartments": "Multiple pockets",
      "Strap": "Adjustable shoulder strap"
    }
  },
  {
    id: "44",
    title: "Smart Watch Series 9",
    description: "Latest smartwatch with health monitoring, GPS, and 18-hour battery life.",
    price: 399.99,
    images: [
      luxuryWatch1
    ],
    category: "Electronics",
    rating: 4.8,
    reviewCount: 567,
    stock: 13,
    isNew: true,
    tags: ["smartwatch", "health", "gps", "latest"],
    specifications: {
      "Battery": "18 hours",
      "Display": "Always-on Retina",
      "Health": "Heart rate, ECG, SpO2",
      "Connectivity": "Cellular + GPS"
    }
  },
  {
    id: "45",
    title: "Mechanical Pencil Set",
    description: "Professional mechanical pencil set with different lead sizes and refills.",
    price: 29.99,
    images: [
      gamingKeyboard
    ],
    category: "Home & Garden",
    rating: 4.4,
    reviewCount: 167,
    stock: 28,
    tags: ["pencil", "mechanical", "professional", "set"],
    specifications: {
      "Lead Sizes": "0.3mm, 0.5mm, 0.7mm",
      "Refills": "Included",
      "Material": "Metal construction",
      "Use": "Drawing, writing, drafting"
    }
  },
  {
    id: "46",
    title: "Camera Gimbal Stabilizer",
    description: "3-axis gimbal stabilizer for professional video recording with smartphones and cameras.",
    price: 179.99,
    originalPrice: 219.99,
    discount: 18,
    images: [
      cameraLens
    ],
    category: "Electronics",
    rating: 4.7,
    reviewCount: 189,
    stock: 9,
    tags: ["gimbal", "stabilizer", "camera", "video"],
    specifications: {
      "Axes": "3-axis stabilization",
      "Compatibility": "Smartphones, action cameras",
      "Battery": "12 hours",
      "Weight": "850g"
    }
  },
  {
    id: "47",
    title: "Dining Table Set",
    description: "Modern dining table set with 4 chairs, perfect for small to medium dining rooms.",
    price: 599.99,
    originalPrice: 799.99,
    discount: 25,
    images: [
      diningChair1
    ],
    category: "Home & Garden",
    rating: 4.6,
    reviewCount: 123,
    stock: 5,
    isFeatured: true,
    tags: ["dining", "table", "set", "chairs"],
    specifications: {
      "Seating": "4 people",
      "Table": "120×80cm",
      "Material": "Solid wood",
      "Style": "Modern"
    }
  },
  {
    id: "48",
    title: "Gaming Chair Pro",
    description: "Ergonomic gaming chair with lumbar support, adjustable armrests, and premium materials.",
    price: 349.99,
    images: [
      chairWooden
    ],
    category: "Home & Garden",
    rating: 4.8,
    reviewCount: 289,
    stock: 12,
    tags: ["gaming", "chair", "ergonomic", "professional"],
    specifications: {
      "Material": "PU leather",
      "Support": "Lumbar support",
      "Armrests": "4D adjustable",
      "Weight Capacity": "150kg"
    }
  },
  {
    id: "49",
    title: "Hiking Backpack 40L",
    description: "Durable 40L hiking backpack with multiple compartments and weather-resistant material.",
    price: 89.99,
    images: [
      weightsSet
    ],
    category: "Sports & Outdoors",
    rating: 4.6,
    reviewCount: 234,
    stock: 17,
    tags: ["backpack", "hiking", "durable", "outdoor"],
    specifications: {
      "Capacity": "40 liters",
      "Material": "Ripstop nylon",
      "Features": "Multiple compartments, rain cover",
      "Weight": "1.2kg"
    }
  },
  {
    id: "50",
    title: "Home Theater System",
    description: "Complete 5.1 home theater system with wireless subwoofer and Bluetooth connectivity.",
    price: 699.99,
    originalPrice: 899.99,
    discount: 22,
    images: [
      vinylPlayer
    ],
    category: "Electronics",
    rating: 4.7,
    reviewCount: 178,
    stock: 8,
    isFeatured: true,
    tags: ["home-theater", "surround-sound", "wireless", "bluetooth"],
    specifications: {
      "Configuration": "5.1 surround sound",
      "Subwoofer": "Wireless",
      "Connectivity": "Bluetooth, HDMI, optical",
      "Power": "1000W total"
    }
  }
];

export const featuredProducts = products.filter(product => product.isFeatured);
export const newProducts = products.filter(product => product.isNew);
export const saleProducts = products.filter(product => product.discount && product.discount > 0);