import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Academics() {
  return (
    <>
      <Head>
        <title>Academics | La Martiniere Girls' College</title>
      </Head>
      <main>
        <Navbar />
        <div className="relative bg-white z-[1] mt-14">
          <section className="relative bg-[url('https://drive.google.com/uc?export=view&id=1CUtu27EvB233JE92Dncz0R7yXTmmuSIA')]  bg-no-repeat bg-center bg-cover text-white inset-0 bg-black/20 py-36 px-0 ">
            <div className="container mx-auto px-4 lg:w-3/4 ">
              <div className="flex flex-col -mx-3">
                <div className="mx-auto sm:w-1/2 px-3 min-h-[1px]">
                  <h2 className="text-white relative tracking-[4px] text-center font-normal text-3xl mb-10 mx-0 font-montserrat uppercase">
                    Academics
                  </h2>
                  <div className="text-center text-base text-white  mb-20 -mt-8 italic font-volkhov leading-relaxed">
                    A Supportive Environment for Academic Excellence{" "}
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
                    For over 150 years, La Martinière Girls’ College has been
                    committed to academic excellence for girls. Today, La
                    Martinière is at the forefront of 21st-century education
                    with real-life experiences and leadership opportunities
                    integrated into the curriculum. At the core, we offer a
                    rigorous and challenging curriculum designed to excel in
                    Board Examinations (ICSE & ISC XII) with the skills and
                    knowledge needed to navigate contemporary times. Our expert
                    team of teachers cultivate intellectual curiosity. They
                    inspire, challenge and prepare the students not only for
                    college but for a lifetime of learning, leading, and doing.
                    Students take a hands-on, active approach to their education
                    so that they can apply what they learn to real-life
                    situations.
                  </p>
                </div>
                <h2 className="text-darkblue underline decoration-gold relative tracking-[4px] text-center font-normal text-3xl  mt-0 mb-10 mx-0 font-montserrat ">
                  <strong>Subjects Offered</strong>
                </h2>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
