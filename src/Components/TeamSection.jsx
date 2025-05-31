import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaUsers, FaBriefcase, FaSmile, FaPhone } from "react-icons/fa";
const prpartdata = [
  {
    iconvr: <FaUsers className="text-blue-400 text-3xl" />,
    value: "5+",
    label: "Team Members",
  },
  {
    iconvr: <FaBriefcase className="text-pink-500 text-3xl" />,
    value: "20+",
    label: "Projects Completed",
  },
  {
    iconvr: <FaSmile className="text-blue-400 text-3xl" />,
    value: "15+",
    label: "Happy Clients",
  },
  {
    iconvr: <FaPhone className="text-pink-500 text-3xl" />,
    value: "24/7",
    label: "Support Available",
  },
];

const teamMembers = [
  {
    name: 'Hemant',
    role: 'Laravel/PHP Developer',
    description: 'Expert in building robust backend systems and RESTful APIs with Laravel and PHP.',
    skills: ['Laravel', 'PHP'],
    gradient: 'from-purple-500 via-pink-500 to-pink-600',
  },
  {
    name: 'Rahul',
    role: 'Laravel Developer',
    description: 'Passionate developer with expertise in Laravel framework and modern web development practices.',
    skills: ['Laravel', 'Full-Stack'],
    gradient: 'from-pink-500 via-purple-500 to-blue-500',
  },
  {
    name: 'Suraj',
    role: 'Software Developer',
    description: 'Skilled programmer specializing in custom software solutions and application development.',
    skills: ['Java', 'Software'],
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-4">
        Our Team
      </h2>
      <div className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
        Meet the talented professionals behind our exceptional work. Each member brings unique expertise to deliver quality solutions.
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg">
            <div className={`bg-gradient-to-r ${member.gradient} p-8 flex flex-col items-center`}>
              <div className="text-white text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-16 h-16" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="flex gap-2 mb-4">
                {member.skills.map((skill, idx) => (
                  <span key={idx} className="bg-[#1e1e1e] px-3 py-1 rounded-full text-sm font-medium text-white border border-white">{skill}</span>
                ))}
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-blue-500 font-medium mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm mb-4">{member.description}</p>
              <div className="flex justify-center gap-4 text-xl text-gray-400">
                <a href="#"><FaGithub /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    <section className=" py-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {prpartdata.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gray-800 text-white rounded-xl py-8 px-6 shadow-md text-center hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="bg-gray-700 p-4 rounded-full">
                {stat.iconvr}
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
      
      <div className=''>
      <h1 className='text-center font-bold text-3xl text-white'>Ready to Work With Our Team?</h1>
      <br />
      <p className='text-center   text-white'>Let's collaborate to transform your ideas into exceptional digital experiences.</p>
      <div className='flex justify-center mt-6'>
      <button className='w-40 h-10 bg-gradient-to-r from-pink-700 to-blue-600 rounded-full text-white '>Get in Touch</button> </div>
    </div>
    </section>
  );
};

export default TeamSection;
