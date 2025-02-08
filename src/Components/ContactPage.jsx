import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data);

  return (
    <section className="bg-gray-900 text-white py-20 text-center">
      <h2 className="text-4xl font-bold text-blue-500">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col gap-4 max-w-md mx-auto">
        <input {...register("name", { required: true })} className="p-3 bg-gray-800 rounded-lg" placeholder="Your Name" />
        {errors.name && <span className="text-red-500">Name is required</span>}
        <input {...register("email", { required: true })} className="p-3 bg-gray-800 rounded-lg" placeholder="Your Email" />
        {errors.email && <span className="text-red-500">Email is required</span>}
        <textarea {...register("message", { required: true })} className="p-3 bg-gray-800 rounded-lg" placeholder="Your Message"></textarea>
        <button className="mt-6 px-6 py-2 bg-blue-500 rounded-lg text-white shadow-lg">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
