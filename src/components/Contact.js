
import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
export default function Contact() {
  return (
    <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto ">
            <div className="text-center mb-5">
                <ChipIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Contact
                </h1>
            <div className="bg-gray-850 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS:
              </h2>
              <p className="mt-1">
                Banglore, 560035 <br />
                Karnataka (KA), India.
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL:
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                patil.priyu26@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE:
              </h2>
              <p className="leading-relaxed">+91-7702134347</p>
            </div>
          </div>
        </div>
        </div>
        
    </section>
  );
}