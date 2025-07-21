import { useState } from "react";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    onQuickView?.(product);
  };

  return (
    <Card className="product-card group overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.images[currentImageIndex]}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onMouseEnter={() => {
              if (product.images.length > 1) {
                setCurrentImageIndex(1);
              }
            }}
            onMouseLeave={() => setCurrentImageIndex(0)}
          />
        </Link>
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          <Button
            size="icon"
            variant="secondary"
            className="glass-effect"
            onClick={handleQuickView}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="glass-effect"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isNew && (
            <Badge variant="secondary" className="bg-success text-success-foreground">
              New
            </Badge>
          )}
          {product.discount && (
            <Badge variant="destructive" className="bg-destructive text-destructive-foreground">
              -{product.discount}%
            </Badge>
          )}
        </div>

        {/* Wishlist */}
        <Button
          size="icon"
          variant="ghost"
          className={`absolute top-2 right-2 glass-effect ${
            isWishlisted ? "text-red-500" : ""
          }`}
          onClick={handleWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>

        {/* Image Indicators */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {product.images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          {/* Category */}
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {product.category}
          </p>

          {/* Title */}
          <Link to={`/products/${product.id}`}>
            <h3 className="font-medium text-sm line-clamp-2 hover:text-accent transition-colors">
              {product.title}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? "fill-accent text-accent"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-foreground">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center justify-between">
            <span className={`text-xs ${
              product.stock > 0 ? "text-success" : "text-destructive"
            }`}>
              {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full mt-4 btn-primary"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;