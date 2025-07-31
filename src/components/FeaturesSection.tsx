import { Card, CardContent } from '@/components/ui/card';
import { Zap, MapPin, Heart } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Seamless Ticketing',
    description: 'Buy passes in seconds—no waiting, no confusion.',
    gradient: 'bg-gradient-primary'
  },
  {
    icon: MapPin,
    title: 'Curated Local Events',
    description: 'From iconic venues to community corners.',
    gradient: 'bg-gradient-festival'
  },
  {
    icon: Heart,
    title: 'Rooted in Culture',
    description: 'Focused exclusively on Garba, Raas, and cultural festivals.',
    gradient: 'bg-gradient-heritage'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key{' '}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of tradition and technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-cultural transform hover:-translate-y-2 animate-fade-in-delay-${index + 1}`}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;