import React from "react";
import { BiSupport } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { FaMobileAlt, FaLaptopCode, FaCogs, FaCartPlus } from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt className="text-3xl text-blue-400" />,
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile applications with beautiful UI and seamless performance.",
    tags: [
      { label: "Flutter", color: "text-blue-400" },
      { label: "React Native", color: "text-pink-500" },
      { label: "Java", color: "text-blue-400" },
      { label: "Kotlin", color: "text-pink-500" },
    ],
  },
  {
    icon: <FaLaptopCode className="text-3xl text-pink-500" />,
    title: "Web Development",
    description:
      "Responsive, modern websites and web applications with focus on performance and usability.",
    tags: [
      { label: "HTML/CSS", color: "text-blue-400" },
      { label: "JavaScript", color: "text-pink-500" },
      { label: "Laravel", color: "text-blue-400" },
      { label: "PHP", color: "text-pink-500" },
    ],
  },
  {
    icon: <FaCogs className="text-3xl text-blue-400" />,
    title: "Custom Software Solutions",
    description:
      "Tailored software solutions designed to address your specific business challenges.",
    tags: [
      { label: "API Integration", color: "text-blue-400" },
      { label: "UI/UX Design", color: "text-pink-500" },
      { label: "Database", color: "text-blue-400" },
      { label: "Testing", color: "text-pink-500" },
    ],
  },
  {
    icon: <FaCartPlus className="text-3xl text-pink-500" />,
    title: "Ecommerce Platform",
    description:
      "Create responsive, secure online stores with seamless shopping experiences and fast performance.",
    tags: [
      { label: "Shopify", color: "text-blue-400" },
      { label: "WooCommerce", color: "text-pink-500" },
      { label: "React", color: "text-blue-400" },
      { label: "Stripe API", color: "text-pink-500" },
    ],
  },
    {
    icon: <BsShop className="text-3xl text-pink-500" />,
    title: "UI/UX Optimization",
    description:
      "Enhance user experience with intuitive interfaces and smooth interactions that boost engagement.",
    tags: [
      { label: "Wireframing", color: "text-blue-400" },
      { label: "Prototyping", color: "text-pink-500" },
      { label: "User Testing", color: "text-blue-400" },
      { label: "Animations", color: "text-pink-500" },
    ],
  },
    {
    icon: <BiSupport className="text-3xl text-pink-500" />,
    title: "Maintenance & Support",
    description:
      "Ongoing technical support and maintenance to keep your applications running smoothly.",
    tags: [
      { label: "Bug Fixes", color: "text-blue-400" },
      { label: "Updates", color: "text-pink-500" },
      { label: "Optimization", color: "text-blue-400" },
      { label: "Consultation", color: "text-pink-500" },
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Services</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Specialized services tailored to meet your digital needs with cutting-edge technologies and expert solutions.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3  gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gray-700 p-4 rounded-full">{service.icon}</div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">
              {service.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`bg-gray-700 px-4 py-2 rounded-md text-sm font-medium ${tag.color} w-40 text-center`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
