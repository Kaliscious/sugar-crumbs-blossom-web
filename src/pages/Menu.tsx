
import { Star } from "lucide-react";
import Layout from "../components/Layout";

interface PastryItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
}

const pastries: PastryItem[] = [
  {
    id: 1,
    name: "Rose Petal Macarons",
    description: "Delicate almond cookies infused with rose essence and filled with rose-scented buttercream",
    price: "$3.95",
    image: "/macaron.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Lavender Honey Cake",
    description: "Light chiffon cake with layers of lavender-infused cream and a honey glaze",
    price: "$5.75",
    image: "/lavender-cake.jpg"
  },
  {
    id: 3,
    name: "Earl Grey Tea Cookies",
    description: "Buttery shortbread cookies with bergamot-infused Earl Grey tea leaves",
    price: "$2.50",
    image: "/earl-grey-cookies.jpg"
  },
  {
    id: 4,
    name: "Cherry Blossom Tart",
    description: "Vanilla custard tart topped with sakura-infused cream and preserved cherry blossoms",
    price: "$6.25",
    image: "/cherry-tart.jpg",
    featured: true
  },
  {
    id: 5,
    name: "Jasmine Cream Puffs",
    description: "Light and airy choux pastry filled with jasmine-infused pastry cream",
    price: "$4.50",
    image: "/cream-puff.jpg"
  },
  {
    id: 6,
    name: "Orange Blossom Madeleines",
    description: "Classic French shell-shaped sponge cakes infused with orange blossom water",
    price: "$3.25",
    image: "/madeleines.jpg"
  }
];

const Menu = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-medium text-bakery-brown">Our Sweet Creations</h1>
          <div className="flex justify-center items-center my-4">
            <div className="h-0.5 w-12 bg-bakery-gold opacity-60"></div>
            <Star className="mx-3 text-bakery-gold h-4 w-4" />
            <div className="h-0.5 w-12 bg-bakery-gold opacity-60"></div>
          </div>
          <p className="max-w-2xl mx-auto text-bakery-brown font-light italic">
            Each creation is a delicate work of art, crafted with love and the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pastries.map((pastry) => (
            <div 
              key={pastry.id} 
              className={`bakery-card group ${pastry.featured ? 'fancy-border' : ''}`}
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-bakery-brown/20"></div>
                <img 
                  src={pastry.image} 
                  alt={pastry.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                {pastry.featured && (
                  <div className="absolute top-3 right-3 bg-bakery-gold bg-opacity-80 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl text-bakery-brown mb-2">{pastry.name}</h3>
                <p className="text-sm text-bakery-brown/80 mb-3 line-clamp-2">{pastry.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-playfair text-bakery-gold font-medium">{pastry.price}</span>
                  <button className="bg-bakery-pink bg-opacity-70 hover:bg-opacity-100 text-bakery-brown/80 hover:text-bakery-brown text-sm py-1 px-3 rounded-full transition-colors duration-200">
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
