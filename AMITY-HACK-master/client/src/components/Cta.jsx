import React, { useState } from "react";

function Cta() {
  const [bpm, setBpm] = useState(1);
  const [loading, setLoading] = useState(false);
  const getBpm = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5001/bpm");
      if (!response.ok) {
        throw new Error("Failed to fetch BPM data");
      }
      const data = await response.json();
      setBpm(data.BPM);
    } catch (error) {
      console.error("Error fetching BPM:", error);
      setBpm(0); // Reset BPM to 0 in case of error
    } finally {
      setLoading(false);
    }
  };
  return (
    <section class="relative py-20 overflow-hidden">
      {bpm > 1 && (
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
          <div class="bg-white p-10 rounded-lg">
            <h2 class="text-2xl font-semibold text-gray-800 mb-5">
              Your Beats Per Minute
            </h2>
            <p class="text-4xl font-bold text-orange-900">{bpm}</p>
          </div>
          <button
            class="absolute top-0 right-0 p-4 text-2xl text-gray-800"
            onClick={() => setBpm(0)}
            >
            <svg
              width="24"
              height="24"
              viewbox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="#FF460C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        </button>
        </div>
        //button to close and reset bpm
        
      )}
      {loading && (
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
          <div class="bg-white p-10 rounded-lg">
            <h2 class="text-2xl font-semibold text-gray-800 mb-5">
              Calculating...
            </h2>
            <div class="loader"></div>
          </div>
        </div>
      )}

      <div class="relative container px-4 mx-auto">
        <div class="max-w-2xl lg:max-w-3xl xl:max-w-5xl xl:pr-20">
          <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-300 mb-10">
            <span>Check your Beats Per Minute</span>
            <span class="font-serif italic"> NOW</span>
            <span> with AI</span>
          </h1>
          <p class="max-w-xl text-base sm:text-xl text-gray-100 font-semibold mb-10">
            Nisi eu pellentesque felis volutpat aliquet pulvinar sed. Vitae
            fames vestibulum urna vel odio mauris urna orci est. Eget amet
            elementum fames nisl eu.
          </p>
          <div class="lg:flex items-center">
            <a
              class="relative group inline-block mb-12 lg:mb-0 md:mr-10 lg:mr-18 py-4 px-6 text-white font-semibold bg-orange-900 rounded-full overflow-hidden"
              href="#"
            >
              <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <div class="relative flex items-center justify-center">
                <span class="mr-4">Learn More</span>
                <button
                  class="transform scale-0 group-hover:scale-100 transition duration-500"
                  onClick={getBpm}
                >
                  Check Now
                </button>
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewbox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z"
                      fill="#FAFBFC"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>
            <div class="flex items-center">
              <p class="text-sm text-gray-600">
                Our office is always open to having you anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
