import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Stay Updated</h2>
        <p className="mt-2 text-lg">Subscribe to our newsletter for the latest IT insights.</p>
        {/* <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row justify-center">
          <input type="email" placeholder="Enter your email" className="p-3 rounded-l-lg bg-white text-gray-900 w-64" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="bg-gray-900 px-6 py-3 rounded-r-lg hover:bg-gray-800">Subscribe</button>
        </form> */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row justify-center items-center gap-2 w-full">
  <input 
    type="email" 
    placeholder="Enter your email" 
    className="p-3 rounded-lg bg-white text-gray-900 w-full md:w-64 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
    value={email} 
    onChange={(e) => setEmail(e.target.value)} 
  />
  <button 
    type="submit" 
    className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 w-full md:w-auto transition-all"
  >
    Subscribe
  </button>
</form>

      </div>
    </section>
  );
};

export default Newsletter;
