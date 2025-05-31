import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Discovery',
    description: 'Understanding your requirements and project goals through in-depth consultations.',
    color: 'bg-blue-500'
  },
  {
    number: '2',
    title: 'Planning',
    description: 'Creating a roadmap with milestones, technologies, and design specifications.',
    color: 'bg-pink-600'
  },
  {
    number: '3',
    title: 'Development',
    description: 'Building your solution with clean code and regular progress updates.',
    color: 'bg-blue-500'
  },
  {
    number: '4',
    title: 'Delivery',
    description: 'Testing, refining, and launching your product with ongoing support.',
    color: 'bg-pink-600'
  }
];

const HowWeWork = () => {
  return (
    <div className="bg-[#121212] text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-[#1e1e1e] rounded-lg p-6 text-center w-full md:w-1/4 shadow-lg"
          >
            <div
              className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}
            >
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-1 w-4 bg-gradient-to-r from-blue-500 to-pink-500"></div>
            )}
          </div>
        ))}
      </div>
      <br /> 
      <div className='items-center flex flex-col-reverse text-3xl font-bold'>Ready to bring your idea to life ?</div>
 <br />
 <div className='flex flex-col-reverse items-center'>
  <button className="w-30 h-10 bg-gradient-to-r from-blue-700 to-pink-500 text-white rounded-lg hover:opacity-90 transition items-center ">
  Get Started
</button></div> </div>
  );
};

export default HowWeWork ;
