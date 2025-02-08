import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "John Doe", feedback: "Amazing service!", rating: 5 },
  { name: "Jane Smith", feedback: "Highly professional.", rating: 4.5 },
  { name: "Michael Brown", feedback: "Best IT solutions!", rating: 5 },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 text-center">
      <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-4xl font-bold text-blue-500">Client Testimonials</h2>
        <p className="mt-4 text-gray-300 italic">"{testimonials[index].feedback}"</p>
        <p className="mt-2 text-blue-400">{testimonials[index].name}</p>
      </motion.div>
    </section>
  );
};

export default Testimonials;
