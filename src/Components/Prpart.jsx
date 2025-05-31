import React from "react";
import { FaUsers, FaBriefcase, FaSmile, FaPhone } from "react-icons/fa";

const prpartdata = [
  {
    icon: <FaUsers className="text-blue-400 text-3xl" />,
    value: "5+",
    label: "Team Members",
  },
  {
    icon: <FaBriefcase className="text-pink-500 text-3xl" />,
    value: "20+",
    label: "Projects Completed",
  },
  {
    icon: <FaSmile className="text-blue-400 text-3xl" />,
    value: "15+",
    label: "Happy Clients",
  },
  {
    icon: <FaPhone className="text-pink-500 text-3xl" />,
    value: "24/7",
    label: "Support Available",
  },
];

const Prpart = () => {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {prpartdata.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gray-800 text-white rounded-xl py-8 px-6 shadow-md text-center hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="bg-gray-700 p-4 rounded-full">
                {stat.icon}
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prpart;
