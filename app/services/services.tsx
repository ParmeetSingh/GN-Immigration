import React from 'react'
import Link from "next/link";

const services = () => {
  return (
    <div className="relative flex flex-auto overflow-hidden bg-gray-100 pt-14" style={{ borderTopLeftRadius: '40px', borderTopRightRadius: '40px' }}>
    <div className="relative isolate flex w-full flex-col pt-9">
      <svg aria-hidden="true" className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-red-500 stroke-neutral-950/5" style={{ maskImage: 'linear-gradient(to bottom left, red 40%, transparent 50%)' }}>
        <rect width="100%" height="100%" fill="url(#gradient)" strokeWidth="0"></rect>
        <defs>
          <pattern id="gradient" width="96" height="480" x="50%" patternUnits="userSpaceOnUse" patternTransform="translate(0 -96)" fill="none">
            <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
          </pattern>
        </defs>
      </svg>
      <main className="w-full flex-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h1>
              <span className="block font-display text-base font-semibold text-red-700">Services We Offer</span>
              <span className="mt-6 block max-w-5xl font-display text-6xl font-medium tracking-tight text-red-700 sm:text-6xl">Discover Our Comprehensive Range of Immigration Services and Solutions</span>
            </h1>
            <div className="mt-6 max-w-3xl text-3xl text-black">
              <p>From visa applications to settlement services, we provide a full suite of immigration solutions tailored to your unique needs and circumstances.</p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-40">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="font-display text-2xl font-semibold text-red-700">Services</h2>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
              <article>
                <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      {/* Placeholder for image */}
                    </div>
                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                      <p className="text-lg font-semibold tracking-tight text-red-700 lg:mt-2">Express Entry</p>
                      <p className="text-md text-red-700 lg:mt-2"><time dateTime="2024-02">February 2024</time></p>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p className="font-display text-4xl font-medium text-red-700"><Link href="/work/express">Express Entry</Link></p>
                    <div className="mt-6 space-y-6 text-base text-indigo-700">
                      <p>Express Entry could be your path to make it a reality. It is the primary way for skilled workers to immigrate to Canada permanently</p>
                      <p>We built out the blockchain infrastructure that supports Unseal. Unfortunately, we took a massive loss on this project when Unseal’s cryptocurrency, PlaceboCoin, went to zero.</p>
                    </div>
                    <div className="mt-8 flex">
                      <Link href="/work/express" className="inline-flex rounded-full px-4 py-1.5 text-md font-semibold transition bg-red-700 text-white hover:bg-red-950">Read More</Link>
                    </div>
                    <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                      <figure className="text-lg">
                        <blockquote className="text-red-600">
                          <p className="relative before:absolute before:right-full before:content-['“'] after:content-['”']">From the initial assessment to the final application, Dodo Immigration kept me organized and on track. Two months after my application, I got the ITA! Now I am a software engineer in Toronto, and Canada feels like home. Could not have done it without Dodo Immigration. You guys are the best!</p>
                        </blockquote>
                        <figcaption className="mt-6 font-semibold text-red-800">Manish, Mauritius</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
              <article>
                <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      {/* Placeholder for image */}
                    </div>
                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                      <p className="text-lg font-semibold tracking-tight text-red-700 lg:mt-2">Canadian Citizenship</p>
                      <p className="text-md text-red-700 lg:mt-2"><time dateTime="2024-02">February 2024</time></p>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p className="font-display text-4xl font-medium text-red-700"><Link href="/work/express">Canadian Citizenship</Link></p>
                    <div className="mt-6 space-y-6 text-base text-indigo-700">
                      <p>Canada’s passport offers one of the powerful passports in the world. Live permanently in one of the world’s prosperous countries, possess the strongest passports, and have the right to vote by being a Canadian Citizen. Enjoy the variety of benefits when you become a Canadian Citizen.y</p>
                      <p>It’s the start of a new journey where you can continue to contribute to Canada’s economy and society.</p>
                    </div>
                    <div className="mt-8 flex">
                      <Link href="/work/express" className="inline-flex rounded-full px-4 py-1.5 text-md font-semibold transition bg-red-700 text-white hover:bg-red-950">Read More</Link>
                    </div>
                    <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                      <figure className="text-lg">
                        <blockquote className="text-red-600">
                          <p className="relative before:absolute before:right-full before:content-['“'] after:content-['”']">From the initial assessment to the final application, Dodo Immigration kept me organized and on track. Two months after my application, I got the ITA! Now I am a software engineer in Toronto, and Canada feels like home. Could not have done it without Dodo Immigration. You guys are the best!</p>
                        </blockquote>
                        <figcaption className="mt-6 font-semibold text-red-800">Manish, Mauritius</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
              <article>
                <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      {/* Placeholder for image */}
                    </div>
                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                      <p className="text-lg font-semibold tracking-tight text-red-700 lg:mt-2">Start-Up Visa: Entrepreneurs</p>
                      <p className="text-md text-red-700 lg:mt-2"><time dateTime="2024-02">February 2024</time></p>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p className="font-display text-4xl font-medium text-red-700"><Link href="/work/express">Start-Up Visa: Entrepreneurs</Link></p>
                    <div className="mt-6 space-y-6 text-base text-indigo-700">
                      <p>Express Entry could be your path to make it a reality. It is the primary way for skilled workers to immigrate to Canada permanently</p>
                      <p>We built out the blockchain infrastructure that supports Unseal. Unfortunately, we took a massive loss on this project when Unseal’s cryptocurrency, PlaceboCoin, went to zero.</p>
                    </div>
                    <div className="mt-8 flex">
                      <Link href="/work/express" className="inline-flex rounded-full px-4 py-1.5 text-md font-semibold transition bg-red-700 text-white hover:bg-red-950">Read More</Link>
                    </div>
                    <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                      <figure className="text-lg">
                        <blockquote className="text-red-600">
                          <p className="relative before:absolute before:right-full before:content-['“'] after:content-['”']">From the initial assessment to the final application, Dodo Immigration kept me organized and on track. Two months after my application, I got the ITA! Now I am a software engineer in Toronto, and Canada feels like home. Could not have done it without Dodo Immigration. You guys are the best!</p>
                        </blockquote>
                        <figcaption className="mt-6 font-semibold text-red-800">Manish, Mauritius</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </article>
              {/* Repeat the structure for other services */}
            </div>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
              <article>
                <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      {/* Placeholder for image */}
                    </div>
                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                      <p className="text-lg font-semibold tracking-tight text-red-700 lg:mt-2">Provincial Nominee Program</p>
                      <p className="text-md text-red-700 lg:mt-2"><time dateTime="2024-02">February 2024</time></p>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p className="font-display text-4xl font-medium text-red-700"><Link href="/work/express">Provincial Nominee Program</Link></p>
                    <div className="mt-6 space-y-6 text-base text-indigo-700">
                      <p>Express Entry could be your path to make it a reality. It is the primary way for skilled workers to immigrate to Canada permanently</p>
                      <p>We built out the blockchain infrastructure that supports Unseal. Unfortunately, we took a massive loss on this project when Unseal’s cryptocurrency, PlaceboCoin, went to zero.</p>
                    </div>
                    <div className="mt-8 flex">
                      <Link href="/work/express" className="inline-flex rounded-full px-4 py-1.5 text-md font-semibold transition bg-red-700 text-white hover:bg-red-950">Read More</Link>
                    </div>
                    <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                      <figure className="text-lg">
                        <blockquote className="text-red-600">
                          <p className="relative before:absolute before:right-full before:content-['“'] after:content-['”']">From the initial assessment to the final application, Dodo Immigration kept me organized and on track. Two months after my application, I got the ITA! Now I am a software engineer in Toronto, and Canada feels like home. Could not have done it without Dodo Immigration. You guys are the best!</p>
                        </blockquote>
                        <figcaption className="mt-6 font-semibold text-red-800">Manish, Mauritius</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </article>
              {/* Repeat the structure for other services */}
            </div>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
              <article>
                <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      {/* Placeholder for image */}
                    </div>
                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                      <p className="text-lg font-semibold tracking-tight text-red-700 lg:mt-2">Study Permit</p>
                      <p className="text-md text-red-700 lg:mt-2"><time dateTime="2024-02">February 2024</time></p>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p className="font-display text-4xl font-medium text-red-700"><Link href="/work/express">Study Permit</Link></p>
                    <div className="mt-6 space-y-6 text-base text-indigo-700">
                      <p>Express Entry could be your path to make it a reality. It is the primary way for skilled workers to immigrate to Canada permanently</p>
                      <p>We built out the blockchain infrastructure that supports Unseal. Unfortunately, we took a massive loss on this project when Unseal’s cryptocurrency, PlaceboCoin, went to zero.</p>
                    </div>
                    <div className="mt-8 flex">
                      <Link href="/work/express" className="inline-flex rounded-full px-4 py-1.5 text-md font-semibold transition bg-red-700 text-white hover:bg-red-950">Read More</Link>
                    </div>
                    <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                      <figure className="text-lg">
                        <blockquote className="text-red-600">
                          <p className="relative before:absolute before:right-full before:content-['“'] after:content-['”']">From the initial assessment to the final application, Dodo Immigration kept me organized and on track. Two months after my application, I got the ITA! Now I am a software engineer in Toronto, and Canada feels like home. Could not have done it without Dodo Immigration. You guys are the best!</p>
                        </blockquote>
                        <figcaption className="mt-6 font-semibold text-red-800">Manish, Mauritius</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </article>
              {/* Repeat the structure for other services */}
            </div>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
              <article>
                <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      {/* Placeholder for image */}
                    </div>
                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                      <p className="text-lg font-semibold tracking-tight text-red-700 lg:mt-2">Work Permit</p>
                      <p className="text-md text-red-700 lg:mt-2"><time dateTime="2024-02">February 2024</time></p>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p className="font-display text-4xl font-medium text-red-700"><Link href="/work/express">Work Permit</Link></p>
                    <div className="mt-6 space-y-6 text-base text-indigo-700">
                      <p>Express Entry could be your path to make it a reality. It is the primary way for skilled workers to immigrate to Canada permanently</p>
                      <p>We built out the blockchain infrastructure that supports Unseal. Unfortunately, we took a massive loss on this project when Unseal’s cryptocurrency, PlaceboCoin, went to zero.</p>
                    </div>
                    <div className="mt-8 flex">
                      <Link href="/work/express" className="inline-flex rounded-full px-4 py-1.5 text-md font-semibold transition bg-red-700 text-white hover:bg-red-950">Read More</Link>
                    </div>
                    <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                      <figure className="text-lg">
                        <blockquote className="text-red-600">
                          <p className="relative before:absolute before:right-full before:content-['“'] after:content-['”']">From the initial assessment to the final application, Dodo Immigration kept me organized and on track. Two months after my application, I got the ITA! Now I am a software engineer in Toronto, and Canada feels like home. Could not have done it without Dodo Immigration. You guys are the best!</p>
                        </blockquote>
                        <figcaption className="mt-6 font-semibold text-red-800">Manish, Mauritius</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </article>
              {/* Repeat the structure for other services */}
            </div>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
              <article>
                <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      {/* Placeholder for image */}
                    </div>
                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                      <p className="text-lg font-semibold tracking-tight text-red-700 lg:mt-2">Family Sponsorship</p>
                      <p className="text-md text-red-700 lg:mt-2"><time dateTime="2024-02">February 2024</time></p>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p className="font-display text-4xl font-medium text-red-700"><Link href="/work/express">Family Sponsorship</Link></p>
                    <div className="mt-6 space-y-6 text-base text-indigo-700">
                      <p>Express Entry could be your path to make it a reality. It is the primary way for skilled workers to immigrate to Canada permanently</p>
                      <p>We built out the blockchain infrastructure that supports Unseal. Unfortunately, we took a massive loss on this project when Unseal’s cryptocurrency, PlaceboCoin, went to zero.</p>
                    </div>
                    <div className="mt-8 flex">
                      <Link href="/work/express" className="inline-flex rounded-full px-4 py-1.5 text-md font-semibold transition bg-red-700 text-white hover:bg-red-950">Read More</Link>
                    </div>
                    <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-orange-600 after:bg-orange-600/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                      <figure className="text-lg">
                        <blockquote className="text-red-600">
                          <p className="relative before:absolute before:right-full before:content-['“'] after:content-['”']">From the initial assessment to the final application, Dodo Immigration kept me organized and on track. Two months after my application, I got the ITA! Now I am a software engineer in Toronto, and Canada feels like home. Could not have done it without Dodo Immigration. You guys are the best!</p>
                        </blockquote>
                        <figcaption className="mt-6 font-semibold text-red-800">Manish, Mauritius</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </article>
              {/* Repeat the structure for other services */}
            </div>
          </div>
        </div>
        
      </main>
    </div>
  </div>
  )
}

export default services