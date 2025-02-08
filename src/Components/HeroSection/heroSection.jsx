import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold leading-tight mt-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Businesses with Cutting-Edge Technology 🚀
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg text-gray-300 ml-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We provide innovative IT solutions to help businesses scale and thrive in the digital age.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="mt-6 flex justify-center md:justify-start space-x-4 ml-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a href="/get-started" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg">
              Get Started
            </a>
            <a href="/contact" className="px-6 py-3 border border-gray-400 hover:border-white rounded-lg text-gray-300 hover:text-white">
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Right Side - Animated Image */}
        <motion.div 
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1581091870598-36ce9bad5c77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  " 
            alt="IT Solutions"
            className="w-96 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;



