import React from "react";
import Link from "next/link";
import Image from 'next/image';

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col items-center justify-between pt-40 mx-10 md:flex-row md:my-20 lg:my-0">
          <h1 className="max-w-lg my-20 text-6xl font-bold text-center text-gray-500 lg:text-9xl md:my-0 md:text-white dark:text-gray-600">
            Favourite Projects
          </h1>
          <Link href="/projects">
            <a className="flex flex-row items-center px-8 py-4 mb-20 space-x-4 text-xl font-semibold bg-white rounded-md shadow-lg md:mb-0 dark:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right-square"
                stroke="4"
                strokeWidth="4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                />
              </svg>
              <p>View all</p>
            </a>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className="grid gap-8 pb-40 md:grid-cols-3 lg:-mt-8">
          {/* Single card */}
          <a
            href="http://info.reprasis.org/" target={'_blank'}
            className="block w-full col-span-3 shadow-2xl"
          >
            <div className="relative h-full overflow-hidden">
              <Image
                className="transition ease-out transform before:bg-red hover:scale-125 duration-2000"
                src="/info-reprasis-dark.png"
                alt="Reprasis Project"
                width={1152}
                height={649}
                blurDataURL="/info-reprasis-blur.jpg"
                placeholder="blur"
              />
              <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-gray-50">
                Reprasis
              </h1>
              <h1 className="absolute text-xl font-bold bottom-10 left-10 text-gray-50">
                01
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://bryan2811.github.io/Airbnb/" target={'_blank'}
            className="block w-full col-span-3 shadow-2xl sm:col-span-2"
          >
            <div className="relative overflow-hidden">
              {/* <div className="absolute inset-0 z-10 bg-black overlay bg-opacity-70"></div> */}
              <Image
                className="transition ease-out transform hover:scale-125 duration-2000"
                src="/airbnb-clon.png"
                alt="Airbnb Project"
                width={757}
                height={425}
                blurDataURL="/airbnb-clon-blur.jpg"
                placeholder="blur"
              />
              <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-gray-50">
                Airbnb Clon
              </h1>
              <h1 className="absolute text-xl font-bold bottom-10 left-10 text-gray-50">
                02
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://obscure-springs-20870.herokuapp.com/"
            className="block object-cover w-full col-span-3 sm:col-span-1"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* <div className="absolute inset-0 z-10 bg-black overlay bg-opacity-70"></div> */}
              <Image
                className="object-cover w-full transition ease-out transform shadow-2xl hover:scale-125 duration-2000"
                src="/agencia-project.png"
                alt="Agency Project"
                width={363}
                height={208}
                blurDataURL="/agencia-project-blur.jpg"
                placeholder="blur"
              />
              <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-gray-50">
                Travel Agency 
              </h1>
              <h1 className="absolute text-xl font-bold bottom-10 left-10 text-gray-50">
                03
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
