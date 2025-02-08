import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { id: 1, icon: <FaFacebook size={24} />, link: "https://facebook.com" },
    { id: 2, icon: <FaTwitter size={24} />, link: "https://twitter.com" },
    { id: 3, icon: <FaLinkedin size={24} />, link: "https://linkedin.com" },
    { id: 4, icon: <FaGithub size={24} />, link: "https://github.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold">IT Company</h2>
        <p className="text-gray-400 mt-2">Providing top-notch IT solutions for businesses worldwide.</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          {socialLinks.map(({ id, icon, link }) => (
            <motion.a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className="text-gray-400 hover:text-blue-500"
            >
              {icon}
            </motion.a>
          ))}
        </div>

        <p className="text-gray-500 mt-4">© 2025 IT Company. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
