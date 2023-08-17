import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function HistoryAffiliations() {
  return (
    <>
      <Head>
        <title>
          School's History and It's Affiliations | La Martiniere Girls' College
        </title>
      </Head>
      <main>
        <Navbar />
        <div className="relative bg-white z-[1] mt-14">
          <section className="relative bg-[url('https://drive.google.com/uc?export=view&id=1P45rfoDULaqUa8bZ4MG_CxmPXJaEX2ad')]  bg-no-repeat bg-center bg-cover text-white inset-0 bg-black/20 py-36 px-0 ">
            <div className="container mx-auto px-4 lg:w-3/4 ">
              <div className="flex flex-col -mx-3">
                <div className="mx-auto sm:w-1/2 px-3 min-h-[1px]">
                  <h2 className="text-white relative tracking-[4px] text-center font-normal text-3xl mb-10 mx-0 font-montserrat uppercase">
                    School's History and It's Affiliations
                  </h2>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-no-repeat bg-center bg-cover px-0 py-20 ">
            <div className="container mx-auto px-4 lg:w-3/4">
              <div className="flex flex-col -mx-3">
                <h2 className="text-darkblue underline decoration-gold relative tracking-[4px] text-center font-normal text-3xl  mt-0 mb-10 mx-0 font-montserrat ">
                  <strong>School's History & its Affiliations </strong>
                </h2>
                <p>
                  La Martiniere Girls’ College, Lucknow, was established in Moti
                  Mahal premises in 1869 with less than a 100 students and
                  staff. Today, it has 2700 students (110 boarders) and 247
                  staff. It has always ranked as one of the leading schools of
                  India, and academically, since 2015, it has consistently been
                  rated in the top 10 all-girls boarding schools of India.
                  <br />
                  The Founder, Major General Claude Martin (5th January, 1735 –
                  13th September, 1800) was an officer in the French, and later
                  the British, army in India. He rose to the position of Major
                  General in the British East India Company's Bengal Army. Born
                  in Lyon, France, he came from a humble background. He was a
                  self-made man who left a substantial legacy in the form of his
                  writings, buildings and educational institutions that he
                  founded posthumously.
                  <br />
                  Claude Martin left the greater part of his wealth to a variety
                  of charities. Being almost entirely self-educated, he realised
                  the value of a formal education and set aside a vast portion
                  of his estate for the founding of schools at Kolkata, Lucknow
                  and Lyon (France), the city of his birth. These schools play a
                  major role in training the youth of today to become educated,
                  disciplined and useful citizens of the world. Thousands who
                  have passed through these schools are deeply grateful for
                  Claude Martin’s generosity and foresight. The schools
                  celebrate Founder's Day on 13th September, the anniversary of
                  Claude Martin's death.
                  <br />
                  La Martiniere Girls' College is affiliated to the Council for
                  the Indian School Certificate Examination.
                </p>
                <br />
                <br />
                <br />

                <div className="mx-auto sm:w-1/2 px-3 "></div>
              </div>
            </div>
          </section>
          <section className="relative bg-no-repeat bg-center bg-cover px-0 py-36 pt-0 pb-0">
            <div className="flex flex-col relative m-0">
              <div className="flex w-full lg:w-6/12 bg-[url('https://drive.google.com/uc?export=view&id=1CUtu27EvB233JE92Dncz0R7yXTmmuSIA')] relative  lg:absolute lg:h-full h-80 bg-no-repeat bg-center bg-cover"></div>
              <div className="md:px-16 md:py-36 py-36  bg-white border-t-neutral-200 border-b-neutral-200  border-t border-solid border-b px-4">
                <div className="flex flex-col -mt-8  ">
                  <div className="w-full lg:w-6/12 lg:ml-auto md:px-16 md:py-36 ">
                    <div className="text-left  text-gray-950  text-base mb-20  italic font-volkhov leading-relaxed ">
                      Student to Teacher Ratio
                      <br />
                      <p>The present Student to Teacher ratio is 18:1.</p>
                      <br />
                      Student to Space Ratio
                      <br />
                      <p>Average Space ratio to student is 14 sq.feet.</p>
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
