import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, Globe, Package, CheckCircle } from "lucide-react";
import shippingDeliveryImage from "@/assets/images/shipping-delivery.jpg";

const Shipping = () => {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      time: "3-7 business days",
      price: "Free on orders over $50",
      icon: Package
    },
    {
      name: "Express Shipping",
      time: "1-3 business days",
      price: "$9.99",
      icon: Truck
    },
    {
      name: "Next Day Delivery",
      time: "1 business day",
      price: "$19.99",
      icon: Clock
    },
    {
      name: "International",
      time: "7-21 business days",
      price: "Varies by location",
      icon: Globe
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>
          <img
            src={shippingDeliveryImage}
            alt="Fast and reliable delivery service"
            className="rounded-2xl shadow-lg mx-auto max-w-2xl w-full h-auto mb-6"
          />
          <p className="text-muted-foreground">Fast, reliable delivery to your doorstep</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {shippingOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{option.name}</h3>
                  <p className="text-muted-foreground mb-2">{option.time}</p>
                  <Badge variant="secondary">{option.price}</Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Shipping Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <strong className="text-primary">Processing Time:</strong>
                    <p className="text-muted-foreground">Orders are typically processed within 1-2 business days. Orders placed on weekends or holidays will be processed on the next business day.</p>
                  </div>
                  <div>
                    <strong className="text-primary">Free Shipping:</strong>
                    <p className="text-muted-foreground">We offer free standard shipping on all orders over $50 within the continental United States.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <strong className="text-primary">Tracking:</strong>
                    <p className="text-muted-foreground">Once your order ships, you'll receive a confirmation email with tracking information so you can monitor your package's progress.</p>
                  </div>
                  <div>
                    <strong className="text-primary">Address Accuracy:</strong>
                    <p className="text-muted-foreground">Please ensure your shipping address is accurate. We are not responsible for packages delivered to incorrect addresses provided by the customer.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>International Shipping</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We ship to many countries worldwide. International shipping rates and delivery times 
                vary by destination and package weight.
              </p>
              <p>
                <strong>Customs & Duties:</strong> International customers are responsible for any 
                customs duties, taxes, or fees imposed by their country's customs agency.
              </p>
              <p>
                <strong>Restricted Items:</strong> Some items may have shipping restrictions to certain 
                countries. We'll notify you during checkout if any items in your order cannot be shipped 
                to your location.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Shipping;