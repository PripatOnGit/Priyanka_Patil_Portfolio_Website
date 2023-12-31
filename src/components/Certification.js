import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { certification, skills } from "../data";

export default function Certification() {
  return (
    <section id="certification">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Certifications         
            </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {certification.map((certification) => (
            <div key={certification} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <div class="  space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-11/12 px-6 py-4">
                       <h3 class="mb-3 font-bold text-white text-2xl">{certification.name}</h3>
                       <p class="pb-4 text-md text-gray-100">{certification.issuedby}</p>
                       <hr></hr>
                       <p class="text-md font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">{certification.description}</p>
                       <p><a href={certification.Credentials} class="text-white bg-green-500 hover:bg-green-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600  focus:outline-none dark:focus:ring-blue-800" target="_blank"> Certificate </a></p>
                       
                   </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
