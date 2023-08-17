import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/footer";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/navbar";

export default function Admission() {
  return (
    <>
      <Head>
        <title>Admission | La Martiniere Girls' College</title>
      </Head>
      <main>
        <Navbar />
        <div className="relative bg-white z-[1] mt-14">
          <section className="relative bg-[url('https://drive.google.com/uc?export=view&id=1CUtu27EvB233JE92Dncz0R7yXTmmuSIA')]  bg-no-repeat bg-center bg-cover text-white inset-0 bg-black/20 py-36 px-0 ">
            <div className="container mx-auto px-4 lg:w-3/4 ">
              <div className="flex flex-col -mx-3">
                <div className="mx-auto sm:w-1/2 px-3 min-h-[1px]">
                  <h2 className="text-white relative tracking-[4px] text-center font-normal text-3xl mb-10 mx-0 font-montserrat uppercase">
                    Admission
                  </h2>
                  <div className="text-center text-base text-white  mb-20 -mt-8 italic font-volkhov leading-relaxed">
                    Building Brighter Futures with a Top-Notch Education
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-no-repeat bg-center bg-cover px-0 py-36 ">
            <div className="container mx-auto px-4 lg:w-3/4">
              <div className="flex flex-col -mx-3">
                <div className="text-center text-base text-white  mb-20 -mt-8 italic font-volkhov leading-relaxed">
                  <p className="font-montserrat text-darkblue  decoration-gold ">
                    Thank you for considering applying to La Martinière Girls
                    College. We value your decision in enhancing your ward's
                    education and future. Please note, not all qualified
                    applicants will have the opportunity to enroll. Selection is
                    not guaranteed. Each year, the College receives far more
                    applications from individuals who meet the minimum
                    qualifications for admission than we can accept. You are
                    encouraged to apply to other institutions as well. Please
                    review the Admissions Considerations before beginning the
                    application.
                  </p>
                </div>
                <h2 className="text-darkblue underline decoration-gold relative tracking-[4px] text-center font-normal text-3xl  mt-0 mb-10 mx-0 font-montserrat ">
                  <strong>
                    Admission Policy: Day Scholar/Resident Scholar
                  </strong>
                </h2>
                <ul className="list-disc">
                  <li className="list-item ">
                    Our annual admissions for new students are for Lower
                    Preparatory only. New students for other classes may apply
                    for all class levels except Classes X and XII. For classes
                    Upper Prep to Class IX, the number of openings depends
                    entirely upon available vacancies. FYI: Typically, there are
                    1-3 vacancies for a class, if at all.
                  </li>
                  <li className="list-item ">
                    A sibling currently enrolled as a student in La Martinière
                    Girls’ College or La Martinière College does not guarantee
                    admission of a candidate in Lower Preparatory or any other
                    class.{" "}
                  </li>
                  <li className="list-item ">
                    Being a member of the La Martinière Girls’ Alumni
                    Association or La Martinière Girls’ Association does not
                    guarantee admission into the College.
                  </li>
                </ul>
                <br />
                <br />
                <br />
                <h2 className="text-darkblue underline decoration-gold relative tracking-[4px] text-center font-normal text-3xl  mt-0 mb-10 mx-0 font-montserrat ">
                  <strong>
                    Please respect the values by which we conduct business at
                    our Institution.
                  </strong>
                </h2>
                <ul className="list-disc">
                  <li className="list-item ">
                    The College states categorically that it does not accept
                    donations or contributions (monetary or in-kind) for
                    admissions.
                  </li>
                  <li className="list-item ">
                    No person or group is authorized to collect or receive
                    donations or any kind of compensation for admissions. Any
                    such solicitation must be reported to the school Principal
                    immediately.
                  </li>
                  <li className="list-item ">
                    The Principal views with great distaste any form of
                    influence used for getting your child admitted at La
                    Martinière Girls College. This includes letters of
                    recommendations from eminent persons, personal contacts,
                    courtesy calls and any reference to personal acquaintance
                    and friendships.
                  </li>
                  <li className="list-item ">
                    Please note that while courtesy shall be extended, it would
                    not be in the interest of the candidate for any kind of
                    benign influence to be exercised.
                  </li>
                </ul>
                <br />
                <br />
                <br />
                <div className="mx-auto sm:w-1/2 px-3 "></div>
              </div>
              <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="text-xl text-gray-950 flex justify-center items-center ">
                      {/* <span className="icon-document" /> */}
                      <DocumentTextIcon className="h-14 w-16 " />
                    </div>
                    <h3 className="font-montserrat uppercase tracking-[2px] font-normal text-sm text-gray-950 mt-4 mb-[15px] mx-0">
                      <a href="#">Lower and Upper Preparatory</a>
                    </h3>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="text-xl text-gray-950 flex justify-center items-center ">
                      <DocumentTextIcon className="h-14 w-16 " />
                    </div>
                    <h3 className="font-montserrat uppercase tracking-[2px] font-normal text-sm text-gray-950 mt-4 mb-4 mx-0 leading-[1.4]">
                      <a href="#">Class IX and XI</a>
                    </h3>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="text-xl text-gray-950 flex justify-center items-center ">
                      <DocumentTextIcon className="h-14 w-16 " />
                    </div>
                    <h3 className="font-montserrat uppercase tracking-[2px] font-normal text-sm text-gray-950 mt-4 mb-[15px] mx-0">
                      <a href="#">View Fee Structure</a>
                    </h3>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="text-xl text-gray-950 flex justify-center items-center ">
                      <DocumentTextIcon className="h-14 w-16 " />
                    </div>
                    <h3 className="font-montserrat uppercase tracking-[2px] font-normal text-sm text-gray-950 mt-4 mb-[15px] mx-0">
                      <a href="#">View College Fees</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
