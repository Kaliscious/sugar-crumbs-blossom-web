
import { Flower, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-70 backdrop-blur-sm border-t border-bakery-pink border-opacity-30 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-playfair text-xl font-medium italic text-bakery-brown flex items-center">
              <Flower size={18} className="mr-2 text-bakery-gold" />
              Sugar <span className="text-bakery-gold mx-1">&</span> Crumbs
            </h3>
            <p className="text-sm text-bakery-brown mt-1 font-light">Where sweetness blooms in every bite</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
            <div>
              <h4 className="font-playfair text-bakery-gold font-medium mb-2">Visit Us</h4>
              <p className="text-sm text-bakery-brown">123 Blossom Avenue</p>
              <p className="text-sm text-bakery-brown">Sweet Valley, CA 91234</p>
            </div>
            
            <div>
              <h4 className="font-playfair text-bakery-gold font-medium mb-2">Contact</h4>
              <p className="text-sm text-bakery-brown flex items-center justify-center md:justify-start">
                <Phone size={14} className="mr-2" /> (555) 123-4567
              </p>
              <p className="text-sm text-bakery-brown flex items-center justify-center md:justify-start">
                <Mail size={14} className="mr-2" /> hello@sugarandcrumbs.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-bakery-pink border-opacity-30 mt-6 pt-6 text-center">
          <p className="text-xs text-bakery-brown">&copy; {new Date().getFullYear()} Sugar & Crumbs Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
