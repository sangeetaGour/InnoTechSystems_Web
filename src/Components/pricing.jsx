const Pricing = () => {
    const plans = [
      { name: "Basic", price: "$99/month", features: ["5 Users", "10GB Storage", "Basic Support"], bgColor: "bg-gray-800" },
      { name: "Pro", price: "$199/month", features: ["50 Users", "100GB Storage", "Priority Support"], bgColor: "bg-blue-600" },
      { name: "Enterprise", price: "Custom", features: ["Unlimited Users", "1TB Storage", "24/7 Support"], bgColor: "bg-gray-800" },
    ];
  
    return (
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-500">Our Pricing Plans</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {plans.map((plan, index) => (
              <div key={index} className={`${plan.bgColor} p-6 rounded-lg shadow-lg w-64`}>
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className="text-gray-300 text-lg mt-2">{plan.price}</p>
                <ul className="mt-4 text-gray-400">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mt-2">✔ {feature}</li>
                  ))}
                </ul>
                <button className="mt-6 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;
  