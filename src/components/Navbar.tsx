
import { Link } from "react-router-dom";
import { CakeSlice, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm border-b border-bakery-pink border-opacity-30 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <CakeSlice className="h-6 w-6 text-bakery-gold" />
          <span className="font-playfair text-xl font-medium italic tracking-wider text-bakery-brown">
            Sugar <span className="text-bakery-gold">&</span> Crumbs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Our Sweets</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-bakery-brown" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-3 items-center">
            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/menu" onClick={toggleMenu}>Our Sweets</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <Link
      to={to}
      className="font-playfair text-bakery-brown hover:text-bakery-gold transition-colors duration-200 text-base tracking-wide relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-bakery-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
