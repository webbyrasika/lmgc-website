import React from "react";
import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-darkblue fixed top-0 w-full py-4 z-50 ">
        <div className="mx-auto container" style={{ width: "80%" }}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center flex-row-reverse gap-8 ">
              <button
                className="block md:hidden text-white focus:outline-none"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Bars3Icon className="w-8 h-10 " />
              </button>
              <Link
                href="/"
                className="md:ml-2 text-white text-lg font-semibold"
              >
                <img
                  src="https://drive.google.com/uc?export=view&id=196i4tTqYC9pYKXVI9JOleazkc2I4dIHz"
                  alt="LMGC"
                  className="h-[70px] w-36"
                />
              </Link>
            </div>
            {isOpen && (
              <div className="md:hidden max-h-80 overflow-y-auto block px-2 space-y-2 overflow-x-visible font-roboto-condensed uppercase font-bold text-[11px] ">
                <ul className="md:space-x-8 text-neutral-400 space-y-2 tracking-[3px] ">
                  <li className="hover:text-white">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:text-white">
                    <Link
                      href="https://lmgc.vortexapplabs.com/login"
                      target="_blank"
                    >
                      Lower Prep Admission 2022-23
                    </Link>
                  </li>
                  <li className="hover:text-white">
                    <Link
                      href="https://lmgcfees.thincomputers.org/"
                      target="_blank"
                    >
                      Pay Online
                    </Link>
                  </li>
                  <li className="hover:text-white">
                    <Link
                      href="https://drive.google.com/uc?export=view&id=12j9e0lXmx9cbqkTE--Y7qVe-zRW3MdTX"
                      target="_blank"
                    >
                      School Uniform
                    </Link>
                  </li>
                  <li className="hover:text-white">
                    <Link
                      href="https://drive.google.com/uc?export=view&id=14Lfw7FXPRCQckhHkdhcYOwUrRdSihKP1"
                      target="_blank"
                    >
                      Booklist
                    </Link>
                  </li>
                </ul>
                <ul className=" md:space-x-8 text-neutral-400 space-y-2 tracking-[3px]">
                  <li className="group relative hover:text-white">
                    <button className="flex gap-1 tracking-[3px]">
                      ABOUT US
                      <ChevronDownIcon className="h-5 w-3 text-white" />
                    </button>

                    <ul className="absolute uppercase bg-neutral-900/90 text-neutral-400 tracking-[3px] hidden group-hover:block group-hover:left-0 group-hover:z-10 shadow-none p-0 rounded-none border-0 w-48">
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/aboutUs/ourLegacy"> Our Legacy</Link>
                      </li>{" "}
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/aboutUs/whoAreWe"> Who are we</Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/aboutUs/specialEducation">
                          Special Education
                        </Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/aboutUs/admission">Admission</Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/aboutUs/academics">Academics</Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/aboutUs/beyoundAcademics">
                          Beyound Academics
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group relative hover:text-white">
                    <button className="flex gap-1 tracking-[3px]">
                      HOME AWAY FROM HOME
                      <ChevronDownIcon className="h-5 w-3 text-white" />
                    </button>

                    <ul className="absolute uppercase bg-neutral-900/90 text-neutral-400 tracking-[3px] hidden group-hover:block group-hover:left-0 group-hover:z-10 shadow-none p-0 rounded-none border-0 w-48">
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/homeAway/studentsHomeLife">
                          STUDENTS HOME LIFE
                        </Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/homeAway/healthAndWellbeing">
                          HEALTH AND WELLBEING
                        </Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/homeAway/keepingInTouch">
                          KEEPING IN TOUCH
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group relative hover:text-white">
                    <button className="flex gap-1 tracking-[3px]">
                      EVENTS
                      <ChevronDownIcon className="h-5 w-3 text-white" />
                    </button>
                    <ul className="absolute uppercase bg-neutral-900/90 text-neutral-400 tracking-[3px] hidden group-hover:block group-hover:left-0 group-hover:z-10 shadow-none p-0 rounded-none border-0 w-48">
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/events/lmgaaEvents">
                          ALUMINI/CONTRIBUTE
                        </Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/events/outstandingAlumini">
                          OUTSTANDING ALUMINI
                        </Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/events/fromTheCampus">
                          FROM THE CAMPUS
                        </Link>
                      </li>

                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/events/donateContribute">
                          DONATE/CONTRIBUTE
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group relative hover:text-white">
                    <button className="flex gap-1 tracking-[3px]">
                      FEE ACT 2018
                      <ChevronDownIcon className="h-5 w-3 text-white" />
                    </button>

                    <ul className="absolute uppercase bg-neutral-900/90 text-neutral-400 tracking-[3px] hidden group-hover:block group-hover:left-0 group-hover:z-10 shadow-none p-0 rounded-none border-0 w-60 ">
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="/fee/historyAffiliations">
                          School's History & its Affiliations
                        </Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="https://drive.google.com/uc?export=view&id=156_QYH7vLNXRYCGOCWJlVt3Nc7T8-I-p">
                          Fee Structure
                        </Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="https://drive.google.com/uc?export=view&id=1dJk_EpTUdHp4W2V9StaRv7RyoTGxUiD4">
                          Salaries of Teachers Employed
                        </Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="https://drive.google.com/uc?export=view&id=1C2rV5ykwd-H3YjkvMWDGLZQxt52816sZ">
                          Admission Policy Day Scholar/Resident Scholar
                        </Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="https://drive.google.com/uc?export=view&id=1GwUBcInSF1ygJzgv9PYnk5QEOdwxS0Sl">
                          Sports Facilities & Co-Curricular Activities
                        </Link>
                      </li>
                      <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                        <Link href="https://drive.google.com/uc?export=view&id=1bJ2U3lw1mAGIJpCmBp4V_YeTu0XI13Zv">
                          Annual Planner
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="hover:text-white tracking-[3px]">
                    <a
                      href="https://drive.google.com/uc?export=view&id=15Yw69gt1rBoHcmvWO89zp5CFFcQdcz52"
                      target="_blank"
                    >
                      RULES
                    </a>
                  </li>
                </ul>
              </div>
            )}

            <div className="hidden md:block relative font-roboto-condensed uppercase font-bold text-[11px] ">
              <ul className="flex space-x-4 text-neutral-400 -mr-4 pb-2 tracking-[3px] ">
                <li className="hover:text-white">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-white">
                  <Link
                    href="https://lmgc.vortexapplabs.com/login"
                    target="_blank"
                  >
                    Lower Prep Admission 2022-23
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link
                    href="https://lmgcfees.thincomputers.org/"
                    target="_blank"
                  >
                    Pay Online
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link
                    href="https://drive.google.com/uc?export=view&id=12j9e0lXmx9cbqkTE--Y7qVe-zRW3MdTX"
                    target="_blank"
                  >
                    School Uniform
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link
                    href="https://drive.google.com/uc?export=view&id=14Lfw7FXPRCQckhHkdhcYOwUrRdSihKP1"
                    target="_blank"
                  >
                    Booklist
                  </Link>
                </li>
              </ul>
              <ul className="flex space-x-4 text-neutral-400  mr-0 py-2 ml-10 tracking-[3px]">
                <li className="group relative hover:text-white">
                  <button className="flex gap-1 tracking-[3px]">
                    ABOUT US
                    <ChevronDownIcon className="h-5 w-3 text-white" />
                  </button>

                  <ul className="absolute uppercase bg-neutral-900/90 text-neutral-400 tracking-[3px] hidden group-hover:block group-hover:left-0 group-hover:z-10 shadow-none p-0 rounded-none border-0 w-48">
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/aboutUs/ourLegacy"> Our Legacy</Link>
                    </li>{" "}
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/aboutUs/whoAreWe"> Who are we</Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/aboutUs/specialEducation">
                        Special Education
                      </Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/aboutUs/admission">Admission</Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/aboutUs/academics">Academics</Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/aboutUs/beyoundAcademics">
                        Beyound Academics
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative hover:text-white">
                  <button className="flex gap-1 tracking-[3px]">
                    HOME AWAY FROM HOME
                    <ChevronDownIcon className="h-5 w-3 text-white" />
                  </button>

                  <ul className="absolute uppercase bg-neutral-900/90 text-neutral-400 tracking-[3px] hidden group-hover:block group-hover:left-0 group-hover:z-10 shadow-none p-0 rounded-none border-0 w-48">
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/homeAway/studentsHomeLife">
                        STUDENTS HOME LIFE
                      </Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/homeAway/healthAndWellbeing">
                        HEALTH AND WELLBEING
                      </Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/homeAway/keepingInTouch">
                        KEEPING IN TOUCH
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative hover:text-white">
                  <button className="flex gap-1 tracking-[3px]">
                    EVENTS
                    <ChevronDownIcon className="h-5 w-3 text-white" />
                  </button>
                  <ul className="absolute uppercase bg-neutral-900/90 text-neutral-400 tracking-[3px] hidden group-hover:block group-hover:left-0 group-hover:z-10 shadow-none p-0 rounded-none border-0 w-48">
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/events/lmgaaEvents">ALUMINI/CONTRIBUTE</Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/events/outstandingAlumini">
                        OUTSTANDING ALUMINI
                      </Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/events/fromTheCampus">FROM THE CAMPUS</Link>
                    </li>

                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/events/donateContribute">
                        DONATE/CONTRIBUTE
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative hover:text-white">
                  <button className="flex gap-1 tracking-[3px]">
                    FEE ACT 2018
                    <ChevronDownIcon className="h-5 w-3 text-white" />
                  </button>

                  <ul className="absolute uppercase bg-neutral-900/90 text-neutral-400 tracking-[3px] hidden group-hover:block group-hover:right-0 group-hover:z-10 shadow-none p-0 rounded-none border-0 w-96 ">
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="/fee/historyAffiliations">
                        School's History & its Affiliations
                      </Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="https://drive.google.com/uc?export=view&id=156_QYH7vLNXRYCGOCWJlVt3Nc7T8-I-p">
                        Fee Structure
                      </Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="https://drive.google.com/uc?export=view&id=1dJk_EpTUdHp4W2V9StaRv7RyoTGxUiD4">
                        Salaries of Teachers Employed
                      </Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="https://drive.google.com/uc?export=view&id=1C2rV5ykwd-H3YjkvMWDGLZQxt52816sZ">
                        Admission Policy Day Scholar/Resident Scholar
                      </Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="https://drive.google.com/uc?export=view&id=1GwUBcInSF1ygJzgv9PYnk5QEOdwxS0Sl">
                        Sports Facilities & Co-Curricular Activities
                      </Link>
                    </li>
                    <li className=" hover:bg-neutral-600/100 tracking-[2px] text-[#999] px-4 py-3 border-b-[rgba(73,71,71,0.15)] border-b border-solid hover:text-white  ">
                      <Link href="https://drive.google.com/uc?export=view&id=1bJ2U3lw1mAGIJpCmBp4V_YeTu0XI13Zv">
                        Annual Planner
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="hover:text-white tracking-[3px]">
                  <a
                    href="https://drive.google.com/uc?export=view&id=15Yw69gt1rBoHcmvWO89zp5CFFcQdcz52"
                    target="_blank"
                  >
                    RULES
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
