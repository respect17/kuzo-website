import MobImg from "../images/jasure.jpeg";
import WebImg from '../images/web.jpg';
import Ecomm from '../images/e-comm.jpg'



export default function Services() {
  return (
    <div id="services" className="bg-gray-900 py-24 sm:py-32 smooth-scroll">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            HOW CAN I BE OF SERVICE?
          </p>
        </div>
        
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col h-[500px] bg-gray-800 p-6 rounded-lg hover:bg-[#008080] transition duration-200">
            <h2 className="text-xl font-semibold text-white">WEB APPLICATIONS</h2>
            <p className="mt-4 text-gray-300">
              Full-stack web applications that are fast, secure and scalable with industry leading technologies.
            </p>
            <img className="mt-auto" src={WebImg} alt="" />
          </div>
          <div className="flex flex-col h-[500px] bg-gray-800 p-6 rounded-lg hover:bg-[#008080] transition duration-200">
            <h2 className="text-xl font-semibold text-white">MOBILE APPLICATIONS</h2>
            <p className="mt-4 text-gray-300">
              Years of experience building native apps and hybrid projects with React Native, the leading cross-platform framework.
            </p>
            <img className="mt-auto" src={MobImg} alt="Mobile phone" />
          </div>
          <div className="flex flex-col h-[500px] bg-gray-800 p-6 rounded-lg hover:bg-[#008080] transition duration-200">
            <h2 className="text-xl font-semibold text-white">E - COMMERCE</h2>
            <p className="mt-4 text-gray-300">
              Payment gateway integrations at the intermediary level, or for your end-user projects.
              Plugin development too.
            </p>
            <img className="mt-auto" src={Ecomm} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
