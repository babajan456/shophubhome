import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Globe } from "lucide-react";
import aboutTeamImage from "@/assets/images/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional products and service that exceed customer expectations while building lasting relationships."
    },
    {
      icon: Heart,
      title: "Our Values", 
      description: "Quality, integrity, innovation, and customer satisfaction are at the core of everything we do."
    },
    {
      icon: Globe,
      title: "Our Vision",
      description: "To become the most trusted and preferred e-commerce destination globally, setting new standards for online shopping."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "50,000+", label: "Products Delivered" },
    { number: "99.5%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-8">About ShopHub</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <p className="text-lg text-muted-foreground">
                Welcome to ShopHub, your premier destination for quality products and exceptional shopping experiences.
              </p>
              <p className="text-muted-foreground">
                Founded with a vision to revolutionize online shopping, we are committed to providing our customers 
                with the best products, competitive prices, and outstanding customer service.
              </p>
              <p className="text-muted-foreground">
                Our team works tirelessly to curate a diverse selection of products that meet the highest standards 
                of quality and value. From electronics to fashion, home goods to specialty items, we have something 
                for everyone.
              </p>
            </div>
            <div className="relative">
              <img
                src={aboutTeamImage}
                alt="Our professional team"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Story */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ShopHub was born from a simple idea: shopping online should be as enjoyable and trustworthy as visiting your favorite local store. We noticed that while e-commerce had made shopping more convenient, it often lacked the personal touch and quality assurance that customers deserved.
              </p>
              <p>
                Our founders, with over 20 years of combined experience in retail and technology, set out to change that. They assembled a team of passionate individuals who shared the vision of creating an e-commerce platform that puts customer satisfaction first.
              </p>
              <p>
                Today, we continue to grow and evolve, always keeping our customers' needs at the heart of everything we do. From our carefully curated product selection to our responsive customer service team, every aspect of ShopHub is designed to provide you with the best possible shopping experience.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;