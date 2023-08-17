import Head from "next/head";
import Footer from "@/components/footer";
import Link from "next/link";
import PageLoader from "@/components/pageLoader";
import React from "react";
import { useState } from "react";
import Navbar from "@/components/navbar";

export default function Home() {
  const title = "La Martiniere Girls' College";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        {/* loader */}

        {/* Navigation Bar */}
        <Navbar />

        {/* background video image  */}
        <section
          // style={{ backgroundImage: "url('/about_bg.jpg')" }}
          className="relative bg-white w-full z-0 bg-cover bg-[url('https://drive.google.com/uc?export=view&id=1P45rfoDULaqUa8bZ4MG_CxmPXJaEX2ad')] bg-no-repeat bg-center text-white block h-screen"
        >
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover fixed top-0 left-0"
          >
            <source
              src="https://drive.google.com/uc?export=view&id=1wPmfublru9Bphd0G8jhQrekcEXbiOfZR"
              type="video/mp4"
            />
          </video>

          <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="table-cell align-middle text-center">
              <div className="font-montserrat uppercase  mb-8 text-base tracking-wider"></div>
              <br />
              <br />
              <div className="font-montserrat uppercase tracking-[10px] mb-10 text-3xl">
                <img
                  src="https://drive.google.com/uc?export=view&id=1dNEJsfxfNwgRecpLS1UFJHrSr5N_kJ54"
                  alt="topsname"
                  className="h-28 w-auto"
                />
                <br />
                <span className="rotate font-bold text-shadow-none">
                  <strong>Labore-et-Constantia</strong>
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="relative bg-white z-[1] mt-12">
          <section className="relative bg-no-repeat bg-center bg-cover px-0 py-36">
            <div className="w-full">
              <div className="container mx-auto px-4 lg:w-3/4 ">
                <div className="flex flex-col">
                  <div className="mb-5 ">
                    <h2 className="font-montserrat leading-[1.4] font-normal  text-darkblue underline decoration-gold text-3xl ">
                      <strong>From the Principal's Desk</strong>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 mt-5 mb-1 gap-8 lg:gap-8 ">
                    <div className="lg:col-span-1 ">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1VWGQswfvt4Vomt5lsTlJtCkmLwbIiWB1"
                        alt="homepage"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="lg:col-span-3">
                      <p className="font-montserrat text-sm pb-5 text-justify leading-relaxed tracking-wide">
                        Our college is premised on a vision that through
                        education we discover the world and contribute to its
                        transformation. We believe that education is best
                        pursued in the company of others, for others' benefit as
                        well as one's own. We at La Martniere Girls College do
                        our best to mould young girls of today into educated,
                        courageous and confident women of tomorrow. We welcome
                        each student with open arms and ensure that they learn
                        from the best of faculty and grow in a safe, warm and
                        homely environment. So, whether you are alumni or an old
                        friend of the school, a parent considering our
                        institution for your child, or a prospective student
                        exploring a place to bring your talents and dreams, it
                        is a privilege to welcome you to a place which hundreds
                        of students call their home. A place that allows you to
                        soar as high as you can but at the same time grounds you
                        and teaches you the spirit of teamwork, empathy and
                        compassion, we welcome you to an institution which
                        accepts each student for their unique self, an
                        institution which gives young girls new hope and helps
                        them to turn their dreams into reality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-right">
                  <div className="mb-5 ">
                    <h2 className="font-montserrat leading-[1.4] font-normal  text-darkblue underline decoration-gold text-3xl ">
                      <strong>Foundation of the College</strong>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 mt-5 mb-1 gap-8 lg:gap-8 ">
                    <div className="lg:col-span-3">
                      <p className="font-montserrat text-sm pb-5 text-justify leading-relaxed tracking-wide">
                        Our founder, Major General Claude Martin was born in
                        Lyon, France in 1735. Being self-educated and possessing
                        a great love for children, Claude Martin realised the
                        importance of formalized education. He set aside a vast
                        portion of his estate for the founding of schools at
                        Lucknow, Calcutta and Lyon. These schools would bear the
                        name of La Martiniere and work towards educating
                        children regardless of their religion, caste and creed
                        The Lucknow Girls' School, as it was then known, was run
                        by Mrs. Saunders Abbott. Following a land grant from the
                        government, the school was moved to its present location
                        at Khursheed Manzil in 1871 and incorporated and
                        established as a branch of La Martinière. La Martiniere
                        Girls' College pays homage to the rich history of
                        Lucknow; its very own building, the Khursheed Manzil
                        (the Palace of the Sun) was the stronghold for the
                        British troops during the Mutiny of 1857. Even after 150
                        years La Martiniere Girls College still works on the
                        principles of charity and selfless service to humanity
                        by training young minds to become empathetic, kind and
                        do their part in making this world a better place.
                      </p>
                    </div>
                    <div className="lg:col-span-1 ">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1Jz1FRxvqReE9ca3sKnQ0vxMqf8NayGi4"
                        alt="homepage2"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mt-5 mb-3 ">
                    <h2 className="font-montserrat leading-[1.4] font-normal  text-darkblue underline decoration-gold text-3xl ">
                      <strong>Our Legacy</strong>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 mt-5 mb-1 gap-8 lg:gap-8 ">
                    <div className="lg:col-span-1 ">
                      <img
                        src="https://drive.google.com/uc?export=view&id=120TxrCt60o_-s0LWVI1MeK_HXq25b6Ze"
                        alt="homepage"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="lg:col-span-3">
                      <p className="font-montserrat text-sm pb-5 text-justify leading-relaxed tracking-wide">
                        La Martiniere Girls’ College, Lucknow, started in Moti
                        Mahal premises in 1869 with less than 100 students and
                        staff. Today, it has 2700 students (110 boarders) and
                        247 staff. It has always ranked as one of the leading
                        schools in India. And since 2015, academically it has
                        consistently been rated in the top 10 all-girls boarding
                        schools in India. The college retained the 1st spot in
                        the state and the 5th spot in the country for the
                        seventh consecutive year according to the Indian School
                        Ranking, 2022-23 by Education World. The institution
                        continues to strive for perfection in the academic field
                        and scale new heights by teaching its students the
                        importance of hard work, dedication and perseverance. We
                        at La Martiniere Girls College help each student to do
                        the best they can and ensure that we celebrate their
                        smallest of victories thus giving them a sense of pride
                        and achievement and the motivation to accomplish
                        success.
                      </p>
                    </div>
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
