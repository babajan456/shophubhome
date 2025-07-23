import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductQuickView from "@/components/ProductQuickView";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Flame, Star, Zap } from "lucide-react";
import { Product } from "@/types";

const Deals = () => {
  const [selectedDealType, setSelectedDealType] = useState<string>("all");
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

  // Generate deals from existing products
  const dealsData = useMemo(() => {
    return products.map((product, index) => {
      const discountTypes = ["flash", "daily", "clearance", "bundle"];
      const discountPercentages = [10, 15, 20, 25, 30, 40, 50];
      
      const dealType = discountTypes[index % discountTypes.length];
      const discountPercent = discountPercentages[index % discountPercentages.length];
      const originalPrice = product.price;
      const salePrice = Math.round(originalPrice * (1 - discountPercent / 100));
      
      return {
        ...product,
        dealType,
        discountPercent,
        originalPrice,
        salePrice,
        timeLeft: Math.floor(Math.random() * 24) + 1, // Hours left
        isLimitedTime: dealType === "flash",
        stockLeft: Math.floor(Math.random() * 20) + 5
      };
    }).slice(0, 12); // Show 12 deals
  }, []);

  const filteredDeals = useMemo(() => {
    if (selectedDealType === "all") return dealsData;
    return dealsData.filter(deal => deal.dealType === selectedDealType);
  }, [dealsData, selectedDealType]);

  const dealCategories = [
    { id: "all", name: "All Deals", icon: Star, color: "bg-primary" },
    { id: "flash", name: "Flash Sale", icon: Zap, color: "bg-red-500" },
    { id: "daily", name: "Daily Deal", icon: Clock, color: "bg-blue-500" },
    { id: "clearance", name: "Clearance", icon: Flame, color: "bg-orange-500" },
    { id: "bundle", name: "Bundle Deal", icon: Star, color: "bg-green-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full mb-4">
            <Flame className="w-4 h-4" />
            <span className="text-sm font-medium">Limited Time Offers</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Exclusive Deals & Offers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on our best deals! Save big on your favorite products with limited-time offers.
          </p>
        </div>

        {/* Deal Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {dealCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedDealType(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  selectedDealType === category.id
                    ? `${category.color} text-white`
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDeals.map((deal) => (
            <Card key={deal.id} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              {/* Deal Badge */}
              <div className="absolute top-2 left-2 z-10">
                <Badge 
                  className={`${
                    deal.dealType === "flash" ? "bg-red-500" :
                    deal.dealType === "daily" ? "bg-blue-500" :
                    deal.dealType === "clearance" ? "bg-orange-500" :
                    "bg-green-500"
                  } text-white`}
                >
                  {deal.discountPercent}% OFF
                </Badge>
              </div>

              {/* Time Left Badge for Flash Sales */}
              {deal.isLimitedTime && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge variant="destructive" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {deal.timeLeft}h left
                  </Badge>
                </div>
              )}

              <ProductCard product={{
                ...deal,
                price: deal.salePrice
              }} onQuickView={handleQuickView} />

              {/* Deal Info Overlay */}
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-foreground">
                      ${deal.salePrice}
                    </span>
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      ${deal.originalPrice}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {deal.stockLeft} left
                  </Badge>
                </div>
                <div className="mt-2 text-xs text-green-600 font-medium">
                  You save ${deal.originalPrice - deal.salePrice}!
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Don't Miss Out!</CardTitle>
              <CardDescription>
                These deals won't last forever. Shop now and save big on premium products.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>Flash Sales Daily</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-blue-500" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>Fast Shipping</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
      />
    </div>
  );
};

export default Deals;