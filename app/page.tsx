import Image from "next/image";
import Link from "next/link";
import banner from "./static/images/Design.png";
import CustomerForm from './components/CustomerForm';

const Home = () => {
  return (
    <div className="home">
      <div>
        <main className="w-full flex-auto">
          <div className="relative h-[50vh] md:h-[70vh]">
            <Image 
              src={banner} 
              alt="Banner" 
              layout="fill" 
              objectFit="cover" 
              className=""
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-4 text-center">
              <h1 className="text-2xl md:text-4xl font-bold">Let us help you on</h1>
              <h1 className="text-2xl md:text-4xl font-bold">Your Journey to Canada</h1>
              <h3 className="text-lg md:text-xl mt-4">Unlock your new life in Canada with us - your passport to a brighter future.</h3>
              <button className="mt-6 px-4 py-2 bg-[#83CD20] text-white rounded hover:bg-blue-700">Get Started</button>
            </div>
          </div>
          
          <div className="h-[40vh] md:h-[30vh] flex flex-col md:flex-row items-center justify-around px-6 md:px-10 text-center">
            <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-8 rounded-lg m-4">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Dont Just Take Our Word For It</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6">See what our clients are saying about us</p>
              <ul className="text-lg md:text-2xl text-gray-700 space-y-2">
                <li>100+ clients served</li>
                <li>20+ Years of Experience</li>
                <li>15+ Immigration Pathways Supported</li>
                <li>99% Success Rate</li>
              </ul>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-8 rounded-lg m-4 max-w-lg mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Welcome to our site</h1>
            <CustomerForm />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
