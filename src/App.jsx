import React from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Project from './Components/Project';
import Services from './Components/Services';
import TeamSection from './Components/TeamSection';
import HowWeWork from './Components/HowWeWork';
import Testimonails from './Components/Testimonails';
import Contact from './Components/Contact';
import Location from './Components/Location';
import Footer from './Components/Footer';

const App = () => {
  const cards = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS", color: "blue-700" },
    { id: 3, name: "JavaScript", color: "blue-700" },
    { id: 4, name: "React", color: "pink-600" },
    { id: 5, name: "Tailwind", color: "green-500" },
    { id: 6, name: "Node.js", color: "red-500" },
    { id: 7, name: "Express", color: "blue-500" },
    { id: 8, name: "MongoDB", color: "blue-500" },
    { id: 9, name: "Next.js", color: "blue-500" },
    { id: 10, name: "TypeScript", color: "blue-500" },
  ];

  return (
    <div className="bg-slate-900">
      <Nav />

      {/* Hero Section */}
      <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between text-left text-white bg-[#171717] px-6 py-24 md:py-32">
        <div className="md:w-1/2 text-left">
          <h1 className='text-5xl font-bold'>
            Hi I am <span className='bg-gradient-to-r from-blue-700 to-pink-500 bg-clip-text text-transparent'>Jaykishan Soni</span>
          </h1>
          <br />
          <h2 className='text-2xl text-white'>Fullstack Developer And Web Developer</h2>
          <h2 className='text-2xl text-blue-400'>React Native</h2>
          <p className='text-xl mt-4'>
            Crafting high-performance, visually stunning applications with <br />
            cutting-edge technologies and sleek UI/UX design.
          </p>
          <br />
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Button 1
            </button>
            <button className="px-6 py-2 bg-transparent border border-pink-700 text-white rounded-lg hover:bg-green-600">
              Button 2
            </button>
          </div>
        </div>

        <div className='w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0'>
          <img src="src/assets/banner.png" alt="Banner" className='w-full h-auto max-h-80 object-contain' />
        </div>
      </section>

      {/* Tech Cards */}
      <section className="bg-[#161616] p-6">
        <div className="flex flex-wrap justify-center gap-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-24 h-16 bg-[#262626] rounded-lg shadow-md flex items-center justify-center text-${card.color ?? 'pink-700'} text-sm font-semibold`}
            >
              {card.name}
            </div>
          ))}
        </div>
      </section>

      {/* Page Sections */}
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="project"><Project /></section>
      <section><HowWeWork /></section>
      <section id="team"><TeamSection /></section>
      <section id = "testi"><Testimonails /></section>
      <section id="contact"><Contact /></section>
      <section><Location /></section>
      <Footer />
    </div>
  );
};

export default App;
