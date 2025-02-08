import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import  Button  from  "../ui/button";
import '../Navbar/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Portfolio", link: "/testimonials" },
    { id: 5, name: "Contact", link: "/contact" },
   
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600">
        InnoTech Systems
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
        {navLinks.map((link) => (
            <motion.li key={link.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to={link.link} className="hover:text-blue-400">{link.name}</Link>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 p-6"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.id} className="py-2">
                <Link to={link.link} className="block text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
             <li>
            <Button className="w-full bg-blue-600 text-white px-4 py-2">
              Get Started
            </Button>
          </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};
export default Navbar;
