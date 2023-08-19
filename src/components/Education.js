import React from "react";

import {LibraryIcon} from "@heroicons/react/solid";
export default function Education() {
  return (
    <section id="education" className="relative">
        <div className="container px-5 py-10 mx-auto ">
            <div className="text-center mb-5">
                <LibraryIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Education
                </h1>
                
                <div class="flex-1  m-10 ml-4 z-10 font-medium">
                    <h3 class="mb-3 font-bold text-white text-2xl">Mumbai University</h3>
                    <p class="pb-4 text-sm text-gray-100">2010-2014</p>
                    <p class="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">B.E.(Computer Engineering)</p>
                </div>
            
            </div>
        </div>
    </section>
  );
}