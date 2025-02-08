import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  { id: 1, title: "Cloud Computing", description: "Secure and scalable cloud solutions.", image: "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "Cybersecurity", description: "Protect your business with our top-tier security solutions.", image: "https://plus.unsplash.com/premium_photo-1701179596614-9c64f50cda76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "Web Development", description: "Build high-performance, modern web applications.", image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "AI & Machine Learning", description: "Unlock AI-powered insights and automation.", image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [autoIndex, setAutoIndex] = useState(0);

  // Auto-change services every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoIndex((prevIndex) => (prevIndex + 1) % services.length);
      setSelectedService(services[(autoIndex + 1) % services.length]);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoIndex]);

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-500">Our Services</h2>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
          {/* Service List */}
          <div className="md:w-1/3">
            {services.map((service) => (
              <motion.button
                key={service.id}
                className={`w-full p-3 text-left rounded-lg mb-2 ${
                  selectedService.id === service.id ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300"
                }`}
                onClick={() => setSelectedService(service)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Service Details */}
          <motion.div
            className="md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg"
            key={selectedService.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">{selectedService.title}</h3>
            <p className="text-gray-300 mt-2">{selectedService.description}</p>
            <motion.img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-96 mt-4 rounded-lg flex m-auto "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
