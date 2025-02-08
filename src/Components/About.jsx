import { motion } from "framer-motion";
import { useState } from "react";

const AboutUs = () => {
  const [open, setOpen] = useState(null);
  const [faqOpen, setFaqOpen] = useState(null);

  const milestones = [
    { year: "2015", event: "Company Founded" },
    { year: "2017", event: "Launched First SaaS Product" },
    { year: "2019", event: "Expanded to Global Markets" },
    { year: "2022", event: "Reached 1M+ Users" },
    { year: "2024", event: "Won Best IT Solutions Award" },
  ];

  const faqs = [
    { question: "What services do you offer?", answer: "We provide web development, cloud computing, cybersecurity, and AI solutions." },
    { question: "How can I contact your support?", answer: "You can reach us via email at support@company.com or call our helpline." },
    { question: "Do you work with startups?", answer: "Yes! We love working with startups and help them scale their businesses." },
  ];

  return (
    <section className="bg-gray-900 text-white py-5">
      <div className="container mx-auto px-6">

        {/* About Us Section */}
        <motion.div className="flex flex-col md:flex-row items-center mb-16 ml-4" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="About Us" className="w-96 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500" />
          <div className="md:ml-30 text-center md:text-left">
            <h2 className="text-4xl font-bold">About <span className="text-blue-500">Our Company</span></h2>
            <p className="mt-4 text-lg text-gray-300">We are a leading IT solutions provider, empowering businesses through technology.</p>
          </div>
        </motion.div>

        {/* Video Section */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-400">Watch Our Story</h3>
          <div className="mt-6 flex justify-center">
            <iframe className="w-full md:w-3/4 h-64 md:h-96 rounded-lg shadow-lg" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Company Video" allowFullScreen></iframe>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-400 text-center">Our Journey</h3>
          <div className="mt-6 border-l-4 border-blue-400 pl-6 space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
                <h4 className="text-xl font-semibold text-blue-300">{milestone.year}</h4>
                <p className="text-gray-300">{milestone.event}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-400 text-center">Frequently Asked Questions</h3>
          <div className="mt-6">
            {faqs.map((faq, index) => (
              <div key={index} className="mt-4 border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-800" onClick={() => setFaqOpen(faqOpen === index ? null : index)}>
                <h4 className="text-xl font-semibold flex justify-between">
                  {faq.question}
                  <span>{faqOpen === index ? "▲" : "▼"}</span>
                </h4>
                {faqOpen === index && <p className="mt-2 text-gray-300">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
