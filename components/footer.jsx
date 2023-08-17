import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  MapPinIcon,
  GlobeAsiaAustraliaIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
// import {} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <>
      <div>
        <div className="bg-neutral-900  relative bg-no-repeat bg-center bg-cover px-0 py-20">
          <div className="container mx-auto px-4 lg:w-3/4">
            <div className="flex flex-col md:flex-row md:gap-3 -mx-4">
              <div className="md:w-1/4 sm:w-1/3 px-2">
                <div className="mb-8 text-white text-xs mt-0 ">
                  <h5 className="text-gold font-montserrat border-b border-dotted border-b-gray-300 text-sm mt-0 mb-4 mx-0 pt-0 pb-2.5 px-0 uppercase tracking-[2px] ">
                    Contact Us
                  </h5>
                  <p className="py-2 mb-2 ml-2 flex flex-row">
                    <MapPinIcon className="h-5 w-5" />
                    &nbsp;La Martiniere Girls' College, 1-Rana Pratap
                    Marg-226001
                  </p>
                  <p className="py-2 mb-2 ml-2 flex flex-row">
                    <PhoneIcon className="h-3 w-3" />
                    &nbsp;7570000131, 7570000132
                  </p>
                  <p className="py-2 mb-2 ml-2 flex flex-row">
                    <GlobeAsiaAustraliaIcon className="h-4 w-3" />
                    &nbsp;lmgclko@gmail.com (for official use)
                    <br />
                    lmgcweb@gmail.com (for website use)
                  </p>
                  <p className="py-2 mb-2 ml-2 flex flex-row">
                    <ClockIcon className="h-4 w-4" />
                    &nbsp;10:00 am to 1:00 pm &amp; 2:00 pm to 3:00 pm
                  </p>
                </div>
              </div>
              <div className="md:w-1/4 sm:w-1/3 px-2 ">
                <div className="mb-8 text-neutral-400 text-xs mt-0">
                  <h5 className="text-gold font-montserrat border-b border-dotted border-b-gray-300 text-sm mt-0 mb-4 mx-0 pt-0 pb-2.5 px-0 uppercase tracking-[2px] ">
                    About School
                  </h5>
                  <ul className="m-0 p-0 list-none">
                    <li className="px-0 py-2 hover:text-gray-200 ">
                      <Link href="/aboutUs/ourLegacy" className="before:pr-1 ">
                        &#187; Our Legacy
                      </Link>
                    </li>
                    <li className="px-0 py-2 hover:text-white">
                      <Link href="/aboutUs/whoAreWe" className="before:pr-1">
                        &#187; Who we are
                      </Link>
                    </li>
                    <li className="px-0 py-2 hover:text-white">
                      <Link
                        href="/homeAway/studentHomeLife"
                        className="before:pr-1"
                      >
                        &#187; Student Home Life
                      </Link>
                    </li>
                    <li className="px-0 py-2 hover:text-white">
                      <Link
                        href="/footerPages/healthWellBeing"
                        className="before:pr-1"
                      >
                        &#187; Health &amp; Wellbeing
                      </Link>
                    </li>
                    <li className="px-0 py-2 hover:text-white">
                      <Link
                        href="/homeAway/keepingInTouch"
                        className="before:pr-1"
                      >
                        &#187; Keeping In Touch
                      </Link>
                    </li>
                    <li className="px-0 py-2 hover:text-gray-200">
                      <Link href="events/fromTheCampus" className="before:pr-1">
                        &#187; From The Campus
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/4 sm:w-1/3 px-2">
                <div className="mb-8 text-neutral-400 text-xs mt-0">
                  <h5 className="text-gold font-montserrat border-b border-dotted border-b-gray-300 text-sm mt-0 mb-4 mx-0 pt-0 pb-2.5 px-0 uppercase tracking-[2px] ">
                    Other Links
                  </h5>
                  <ul className="m-0 p-0 list-none">
                    <li className="px-0 py-2 hover:text-white">
                      <Link href="/aboutUs/admission" className="before:pr-1">
                        &#187; Admissions
                      </Link>
                    </li>
                    <li className="px-0 py-2 hover:text-white">
                      <Link href="/aboutUs/academics" className="before:pr-1">
                        &#187; Academics
                      </Link>
                    </li>
                    <li className="px-0 py-2 hover:text-white">
                      <Link
                        href="/aboutUs/beyoundAcademics"
                        className="before:pr-1"
                      >
                        &#187; Beyond Academics
                      </Link>
                    </li>
                    <li className="px-0 py-2 hover:text-white">
                      <Link href="homeAway/homeAway" className="before:pr-1">
                        &#187; Home Away From Home
                      </Link>
                    </li>
                    <li className="px-0 py-2 hover:text-white">
                      <Link href="/alumni/contribute" className="before:pr-1">
                        &#187; Alumni
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/4 sm:w-1/3 px-2 ">
                <div className="mb-8 text-neutral-400 text-xs mt-0">
                  <h5 className="text-gold font-montserrat border-b border-dotted border-b-gray-300 text-sm mt-0 mb-4 mx-0 pt-0 pb-2.5 px-0 uppercase tracking-[2px] ">
                    Policies
                  </h5>
                  <ul className="m-0 p-0 list-none">
                    <li className="px-0 py-2 hover:text-white">
                      <Link
                        href="/footerPages/privacyPolicy"
                        className="before:pr-1"
                      >
                        &#187; Privacy Policy
                      </Link>
                    </li>
                    <li className="px-0 py-2 hover:text-white">
                      <Link
                        href="footerPages/refundPolicy"
                        className="before:pr-1"
                      >
                        &#187; Refund Policy
                      </Link>
                    </li>
                    <li className="px-0 py-2 hover:text-white">
                      <Link
                        href="/footerPages/termsCondition"
                        className="before:pr-1"
                      >
                        &#187; Terms &amp; Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="m-0 border-t-neutral-800 border-t border-solid " />
            <br />
            <div className="flex items-center justify-center mt-2">
              {/* <Image
                src="/topsname.png"
                alt="La Martiniere Girls College"
                height={40}
                width={450}
              /> */}
              <img
                src="https://drive.google.com/uc?export=view&id=1dNEJsfxfNwgRecpLS1UFJHrSr5N_kJ54"
                alt="topsname"
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
        <hr className="m-0 border-t-neutral-800 border-t border-solid" />
        <footer className="py-3 px-0 bg-neutral-900">
          <div className="container mx-auto px-4 lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              <div className="w-full sm:w-auto text-white">
                <p className="m-0 text-center sm:text-start uppercase tracking-[2px] font-montserrat">
                  © 2021&nbsp;
                  <Link href="index.html" className="text-gold">
                    La Martiniere Girls' College
                  </Link>
                  <br />
                  All Rights Reserved || Designed at
                  <Link href="https://fibrux.net/" className="text-neutral-400">
                    Fibrux
                  </Link>
                </p>
              </div>
              <div className="w-full sm:w-auto text-neutral-400">
                <div className="text-right text-white">
                  <Link
                    href="https://www.facebook.com/LMGCLko/"
                    className="inline-block px-1.5 py-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="white"
                      viewBox="0 0 100 100"
                    >
                      <path d="M50 1.8C23.6 1.8 2.3 23.1 2.3 49.5c0 15.7 9.1 29.2 22.3 35.8V61.7h-6.4V49.5h6.4v-7.2c0-6.4 3.8-9.9 9.6-9.9 2.8 0 5.8.5 5.8.5v6.4h-3.3c-3.2 0-4.2 2-4.2 4.1v4.9h7.2l-1.1 12.2h-6.1V85.3c13.1-6.6 22.3-20.2 22.3-35.8 0-26.4-21.3-47.7-47.7-47.7"></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/lamartinieregirlscollege/"
                    className="inline-block px-1.5 py-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="20"
                      fill="white"
                      viewBox="0 0 100 100"
                    >
                      <path d="M67.9 100H32.1C14.4 100 0 85.6 0 67.9V32.1C0 14.4 14.4 0 32.1 0h35.8C85.6 0 100 14.4 100 32.1v35.8C100 85.6 85.6 100 67.9 100zM50 9.4C27.3 9.4 9.4 27.3 9.4 50c0 22.7 17.9 40.6 40.6 40.6 22.7 0 40.6-17.9 40.6-40.6 0-22.7-17.9-40.6-40.6-40.6zm30.3 57.8c0 1.7-1.3 3-3 3H23.7c-1.7 0-3-1.3-3-3V44.6h7.5c-.4 1.1-.6 2.3-.6 3.5 0 10.4 8.5 18.9 18.9 18.9 10.4 0 18.9-8.5 18.9-18.9 0-1.2-.1-2.4-.6-3.5h7.5v22.6z" />
                      <path d="M50 22.8c-15.1 0-27.2 12.1-27.2 27.2S34.9 77.1 50 77.1s27.2-12.1 27.2-27.2S65.1 22.8 50 22.8zm0 46.2c-11.5 0-20.9-9.4-20.9-20.9S38.5 27.2 50 27.2 70.9 36.6 70.9 48.1 61.5 69 50 69z" />
                      <circle cx="75.3" cy="24.7" r="4.7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
