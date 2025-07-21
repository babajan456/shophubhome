import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield, Headphones, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { featuredProducts, newProducts, saleProducts, categories } from "@/data/products";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Shipping",
      description: "On orders over $50"
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
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              ✨ New Collection Available
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-up">
              Discover Your Perfect
              <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                Shopping Experience
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '0.1s'}}>
              Shop premium products with confidence. From electronics to fashion, we have everything you need with fast delivery and exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{animationDelay: '0.2s'}}>
              <Link to="/products">
                <Button size="lg" className="btn-accent text-lg px-8 py-3">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                View Collections
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-3xl animate-bounce-subtle"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-bounce-subtle" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-16 surface-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-accent">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of categories and find exactly what you're looking for
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products?category=${category.slug}`}
                className="group"
              >
                <Card className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-2xl text-white font-bold">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {category.productCount} items
                    </p>
                  </CardContent>
                </Card>
              </Link>
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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-destructive to-red-600 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <Badge className="mb-4 bg-white text-destructive">Limited Time</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Up to 50% Off Sale
              </h2>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Don't miss out on incredible deals across all categories. Limited stock available!
              </p>
              <Link to="/products?sale=true">
                <Button size="lg" className="bg-white text-destructive hover:bg-gray-100">
                  Shop Sale Items <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
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
              <ProductCard key={product.id} product={product} />
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
              <Button className="btn-primary px-8">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;