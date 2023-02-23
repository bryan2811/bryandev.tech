import React from "react";
import Image from 'next/image';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row items-start justify-center overflow-hidden lg:container lg:mx-auto">
      {/* Text container */}

      <div className="w-full mx-auto text-center md:w-9/12 lg:w-3/5 md:text-left xl:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="my-2 text-4xl font-bold text-gray-700 md:text-8xl dark:text-gray-200">
              Student.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="my-2 text-4xl font-bold text-gray-700 md:text-8xl dark:text-gray-200">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="my-2 text-4xl font-bold text-gray-700 md:text-8xl dark:text-gray-200">
              Programmer.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="relative hidden w-full mt-20 -mr-40 lg:block md:3/5 lg:w-1/2">
        <div className="lg:w-[65%] xl:w-3/4 ">
          <Image
            className="object-contain"
            src={userData.avatarUrl}
            alt="Me"
            width={624}
            height={467}
            blurDataURL="/avatar-blur.jpg"
            placeholder="blur"
          />
          <div className="flex flex-row justify-end mt-4 lg:relative lg:left-[-35px] xl:left-[-50px] 2xl:left-[-60px]">
            <div className="flex flex-row space-x-4">
              <p className="font-mono">That's me</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
