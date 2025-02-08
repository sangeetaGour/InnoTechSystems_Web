import { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaUser, FaComments, FaTimes } from "react-icons/fa";

const responses = {
    hello: "Hello there! 😊 How can I assist you today?",
    hii: "Hii! 👋 How's your day going?",
    "who are you":"Hello for asking this question im a AI For helping you as a supporter",
    "how are you": "Im just a chatbot, but I'm feeling great! 🚀",
    "what is your name": "I am ChatGPT Bot, your friendly assistant! 🤖",
    "what do you do": "I provide IT solutions, answer questions, and help users interactively! 😃",
    "tell me a joke": "Why don’t programmers like nature? Because it has too many bugs! 😆",
    bye: "Goodbye! Have a fantastic day! 👋",
    thanks: "You're welcome! 😊 Anything else I can help with?",
    "who created you": "I was built by a developer just like you! 🤖",
    "what services do you provide":
      "We offer web development, app development, cloud solutions, and AI services. 🚀",
    "what technologies do you use":
      "We use React, Tailwind CSS, Node.js, Laravel, and cloud technologies like AWS & Firebase. 💻",
    "do you provide web development":
      "Yes! We build high-performance websites using modern frameworks like React and Laravel. 🚀",
    "how much do your services cost":
      "Our pricing depends on the project. Contact us for a custom quote! 📩",
    "do you provide customer support":
      "Yes, we provide 24/7 IT support for our clients. 💡",
    "do you provide mobile app development":
      "Absolutely! We develop Android and iOS apps using React Native and Flutter. 📱",
    "how can I contact you": "You can reach us via email at support@itcompany.com or visit our Contact page. 📧",
    "how does cloud computing help businesses":
      "Cloud computing increases efficiency, scalability, and security for businesses. ☁️",
    "what is artificial intelligence":
      "AI is a field of technology that enables machines to think, learn, and solve problems like humans. 🤖",
    "can you give tech support":
      "Yes, we offer tech support for website issues, app problems, and IT troubleshooting. 🛠️",
    "what programming languages do you use":
      "We work with JavaScript, Python, PHP, and more to create powerful applications. 💻",
      
    default: "I'm not sure about that. Can you rephrase? 🤔",
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to control chatbot visibility

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = responses[input.toLowerCase()] || responses.default;
      const botMessage = { role: "bot", content: botResponse };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* Chatbot Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </motion.button>

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg border border-gray-300 rounded-lg w-70 mt-2 "
        >
          <div className="bg-blue-500 text-white p-4 font-bold text-center rounded-t-lg flex justify-between ">
            Chatbot 🤖
            <button onClick={() => setIsOpen(false)} className="text-white">
              ✖
            </button>
          </div>

          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.role === "user" ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`mb-2 flex items-center ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "bot" && <FaRobot className="mr-2 text-blue-500" />}
                <p
                  className={`p-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.content}
                </p>
                {msg.role === "user" && <FaUser className="ml-2 text-gray-500" />}
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-gray-400"
              >
                Chatbot is typing...
              </motion.div>
            )}
          </div>

          <div className="flex border-t p-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="ml-2 bg-blue-500 text-white p-2 rounded-lg"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
