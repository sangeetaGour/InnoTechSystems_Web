const Blog = () => {
    const blogPosts = [
      { id: 1, title: "Top 10 Web Development Trends", date: "Jan 10, 2025", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 2, title: "How AI is Revolutionizing IT", date: "Feb 5, 2025", image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 3, title: "Cybersecurity Tips for Businesses", date: "Mar 1, 2025", image: "https://plus.unsplash.com/premium_photo-1701179596614-9c64f50cda76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];
  
    return (
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-500">Latest Insights</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <img src={post.image} alt={post.title} className="rounded-lg w-full" />
                <h3 className="text-2xl font-semibold mt-4">{post.title}</h3>
                <p className="text-gray-400">{post.date}</p>
                <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Blog;


  