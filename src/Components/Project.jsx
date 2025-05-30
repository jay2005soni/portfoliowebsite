import React, { useState } from 'react';

const filters = ['All Projects', 'Mobile Apps', 'Websites', 'Custom Software'];
import { Monitor, Smartphone, DollarSign, Settings, CameraIcon, MessageCircleHeart, MessageCircle } from "lucide-react";
import { BiMobile } from 'react-icons/bi';
import { FaUsers, FaBriefcase, FaSmile, FaPhone } from "react-icons/fa";
import Prpart from './Prpart.jsx';

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


const projectData = [

 
// this is for Project card

  {
    title: 'E-Commerce Mobile App',
    type: 'Mobile Apps',
    tech: ['Flutter', 'Firebase', 'State Management'],
    description: 'A feature-rich shopping application with seamless checkout process and real-time inventory tracking.',
    tag: 'Flutter',
    icon: <BiMobile size={48} className="text-white items-center flex flex-col-reverse"  />,
    demo: '#',
    github: '#',
    gradient: 'from-blue-500 to-pink-500',
  },
  {
    title: 'Corporate Portal',
    type: 'Websites',
    tech: ['Laravel', 'MySQL', 'Vue.js'],
    description: 'A comprehensive business management system with employee dashboard, task management, and analytics.',
    tag: 'Laravel',
    icon: <Monitor size={48} className="text-white items-center flex flex-col-reverse" />,
    demo: '#',
    github: '#',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    title: 'Expense Tracker',
    type: 'Custom Software',
    tech: ['React Native', 'Redux', 'Charts'],
    description: 'A personal finance app with budget planning, expense tracking, and visual reports to help users manage finances.',
    tag: 'React Native',
    icon: <DollarSign size={48} className="text-white items-center flex flex-col-reverse" />,
    demo: '#',
    github: '#',
    gradient: 'from-purple-500 to-pink-500',
  },

   {
    title: 'E-Commerce Mobile App',
    type: 'Mobile Apps',
    tech: ['Flutter', 'Firebase', 'State Management'],
    description: 'A feature-rich shopping application with seamless checkout process and real-time inventory tracking.',
    tag: 'Flutter',
    icon: <BiMobile size={48} className="text-white items-center flex flex-col-reverse"  />,
    demo: '#',
    github: '#',
    gradient: 'from-blue-500 to-pink-500',
  },
  {
    title: 'Corporate Portal',
    type: 'Websites',
    tech: ['Laravel', 'MySQL', 'Vue.js'],
    description: 'A comprehensive business management system with employee dashboard, task management, and analytics.',
    tag: 'Laravel',
    icon: <Monitor size={48} className="text-white items-center flex flex-col-reverse" />,
    demo: '#',
    github: '#',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    title: 'Expense Tracker',
    type: 'Custom Software',
    tech: ['React Native', 'Redux', 'Charts'],
    description: 'A personal finance app with budget planning, expense tracking, and visual reports to help users manage finances.',
    tag: 'React Native',
    icon: <DollarSign size={48} className="text-white items-center flex flex-col-reverse" />,
    demo: '#',
    github: '#',
    gradient: 'from-purple-500 to-pink-500',
  },
];


export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projectData
      : projectData.filter((p) => p.type === activeFilter);

  return (
    <section className="bg-[#121212] text-white py-35 px-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Explore my latest work and see how I bring ideas to life with code and creativity.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${ 
              activeFilter === filter
                ? 'bg-blue-500 text-white'
                : 'bg-[#2a2a2a] text-gray-300 hover:bg-[#333]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md flex flex-col">
            <div className={`bg-gradient-to-r ${project.gradient} p-6 flex justify-between items-start relative h-50`}>
              <div className="text-5xl items-center flex flex-col-reverse">{project.icon}</div>
              <span className="absolute top-2 right-2 bg-[#1e1e1e] text-xs text-white px-2 py-1 rounded-full border border-white">
                {project.tag}
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-400 my-2">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech?.map((t, i) => (
                  <span key={i} className="bg-[#2a2a2a] text-xs text-white px-2 py-1 rounded-full border border-gray-600">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href={project.demo} className="text-blue-400 text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                  Live Demo ↗
                </a>
                <a href={project.github} className="text-pink-400 text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
         
          </div>
       
       
       ))}
       
        <div>  <section className="bg-gray-900 py-16 px-4">
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
    </section></div>
      </div>
      
    </section>
    
    
  );
}
