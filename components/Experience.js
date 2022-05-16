import userData from "@constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="h-48 max-w-6xl mx-auto bg-white dark:bg-gray-800">
        <h1 className="py-20 text-5xl font-bold text-center md:text-9xl md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid max-w-xl grid-cols-1 pt-20 mx-auto dark:bg-gray-900">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="flex flex-col items-center -mt-2 divider-container">
                  <div className="relative z-10 w-4 h-4 bg-green-500 rounded-full">
                    <div className="relative z-10 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 -mt-2 bg-gray-200 rounded-full dark:bg-gray-500"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative z-10 p-4 mx-4 bg-white border rounded-md shadow-xl experience-card dark:bg-gray-800">
      <h1 className="absolute text-4xl font-bold text-gray-400 -top-10 md:-left-10 md:-top-10 dark:text-gray-800">
        {year}
      </h1>
      <h1 className="text-xl font-semibold">{title}</h1>
      <a href={companyLink} target={'_blank'} className="text-gray-500">
        {company}
      </a>
      <p className="my-2 text-gray-600 whitespace-pre-line dark:text-gray-400">{desc}</p>
    </div>
  );
};
