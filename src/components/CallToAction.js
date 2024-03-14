export default function Cta() {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/bg.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="py-2 sm:px-6 sm:py-20 lg:px-8">
        <div
          className="relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        >
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            UNLEASHING THE POWER OF DISRUPTIVE IDEAS
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            While we are highly selective about who we work with, we are always open to considering new opportunities.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            If your company values delivery, quality and integrity, let's grab a coffee.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="mailto:hello@lekkercommerce.co.za"
              className="rounded-md bg-[#008080] px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              LET'S SET UP A MEETING
            </a>

          </div>

        </div>
      </div>
    </div>
  )
}
