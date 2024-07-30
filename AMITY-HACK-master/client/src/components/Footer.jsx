import React from "react";

function Footer() {
  return (
    <section class="py-10 mt-30 mx-10">
      <div class="container px-4 mx-auto">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-wrap -mx-4 pb-28">
            <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div class="max-w-md mx-auto lg:mx-0">
                <h3 class="max-w-sm font-heading text-5xl md:text-6xl font-bold text-gray-300 mb-6">
                  <span>Ready to get</span>
                  <span class="font-serif italic"> started</span>
                  <span>?</span>
                </h3>
                <p class="max-w-sm text-gray-300 mb-16">
                  If there are questions you want to ask, we will answer all
                  your question
                </p>
                <div class="sm:flex mb-2 items-center">
                  <input
                    class="w-full mb-3 sm:mb-0 sm:mr-4 pb-4 bg-transparent border-b border-gray-200 text-sm text-gray-300 placeholder-gray-400 outline-none"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button
                    class="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden"
                    type="submit"
                  >
                    <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span class="relative">Subscribe</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <div class="max-w-md mx-auto lg:mr-0">
                <p class="text-2xl font-semibold text-gray-300 mb-16">
                  Maybe your question is have been answered, check this out.
                </p>
                <div class="pb-5 mb-5 border-b border-gray-200">
                  <a class="group flex items-center justify-between" href="#">
                    <span class="text-lg text-gray-300 group-hover:text-orange-900">
                      What is Nutritionist AI
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 5L21 12M21 12L14 19M21 12L3 12"
                          stroke="#FF460C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div class="pb-5 mb-5 border-b border-gray-200">
                  <a class="group flex items-center justify-between" href="#">
                    <span class="text-lg text-gray-300 group-hover:text-orange-900">
                      How can I get service from Nutritionist AI
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 5L21 12M21 12L14 19M21 12L3 12"
                          stroke="#FF460C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div>
                  <a class="group flex items-center justify-between" href="#">
                    <span class="text-lg text-gray-300 group-hover:text-orange-900">
                      What kind of service will I get
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 5L21 12M21 12L14 19M21 12L3 12"
                          stroke="#FF460C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-10 border-t border-gray-200">
            <div class="lg:flex items-center">
              <div class="flex mb-6 lg:mb-0 lg:mr-18 items-center">
                <a
                  class="inline-block mr-5 hover:bg-orange-50 rounded-md p-1"
                  href="#"
                >
                  <img src="./footers/icon-facebook.svg" alt="" />
                </a>
                <a
                  class="inline-block mr-5 hover:bg-orange-50 rounded-md p-1"
                  href="#"
                >
                  <img src="./footers/icon-instagram.svg" alt="" />
                </a>
                <a
                  class="inline-block mr-5 hover:bg-orange-50 rounded-md p-1"
                  href="#"
                >
                  <img src="./footers/icon-youtube.svg" alt="" />
                </a>
                <a
                  class="inline-block hover:bg-orange-50 rounded-md p-1"
                  href="#"
                >
                  <img src="./footers/icon-linkedin.svg" alt="" />
                </a>
              </div>
              <div class="flex mb-6 lg:mb-0 items-center">
                <a
                  class="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-300 hover:text-gray-600"
                  href="#"
                >
                  Privacy Policy
                </a>
                <a
                  class="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-300 hover:text-gray-600"
                  href="#"
                >
                  Terms & Conditions
                </a>
                <a
                  class="inline-block text-sm font-semibold text-gray-300 hover:text-gray-600"
                  href="#"
                >
                  Support
                </a>
              </div>
              <span class="inline-block ml-auto text-sm text-gray-300">
                © All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
