const posts = [
  {
    id: 1,
    title: 'Santam: Mobile development',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://cdn.24.co.za/files/Cms/General/d/11536/5370b6b819c443d68b238db852ba442a.jpg',
    date: 'React Native, Python, AWS Lambda',
    datetime: '2023-01-01',
  },
  {
    id: 2,
    title: 'Yoco: E-Commerce',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://www.yoco.com/za/blog/wp-content/uploads/2019/10/yoco-go-package-1200x800.jpg',
    date: 'Kotlin, Django, WordPress',
    datetime: '2022-04-01',
  },
  {
    id: 3,
    title: 'OfferZen: Web Development',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://production.listennotes.com/podcasts/offerzen-podcast-jomiro-FpORQdWnAD1-8dIYkeUXJmr.1400x1400.jpg',
    date: 'React, NodeJS',
    datetime: '2019-01-02',
  },
  {
    id: 4,
    title: 'StoneThree: Web Development',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      '/stonethree.png',
    date: 'React, Django, FastAPI',
    datetime: '2022-03-16',
  },
  {
    id: 5,
    title: 'Yoti: Mobile Development',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      '/yoti.jpeg',
    date: 'Obj-C, Java, React Native',
    datetime: '2020-03-16',
  },
  {
    id: 6,
    title: 'Aux Studio: Mobile Development',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://aux.studio/assets/img/projects/mediclinic/_mediclinic-featured-2.jpg',
    date: 'React Native, Firebase',
    datetime: '2021-03-16',
  },
]

export default function Projects() {
  return (
    <div className="bg-white py-24 sm:py-32 smooth-scroll">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-8xl font-bold tracking-tight text-gray-900 sm:text-4xl">SOME OF MY WORK</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            I've had the privilege of working with highly impactful brands over the years.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="transition-transform duration-300 transform hover:scale-105 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />

              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
