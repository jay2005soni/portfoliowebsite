import { MapPin } from "react-feather";
import backgroundImage from "../assets/bnn.jpg"; // update path if needed

const Locationbanner = () => {
  return (
    <div
      className="rounded-3xl shadow-lg p-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative mb-4">
        <div className="absolute inset-0 w-20 h-20 bg-blue-300 opacity-30 rounded-full animate-ping"></div>
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-400 relative z-10">
          <MapPin className="text-blue-600" size={20} />
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800">Our Location</h2>
      <p className="text-gray-600 mt-1">Delhi, India</p>
    </div>
  );
};

export default Locationbanner;