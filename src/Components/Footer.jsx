import { FaGithub, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";

function Footer (){
    return(

        <div className="flex flex-col md:flex-row gap-6 mt-10 p-8">
            
            {/*first part*/}
            <div className="text-white md:w-1/4 w-100 rounded-2xl p-8  h-70">
            <h1 className="bg-gradient-to-r from-blue-700 to-pink-500 bg-clip-text text-transparent text-3xl">Jaykishan Soni</h1>
            <br />
            <p className="text-[#a3a3a3]">Professional Full-Stack Mobile &<br />  Web Developer providing high- <br />quality development services and  <br />innovative solutions for your digital needs.</p>
<br />
            <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-700 text-blue-200 flex items-center justify-center hover:bg-pink-600"><FaGithub/></div>
                <div className="w-8 h-8 rounded-full bg-blue-700 text-blue-200 flex items-center justify-center text-center hover:bg-pink-600"> <FaLinkedin/></div>
                <div className="w-8 h-8 rounded-full bg-blue-700 text-blue-200 flex items-center justify-center hover:bg-pink-600"><FaWhatsapp/></div>
                <div className="w-8 h-8 rounded-full bg-blue-700 text-blue-200 flex items-center justify-center hover:bg-pink-600"><FaInstagram/></div>
            </div>
            </div>

 {/*second part*/}

<div className="text-white w-full md:w-1/4 mb-8 md:mb-0 rounded-2xl p-8 ">
  <h1 className="text-xl font-bold text-white mb-2">Quick Links</h1>
  <div className="w-24 h-2 bg-gradient-to-r from-blue-700 to-pink-800 rounded-full"></div>
  <br />
  <h4 className="text-blue-700 text-s mb-2"> {'> '} <span className="text-s text-[#a3a3a3]"> Home</span></h4>
  
  <h4 className="text-blue-700 text-s mb-2"> {'> '} <span className="text-s text-[#a3a3a3]"> About</span></h4>
  <h4 className="text-blue-700 text-s mb-2"> {'> '} <span className="text-s text-[#a3a3a3]"> Services</span></h4>
  <h4 className="text-blue-700 text-s mb-2" > {'> '} <span className="text-s text-[#a3a3a3]"> Project</span></h4>
  <h4 className="text-blue-700 text-s mb-2"> {'> '} <span className="text-s text-[#a3a3a3]"> Team</span></h4>
  <h4 className="text-blue-700 text-s mb-2"> {'> '} <span className="text-s text-[#a3a3a3]"> Contact</span></h4>
  <h4 className="text-blue-700 text-s mb-2"> {'> '} <span className="text-s text-[#a3a3a3]"> Privacy Policy</span></h4>
</div>

 {/*Third part*/}
<div className="text-white w-full md:w-1/4 mb-8 md:mb-0 rounded-2xl p-8 ">
  <h1 className="text-xl font-bold text-white mb-2">Services</h1>
  <div className="w-24 h-2 bg-gradient-to-r from-blue-700 to-pink-800 rounded-full"></div>
  <br />
  <h4 className="text-blue-700 text-s mb-2"> {'> '} <span className="text-s text-[#a3a3a3]"> Mobile App Developement</span></h4>
  
  <h4 className="text-blue-700 text-s mb-2"> {'> '} <span className="text-s text-[#a3a3a3]"> Web development</span></h4>
  <h4 className="text-blue-700 text-s mb-2"> {'> '} <span className="text-s text-[#a3a3a3]"> Custom Software Solutions</span></h4>
  <h4 className="text-blue-700 text-s mb-2" > {'> '} <span className="text-s text-[#a3a3a3]"> Ui & Ux Optimazation</span></h4>
  <h4 className="text-blue-700 text-s mb-2"> {'> '} <span className="text-s text-[#a3a3a3]"> E-Commerce Solutions</span></h4>

</div>


<div className="text-white w-full md:w-1/4 mb-8 md:mb-0 rounded-2xl p-8 ">
  <h1 className="text-xl font-bold text-white mb-2">Contact Us</h1>
  <div className="w-24 h-2 bg-gradient-to-r from-blue-700 to-pink-800 rounded-full"></div>
  <br />
  <h4 className="text-blue-700 text-s mb-2"> 📞  <span className="text-s text-[#a3a3a3]"> Phone</span></h4>
  
  <h4 className="text-blue-700 text-s mb-2"> 📩 <span className="text-s text-[#a3a3a3]"> Mail</span></h4>
  <h4 className="text-blue-700 text-s mb-2"> 📌 <span className="text-s text-[#a3a3a3]"> Location</span></h4>
 <br />
 <h2 className="mb-4">Subscribe to Newsletter  </h2>
 


<div className="flex rounded-xl overflow-hidden w-full max-w-md bg-[#1f1f1f]">
  <input
    type="email"
    placeholder="Your email"
    className="flex-grow px-4 py-2 text-white bg-[#1f1f1f] placeholder-gray-400 focus:outline-none"
  />
  <button className="px-5 bg-gradient-to-r from-blue-600 to-pink-600 flex items-center justify-center">
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>

</div>
</div>


    )
}
export default Footer;