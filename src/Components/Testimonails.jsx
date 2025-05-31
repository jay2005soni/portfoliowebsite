import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
const testimonials=[
              {
                name: "Jane Smith",
                position: "CTO, InnovateX",
                message:
                  "The collaboration was seamless and professional. Highly impressed with the delivery speed and responsiveness.",
                initials: "JS",
              },
              {
                name: "Mike Wilson",
                position: "Product Manager, FutureTech",
                message:
                  "Incredible results! The design and features blew us away. Highly recommended for startups.",
                initials: "MW",
              },
            ];
            
            const companies = [
              "TechCorp",
              "Innovex",
              "DigiTrend",
              "NextWave",
              "FutureLab",
            ];
function Testimonails(){
const [current , setCurrent] = useState(0);

                const nextTestimonial = () => {
                                setCurrent((prev) => (prev + 1) %  testimonials.length);
                }

                const prevTestimonial =() => {
                                setCurrent((prev)=> prev==0 ? testimonials.length -1 : prev-1) ;
                };
  return (
    <section className="bg-black py-16 px-4 md:px-20 text-center">
      
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-2 text-white">Testimonials</h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mb-4" />
        <p className="text-white">
          What our clients say about our expertise and delivered solutions.
        </p>
      </div>

      {/* Card */}
      <div className="relative max-w-5xl mx-auto" id="testimonials">
        <div className="bg-[#2f2f2f] rounded-3xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 text-left">
          {/* Avatar */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl font-semibold">
            {testimonials[current].initials}
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center space-x-1 mb-2 text-white">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-lg text-white mb-4">
              "{testimonials[current].message}"            </p>
            <p className="font-bold text-white">{testimonials[current].name}</p>
            <p className="text-white text-sm">{testimonials[current].position}</p>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <button className="bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <ChevronLeft size={20}
            onClick={prevTestimonial} />
            
          </button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <button className="bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <ChevronRight size={20}
            onClick={nextTestimonial}/>
          </button>
        </div>
      </div>
      <br />
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === current ? "bg-white" : "bg-gray-600"
                }`}
              ></span>
            ))}
          </div>
          <br />
         <div className="bg-gradient-to-r from-purple-800 to-pink-600 text-white rounded-2xl p-10 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-200 mb-6">
            Join our satisfied clients and let us bring your digital ideas to life with our expertise and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium px-6 py-2 rounded-md hover:opacity-90 transition"
            >
              Contact Us Today
            </a>
            <a
              href="#projects"
              className="bg-gray-800 text-white font-medium px-6 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Explore Projects
            </a>
          </div>
        </div>
    </section>
    
  );
};

export default Testimonails;