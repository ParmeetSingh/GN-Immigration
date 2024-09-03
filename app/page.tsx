import Image from "next/image";
import Link from "next/link";
import banner from "./static/images/Design.png";
import CustomerForm from './components/CustomerForm';

const Home = () => {
  return (

      <div className="home">
      <div>
        <main className="w-full flex-auto">
          
        <div className="relative h-[50vh]">
          <Image src={banner} alt="Banner" layout="fill" objectFit="cover" className=""/>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
            <h1 className="text-4xl font-bold">Let us help you on</h1>
            <h1 className="text-4xl font-bold">Your Journey to Canada</h1>
            <h3 className="text-xl mt-4">Unlock your new life in Canada with us - your passport to a brighter future.</h3>
            <button className="mt-6 px-4 py-2 bg-[#83CD20] text-white rounded hover:bg-blue-700">Get Started</button>
          </div>
      </div>
          
      <div className="h-[40vh] flex items-center justify-around px-10">
        <div className="flex-1 flex flex-col justify-center items-center p-8 rounded-lg m-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Don't Just Take Our Word For It</h2>
          <p className="text-xl text-gray-600 mb-6">See what our clients are saying about us</p>
          <ul className="text-2xl text-gray-700 space-y-2">
            <li>100+ clients served</li>
            <li>20+ Years of Experience</li>
            <li>15+ Immigration Pathways Supported</li>
            <li>99% Success Rate</li>
          </ul>
        </div>

        
      </div>

      <div className="h-[40vh] flex-1 flex flex-col justify-center items-center p-8 rounded-lg m-4 max-w-lg mx-auto">
  <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Welcome to our site</h1>
  <CustomerForm />
</div>



          
          {/* <div className="text-2xl">
            <h2>Discover our comprehensive range of services</h2>
            <p>From visa applications to settlement services, we provide a full suite of immigration solutions tailored to your unique needs and circumstances.</p>

            <div>
              <h3>Express Entry</h3>
              <p>Ready to embark on a journey to Canada? Explore our Express Entry services and start your journey today.</p>
            </div>
            <div>
              <h3>Canadian Citizenship</h3>
              <p>Become a Canadian citizen and enjoy the full rights and privileges of citizenship. Learn more about our citizenship services.</p>
            </div>

            <div>
              <h3>Startup Visa: Entrepreneurs</h3>
              <p>Are you an innovative entrepreneur? Explore our startup visa program and bring your business ideas to Canada.</p>
            </div>

            <div>
              <h3>Provincial Nominee Program (PNP)</h3>
              <p>Interested in immigrating to a specific province? Check out our PNP services for tailored immigration pathways.</p>
            </div>

            <div>
              <h3>Study Program</h3>
              <p>Pursue your academic dreams in Canada. Discover our study program services and explore educational opportunities.</p>
            </div>

            <div>
              <h3>Work Permit</h3>
              <p>Seeking employment opportunities in Canada? Our work permit services can help you navigate the process.</p>
            </div>

            <div>
              <h3>Family Sponsorship</h3>
              <p>Reunite with your loved ones in Canada. Learn about our family sponsorship services and bring your family together.</p>
            </div>
          </div>

          <div className="text-2xl">
            <p>"Finding the right immigration consultant felt like finding a needle in a haystack – until I contacted Dodo Immigration. 
              As a Mauritian citizen sponsoring my parents to Canada, the whole process seemed daunting. But Hanshah and the team were amazing! 
              They walked me through every step, from gathering documents to preparing for the interview, with clear explanations and 
              unwavering support."
            </p>
            <p>-Reshma</p>
          </div>

          <div className="text-2xl">
            <h2>Let us help you navigate the complex process ofimmigrating to Canada and make your dream of a new life a reality.</h2>
            <p>
              Our team of experienced consultants provides personalized support and guidance every step of the way, from visa applications to settlement
              services, ensuring that you have a smooth and successful immigration journey to Canada. We are committed to helping you achieve your
            </p>
          </div> */}
        </main>
      </div>
      <div>
      </div>
    </div>
    
    
  );
};

export default Home;
