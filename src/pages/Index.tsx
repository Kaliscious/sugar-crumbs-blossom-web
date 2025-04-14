
import { Link } from "react-router-dom";
import { CakeSlice, Star, ChevronRight } from "lucide-react";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-bakery-rose/20">
          <img 
            src="/hero-bakery.jpg" 
            alt="Sugar & Crumbs Bakery" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bakery-pink/20 via-transparent to-bakery-cream/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-medium text-bakery-brown mb-4 animate-fade-in">
            Sugar <span className="text-bakery-gold">&</span> Crumbs
          </h1>
          <div className="flex justify-center items-center my-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-0.5 w-16 bg-bakery-gold opacity-60"></div>
            <Star className="mx-3 text-bakery-gold h-4 w-4" />
            <div className="h-0.5 w-16 bg-bakery-gold opacity-60"></div>
          </div>
          <p className="font-playfair italic text-lg md:text-xl text-bakery-brown max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Where sweetness blooms in every bite
          </p>
          <div className="mt-8 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/menu" 
              className="bg-white bg-opacity-80 backdrop-blur-sm text-bakery-brown border border-bakery-gold/40 hover:border-bakery-gold rounded-full py-2 px-6 inline-flex items-center transition duration-300 hover:bg-bakery-gold/10"
            >
              View Our Sweets <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-bakery-gold/30 rounded-full"></div>
              <img 
                src="/feature-cake.jpg" 
                alt="Exquisite cake" 
                className="w-full rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-bakery-gold/30 rounded-full"></div>
            </div>

            <div className="md:pl-6">
              <h2 className="font-playfair text-3xl md:text-4xl text-bakery-brown mb-4">A Little Sweet Story</h2>
              <div className="h-0.5 w-16 bg-bakery-gold mb-6"></div>
              <p className="text-bakery-brown mb-6 leading-relaxed">
                In a corner of Sweet Valley, where the morning light filters through lace curtains and the air is forever 
                scented with vanilla and cinnamon, Sugar & Crumbs opened its doors. Our little bakery was born from a 
                deep love for creating moments of joy through the art of pastry.
              </p>
              <p className="text-bakery-brown mb-6 leading-relaxed">
                Each recipe carries a story, a memory, a celebration. From delicate macarons that melt like whispers 
                to cakes adorned with edible flowers that seem to have been plucked from an enchanted garden, our 
                creations are made with the belief that desserts are poetry for the senses.
              </p>
              <div className="flex items-center">
                <CakeSlice className="h-5 w-5 text-bakery-gold mr-2" />
                <span className="font-playfair italic text-bakery-brown">Crafted with love since 2018</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white bg-opacity-60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-bakery-brown">Our Signature Sweets</h2>
            <div className="flex justify-center items-center my-4">
              <div className="h-0.5 w-12 bg-bakery-gold opacity-60"></div>
              <Star className="mx-3 text-bakery-gold h-4 w-4" />
              <div className="h-0.5 w-12 bg-bakery-gold opacity-60"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bakery-card fancy-border">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-bakery-brown/20"></div>
                <img 
                  src="/macaron.jpg" 
                  alt="Rose Petal Macarons"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-bakery-gold bg-opacity-80 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-full">
                  Bestseller
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl text-bakery-brown mb-2">Rose Petal Macarons</h3>
                <p className="text-sm text-bakery-brown/80 mb-3">Delicate almond cookies infused with rose essence and filled with rose-scented buttercream</p>
                <div className="flex justify-between items-center">
                  <span className="font-playfair text-bakery-gold font-medium">$3.95</span>
                  <Link 
                    to="/menu" 
                    className="text-sm text-bakery-brown hover:text-bakery-gold transition-colors duration-200 flex items-center"
                  >
                    See more <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bakery-card fancy-border">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-bakery-brown/20"></div>
                <img 
                  src="/cherry-tart.jpg" 
                  alt="Cherry Blossom Tart"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-bakery-gold bg-opacity-80 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-full">
                  Seasonal
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl text-bakery-brown mb-2">Cherry Blossom Tart</h3>
                <p className="text-sm text-bakery-brown/80 mb-3">Vanilla custard tart topped with sakura-infused cream and preserved cherry blossoms</p>
                <div className="flex justify-between items-center">
                  <span className="font-playfair text-bakery-gold font-medium">$6.25</span>
                  <Link 
                    to="/menu" 
                    className="text-sm text-bakery-brown hover:text-bakery-gold transition-colors duration-200 flex items-center"
                  >
                    See more <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bakery-card">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-bakery-brown/20"></div>
                <img 
                  src="/lavender-cake.jpg" 
                  alt="Lavender Honey Cake"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl text-bakery-brown mb-2">Lavender Honey Cake</h3>
                <p className="text-sm text-bakery-brown/80 mb-3">Light chiffon cake with layers of lavender-infused cream and a honey glaze</p>
                <div className="flex justify-between items-center">
                  <span className="font-playfair text-bakery-gold font-medium">$5.75</span>
                  <Link 
                    to="/menu" 
                    className="text-sm text-bakery-brown hover:text-bakery-gold transition-colors duration-200 flex items-center"
                  >
                    See more <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/menu" 
              className="inline-flex items-center font-playfair text-bakery-brown hover:text-bakery-gold transition-colors duration-200"
            >
              View All Sweets <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
