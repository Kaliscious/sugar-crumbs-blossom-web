
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      
      {/* Founder's Story */}
      <section className="py-16 bg-bakery-cream/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-bakery-brown">Meet the Baker</h2>
            <div className="h-0.5 w-20 bg-bakery-gold mx-auto mt-4 mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-bakery-gold/30 rounded-full"></div>
              <div className="relative rounded-lg overflow-hidden shadow-lg fancy-border">
                {/* Replace with your personal photo */}
                <img 
                  src="/founder-placeholder.jpg" 
                  alt="Sugar & Crumbs Founder" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-bakery-gold/30 rounded-full"></div>
            </div>
            
            <div className="md:pl-6">
              <h3 className="font-playfair text-2xl text-bakery-brown mb-3">My Baking Journey</h3>
              <p className="text-bakery-brown mb-4 leading-relaxed">
                My passion for baking began in my grandmother's kitchen, where I learned that the secret ingredient 
                to any recipe is love. With every sunrise, I would wake up to the scent of freshly baked bread and 
                cinnamon rolls wafting through our home.
              </p>
              <p className="text-bakery-brown mb-4 leading-relaxed">
                I founded Sugar & Crumbs with a simple dream – to create a haven where time slows down, where each 
                pastry tells a story, and where memories are baked into every creation. My philosophy is that desserts 
                aren't just treats; they're vessels of joy, celebration, and comfort.
              </p>
              <p className="font-playfair italic text-bakery-gold">
                "Baking is my love language, and Sugar & Crumbs is my love letter to the world."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Layout;
