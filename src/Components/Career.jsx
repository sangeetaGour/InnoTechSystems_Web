import { useState } from "react";

const Careers = () => {
  const jobListings = [
    { id: 1, title: "Frontend Developer", location: "Remote", type: "Full-time", description: "React & Tailwind CSS experience required." },
    { id: 2, title: "Backend Developer", location: "New York, USA", type: "Full-time", description: "PHP & Laravel experience preferred." },
    { id: 3, title: "UI/UX Designer", location: "London, UK", type: "Part-time", description: "Adobe XD & Figma expertise needed." },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", resume: "" });

  const handleApply = (job) => setSelectedJob(job);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-500">Join Our Team</h2>

        {/* Job Listings */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((job) => (
            <div key={job.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-gray-400">{job.location} • {job.type}</p>
              <p className="text-gray-300 mt-2">{job.description}</p>
              <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600" onClick={() => handleApply(job)}>Apply</button>
            </div>
          ))}
        </div>

        {/* Job Application Form */}
        {selectedJob && (
          <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Apply for {selectedJob.title}</h3>
            <form className="mt-4">
              <input type="text" name="name" placeholder="Your Name" className="w-full p-2 rounded bg-gray-700 text-white mb-2" onChange={handleChange} />
              <input type="email" name="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-700 text-white mb-2" onChange={handleChange} />
              <input type="file" name="resume" className="w-full p-2 rounded bg-gray-700 text-white mb-2" onChange={handleChange} />
              <button type="submit" className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Submit Application</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Careers;
