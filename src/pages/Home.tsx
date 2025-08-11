import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield, Headphones, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import ProductQuickView from "@/components/ProductQuickView";
import { Scene3D } from "@/components/3d/Scene3D";
import { FloatingShapes } from "@/components/3d/Shapes3D";
import { Hero3D } from "@/components/3d/Hero3D";
import { CategoryIcons3D } from "@/components/3d/CategoryIcons3D";
import { useThreeD } from "@/context/ThreeDContext";
import { featuredProducts, newProducts, saleProducts } from "@/data/products";
import { Product } from "@/types";

const Home = () => {
  const { threeDEnabled } = useThreeD();
  
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Shipping",
      description: "FREE SHIPPING ON ALL PRODUCT"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Payment",
      description: "SSL encrypted checkout"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Customer service"
    },
    {
      icon: <RotateCcw className="h-6 w-6" />,
      title: "Easy Returns",
      description: "30-day return policy"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 3D Hero Section */}
      <section className="relative hero-gradient text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* 3D Background */}
        {threeDEnabled && (
          <div className="absolute inset-0">
            <Scene3D cameraPosition={[0, 0, 6]}>
              <FloatingShapes />
              <Hero3D />
            </Scene3D>
          </div>
        )}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              ✨ New Collection Available
            </Badge>
            <div className="mb-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 animate-text-glow">
                Discover Your Perfect
              </h1>
              <span className="block text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent animate-gradient-shift">
                Shopping Experience
              </span>
            </div>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up backdrop-blur-sm bg-black/20 rounded-lg p-4" style={{animationDelay: '0.1s'}}>
              Shop premium products with confidence. From electronics to fashion, we have everything you need with fast delivery and exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{animationDelay: '0.2s'}}>
              <Link to="/products">
                <Button size="lg" className="btn-accent text-lg px-8 py-3 backdrop-blur-sm">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary backdrop-blur-sm">
                View Collections
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Features Section */}
      <section className="py-16 surface-gradient relative overflow-hidden">
        {/* 3D Background for features */}
        {threeDEnabled && (
          <div className="absolute inset-0 opacity-30">
            <Scene3D cameraPosition={[0, 0, 10]} enableControls={false}>
              <CategoryIcons3D />
            </Scene3D>
          </div>
        )}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation" style={{ '--stagger-delay': '0.15s' } as React.CSSProperties}>
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300 backdrop-blur-sm bg-white/90 hover:bg-white/95 hover-lift hover-glow animate-fade-in-up group"
                style={{ '--index': index } as React.CSSProperties}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-accent group-hover:animate-pulse-3d group-hover:bg-accent/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:animate-text-glow">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Featured Products */}
      <section className="py-16 surface-gradient">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Handpicked favorites from our collection</p>
            </div>
            <Link to="/products?featured=true">
              <Button variant="outline" className="btn-outline">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
            ))}
          </div>
        </div>
      </section>

      {/* 3D Sale Banner */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-r from-destructive to-red-600 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden backdrop-blur-sm">
            {/* 3D Background for sale section */}
            {threeDEnabled && (
              <div className="absolute inset-0 opacity-20">
                <Scene3D cameraPosition={[0, 0, 8]}>
                  <FloatingShapes />
                </Scene3D>
              </div>
            )}
            
            <div className="relative z-10">
              <Badge className="mb-4 bg-white text-destructive backdrop-blur-sm">Limited Time</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Up to 50% Off Sale
              </h2>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Don't miss out on incredible deals across all categories. Limited stock available!
              </p>
              <Link to="/products?sale=true">
                <Button size="lg" className="bg-white text-destructive hover:bg-gray-100 backdrop-blur-sm btn-3d animate-pulse-3d hover-glow">
                  Shop Sale Items <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">New Arrivals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be the first to discover our latest products and trending items
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 surface-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new products, exclusive offers, and special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="btn-primary px-8 btn-3d animate-glow-pulse hover-glow">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
      />
    </div>
  );
};

export default Home;