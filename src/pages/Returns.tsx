import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, RotateCcw } from "lucide-react";
import returnsProcessImage from "@/assets/images/returns-process.jpg";

const Returns = () => {
  const returnProcess = [
    {
      step: "1",
      title: "Check Eligibility",
      description: "Items must be returned within 30 days in original condition"
    },
    {
      step: "2", 
      title: "Request Return",
      description: "Contact customer service or use our online return form"
    },
    {
      step: "3",
      title: "Print Label",
      description: "We'll provide a prepaid return shipping label"
    },
    {
      step: "4",
      title: "Ship Item",
      description: "Package securely and ship using our provided label"
    },
    {
      step: "5",
      title: "Get Refund",
      description: "Refund processed within 5-7 business days after receipt"
    }
  ];

  const returnableItems = [
    { item: "Clothing with tags", status: "eligible", icon: CheckCircle },
    { item: "Electronics in original packaging", status: "eligible", icon: CheckCircle },
    { item: "Books in good condition", status: "eligible", icon: CheckCircle },
    { item: "Personal care items (sealed)", status: "eligible", icon: CheckCircle }
  ];

  const nonReturnableItems = [
    { item: "Used personal care items", status: "not-eligible", icon: XCircle },
    { item: "Custom or personalized items", status: "not-eligible", icon: XCircle },
    { item: "Items damaged by customer", status: "not-eligible", icon: XCircle },
    { item: "Items returned after 30 days", status: "not-eligible", icon: XCircle }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-8">Returns & Exchanges</h1>
          <img
            src={returnsProcessImage}
            alt="Easy returns process"
            className="rounded-2xl shadow-lg mx-auto max-w-2xl w-full h-auto mb-6"
          />
          <p className="text-muted-foreground">Hassle-free returns within 30 days</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Returnable Items</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {returnableItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-center space-x-3">
                      <Icon className="h-4 w-4 text-green-500" />
                      <span>{item.item}</span>
                      <Badge variant="secondary" className="text-green-700 bg-green-100">
                        Eligible
                      </Badge>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <XCircle className="h-5 w-5 text-red-500" />
                <span>Non-Returnable Items</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {nonReturnableItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-center space-x-3">
                      <Icon className="h-4 w-4 text-red-500" />
                      <span>{item.item}</span>
                      <Badge variant="secondary" className="text-red-700 bg-red-100">
                        Not Eligible
                      </Badge>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-primary" />
              Return Process
            </CardTitle>
            <p className="text-muted-foreground">Follow these simple steps to return your item</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {returnProcess.map((step, index) => (
                <div key={index} className="text-center relative">
                  {index < returnProcess.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-border"></div>
                  )}
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-3 mx-auto relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Returns;