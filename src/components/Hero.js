
import 'react-responsive-carousel/lib/styles/carousel.min.css';



function Hero() {



  return (
    <div>
      <div className="relative isolate overflow-hidden h-[100vh]">

        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px">
          <div className="px-5">
            <div className='flex justify-center'>
              <img class="h-full w-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl px-10">
              Hi there, I'm Kuzo, my real name is Aero.
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              I make 2-D pixel art games with python and pygame.
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              I create many pixel art games but I like to take things slow so communication is key.
              <br />
              My key point is that I make lots of jokes and more.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:hello@lekkercommerce.co.za"
                className="rounded-md bg-[#008080]  px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-[#008198f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Let's Talk About Your Project
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;