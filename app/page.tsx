import Image from "next/image";
import Link from "next/link";
import banner from "./static/images/background.jpg";
import rciclogo from "./static/images/rcic-logo.jpeg";
import CustomerForm from './components/CustomerForm';

const Home = () => {
  return (
    <div className="home">
      <main className="w-full flex-auto">
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[80vh]">
          <Image 
            src={banner} 
            alt="Banner" 
            layout="fill" 
            objectFit="cover" 
            className="brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow">Let Us Help You on</h1>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow">Your Journey to Canada</h1>
            <h3 className="text-lg md:text-xl mb-6 drop-shadow">Unlock your new life in Canada with us - your passport to a brighter future.</h3>
            <Link href="/get-started">
              <button className="mt-4 px-8 py-3 bg-[#D32F2F] text-white rounded-full hover:bg-[#B71C1C] transition-all duration-300 shadow-lg">Get Started</button>
            </Link>
          </div>
        </div>
        {/* RCIC Approval Section */}
        <section className="py-16 px-6 md:px-12 bg-white text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#D32F2F] mb-4">We are RCIC Approved</h2>
          <p className="mt-2 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-4">
            Trust our expertise in immigration services, backed by the certification from the Immigration Consultants of Canada Regulatory Council.
          </p>
          <div className="mt-4">
            <Image
              src={rciclogo}
              alt="RCIC Approved"
              className="mx-auto h-24 w-auto" // Adjust size as needed
            />
          </div>
          <p className="mt-4 text-gray-600 italic text-lg md:text-xl">
            Your journey to a new beginning starts with us.
          </p>
        </section>

        {/* Services Section */}
        <div className="py-16 px-6 md:px-12 text-center bg-gray-100">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12">We offer a comprehensive range of immigration services to help you move to Canada with ease.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            {[
              {
                icon: "✈️",
                title: "Express Entry Assistance",
                description: "We guide you through the entire Express Entry process, from preparing your profile to improving your CRS score."
              },
              {
                icon: "🏡",
                title: "Provincial Nominee Programs (PNP)",
                description: "Increase your chances of immigration through one of Canada's Provincial Nominee Programs, tailored to your skills and experience."
              },
              {
                icon: "👪",
                title: "Family Sponsorship",
                description: "We help you reunite with your family by assisting with spousal, child, and parent sponsorship applications."
              },
              {
                icon: "🎓",
                title: "Study Permits & Student Visas",
                description: "Get assistance with study permits and student visas, allowing you to pursue higher education in Canada’s prestigious institutions."
              },
              {
                icon: "💼",
                title: "Work Permits & Employer Support",
                description: "We assist with obtaining work permits and provide support for employers looking to hire foreign workers."
              },
              {
                icon: "🏠",
                title: "Permanent Residency Consultation",
                description: "Receive expert advice on your permanent residency options and the best pathway to secure your PR status."
              }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="text-center mb-4">
                  <span className="block text-5xl text-[#D32F2F] mb-2">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

       {/* Why Choose Us Section */}
<div className="py-16 px-6 md:px-12 bg-white text-center">
  <h2 className="text-3xl md:text-5xl font-bold text-[#D32F2F] mb-8">Why Choose Us?</h2>
  <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
    We are more than just immigration consultants – we are your partners in building a future in Canada. Here’s why we stand out:
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      {
        title: "Experienced Team of Licensed Consultants",
        description: "Our team consists of fully licensed and experienced consultants who are dedicated to navigating the complexities of Canadian immigration law."
      },
      {
        title: "Personalized Immigration Plans Tailored to Your Needs",
        description: "We work closely with you to develop a customized immigration plan that aligns with your specific goals and circumstances."
      },
      {
        title: "Transparent, Honest, and Reliable Service",
        description: "We prioritize transparency in our services, ensuring you understand every step of the process without any hidden fees."
      },
      {
        title: "100% Commitment to Your Success",
        description: "Your success is our top priority. We are committed to providing ongoing support and guidance throughout your immigration journey."
      }
    ].map((item, index) => (
      <div key={index} className="p-6 bg-[#F9F9F9] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 border border-gray-300">
        <h3 className="text-lg font-semibold text-[#D32F2F] mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
        <div className="mt-4">
          <hr className="border-t border-[#D32F2F] mb-4" />
          <p className="text-sm text-gray-500 italic">Discover how we can help you achieve your dreams!</p>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* How It Works Section */}
        <div className="py-16 px-6 md:px-12 text-center bg-[#F5F5F5]">
          <h2 className="text-3xl md:text-5xl font-bold text-[#D32F2F] mb-6">How It Works</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">Our immigration process is simple and efficient:</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "Step 1", description: "Schedule a free consultation with one of our experts." },
              { step: "Step 2", description: "Receive a personalized immigration plan." },
              { step: "Step 3", description: "Submit your application with our assistance." },
              { step: "Step 4", description: "Get continuous updates and support until approval." }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-bold text-[#D32F2F] mb-2">{item.step}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 px-6 md:px-12 text-center bg-white">
          <h2 className="text-3xl md:text-5xl font-bold text-[#D32F2F] mb-6">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">Our clients' success stories inspire us to keep delivering exceptional service:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "I couldn't have asked for a better team to guide me through my immigration journey!",
              "Thanks to their expertise, I am now living my dream in Canada.",
              "Professional, caring, and trustworthy. Highly recommend!"
            ].map((quote, index) => (
              <div key={index} className="p-6 bg-[#F5F5F5] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-700 italic">"{quote}"</p>
                <p className="mt-2 text-gray-600 font-semibold">- Happy Client</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#F5F5F5]">
            <CustomerForm />
        </div>
        
      </main>
    </div>
  );
};

export default Home;
