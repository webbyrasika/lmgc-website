import Head from "next/head";
import Footer from "@/components/footer";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function LiterarySkills() {
  return (
    <>
      <Head>
        <title>
          Beyond Academics- Literary Skills | La Martiniere Girls' College
        </title>
      </Head>
      <main>
        <Navbar />
        <div className="relative bg-white z-[1] mt-14">
          <section className="relative bg-[url('https://drive.google.com/uc?export=view&id=1CUtu27EvB233JE92Dncz0R7yXTmmuSIA')]  bg-no-repeat bg-center bg-cover text-white inset-0 bg-black/20 py-36 px-0 ">
            <div className="container mx-auto px-4 lg:w-3/4 ">
              <div className="flex flex-col -mx-3">
                <div className="mx-auto sm:w-1/2 px-3 min-h-[1px]">
                  <h2 className="text-white relative tracking-[4px] text-center font-normal text-3xl mb-10 mx-0 font-montserrat uppercase">
                    Beyond Academics
                  </h2>
                  <div className="text-center text-base text-white  mb-20 -mt-8 italic font-volkhov leading-relaxed">
                    Educating Girls of the 21st Century for a Brighter Tomorrow
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-no-repeat bg-center bg-cover px-0 py-36 ">
            <div className="container mx-auto px-4 md:w-3/4">
              <div className="flex flex-col -mx-4">
                <div className="text-center text-base text-white  mb-20 -mt-8 italic font-volkhov leading-relaxed">
                  <p className="font-montserrat text-darkblue  decoration-gold ">
                    We at La Martiniere Girls College along with focusing on
                    academics help our girls to become more attentive,
                    inquisitive and curious about their surrounding environment.
                    With the help of our clubs like Oratio, BEES, Quest and
                    Paracosm we instil in our students a sense of awareness and
                    .responsibility. These clubs teach and inspire them to
                    become better orators, public speakers, quizzers and help
                    them to become more sensitive and compassionate towards the
                    people around them. These clubs aid in shaping our girls
                    into better individuals who work with perseverance and
                    dedication to lead the world towards a bright future.
                  </p>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="box-content max-w-full h-auto">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1AViFXbzjXrWp-q2uEUN0QBpyZ6Bd2mCw
"
                        alt=""
                      />
                    </div>
                    <h5 className="font-montserrat decoration-black font-normal leading-4 my-3">
                      <b>
                        Oratio-The Debate Club
                        <br />
                        Teacher Incharge - Mrs. R. Bunny
                        <br />
                        Prefect - Aaratrika Tewari
                      </b>
                    </h5>
                    <p className="text-justify">
                      The Oratio Debate Club is a place for students to explore
                      the art of "organized arguing” and public speaking.
                      Students in this club are encouraged to discuss current
                      issues and if they don't already have a strong voice and
                      good presentation skills, they will learn these abilities
                      in a fun, environment.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="box-content max-w-full h-auto">
                      <img
                        src="https://drive.google.com/uc?export=view&id=10QsM8O3xLmMasmEkXgaFoSoY22tuNmmk
"
                        alt=""
                      />
                    </div>
                    <h5 className="font-montserrat decoration-black font-normal leading-4 my-3">
                      <b>
                        BEES
                        <br />
                        Teacher Incharge - Ms. I. Basu
                        <br />
                        Prefect - Diya Shukla
                      </b>
                    </h5>
                    <p className="text-justify">
                      The Better English Expression Society is one of La
                      Martiniere’s oldest clubs. Its job is to encourage the
                      students to speak in English and inculcate the habit of
                      reading. We organise multiple activities all year round
                      which help the girls enhance their vocabulary.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="box-content max-w-full h-auto">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1RlV8EouYM7XZ79gkVxaQ8_3mPIGaNg0E
"
                        alt=""
                      />
                    </div>
                    <h5 className="font-montserrat decoration-black font-normal leading-4 my-3">
                      <b>
                        QUEST- The GK Club
                        <br />
                        Teachers Incharge - Mrs. S. Tagore and Ms. S. Khan
                        <br />
                        Prefects - Shatakshi Khare, Naaila Siddiqi and Pankhuri
                        Varshney
                      </b>
                    </h5>
                    <p className="text-justify">
                      Quest, the G.K. Club aims at promoting a healthy and
                      competitive quizzing culture among the students. It
                      intends to nurture young, intellectual minds in their
                      'quest' for knowledge, to delve into the world of
                      limitless information.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="box-content max-w-full h-auto">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1OR7mGblWQ23cU_nlIeKVpGlU21lFrxAo
"
                        alt=""
                      />
                    </div>
                    <h5 className="font-montserrat decoration-black font-normal leading-4 my-3">
                      <b>
                        Paracosm- The Psychology Club
                        <br />
                        Teacher Incharge - Mrs. M. Kalra
                        <br />
                        Prefect - Sakshi Singh
                      </b>
                    </h5>
                    <p className="text-justify">
                      Paracosm Club is the Psychology Club of La Martiniere
                      Girls’ College. The word ‘Paracosm’ means a detailed
                      imaginary world created by a child. The club’s motto is
                      “Do not underestimate yourself by comparing yourself with
                      others. The theme of the club in 2023-24 is ‘Self
                      Acceptance ’.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
                <div className="">
                  <div className="relative text-center mb-5 mx-0 mt-0">
                    <div className="relative overflow-hidden">
                      <Link
                        className="relative"
                        href="https://drive.google.com/uc?export=view&id=1rMu0M2-t8ZOGe0x4NXa4O4j-u4cRz3La"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1rMu0M2-t8ZOGe0x4NXa4O4j-u4cRz3La"
                          alt="Gallery Image 4"
                          className="block w-full overflow-hidden"
                        />
                        <div className="gallery-caption">
                          <div className="gallery-icon">
                            <span className="icon-magnifying-glass" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="relative text-center mb-5 mx-0 mt-0">
                    <div className="relative overflow-hidden">
                      <Link
                        className="relative"
                        href="https://drive.google.com/uc?export=view&id=1pookgF1i311ZkSRO1wF3M9wulNEP2R69
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1pookgF1i311ZkSRO1wF3M9wulNEP2R69
"
                          alt="Gallery Image 5"
                        />
                        <div className="gallery-caption">
                          <div className="gallery-icon">
                            <span className="icon-magnifying-glass" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="relative text-center mb-5 mx-0 mt-0">
                    <div className="relative overflow-hidden">
                      <Link
                        className="relative"
                        href="https://drive.google.com/uc?export=view&id=1bmXcYmMo30pOyh8tZSIiJy9Apq-Tbzc3
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1bmXcYmMo30pOyh8tZSIiJy9Apq-Tbzc3
"
                          alt="Gallery Image 6"
                        />
                        <div className="gallery-caption">
                          <div className="gallery-icon">
                            <span className="icon-magnifying-glass" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="relative text-center mb-5 mx-0 mt-0">
                    <div className="relative overflow-hidden">
                      <Link
                        className="relative"
                        href="https://drive.google.com/uc?export=view&id=1Z4goEAK3aouysNmLY7idbh6C4U-j4swe
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1Z4goEAK3aouysNmLY7idbh6C4U-j4swe
"
                          alt="Gallery Image 7"
                        />
                        <div className="gallery-caption">
                          <div className="gallery-icon">
                            <span className="icon-magnifying-glass" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="relative text-center mb-5 mx-0 mt-0">
                    <div className="relative overflow-hidden">
                      <Link
                        className="relative"
                        href="https://drive.google.com/uc?export=view&id=1o8YZJBH5ldbb5q4LTngq7QKasUNBISYW
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1o8YZJBH5ldbb5q4LTngq7QKasUNBISYW
"
                          alt="Gallery Image 8"
                        />
                        <div className="gallery-caption">
                          <div className="gallery-icon">
                            <span className="icon-magnifying-glass" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="relative text-center mb-5 mx-0 mt-0">
                    <div className="relative overflow-hidden">
                      <Link
                        className="relative"
                        href="https://drive.google.com/uc?export=view&id=1ar8hCo9h9BCgobLjhfIN5Pl10iacxBVh
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1ar8hCo9h9BCgobLjhfIN5Pl10iacxBVh
"
                          alt="Gallery Image 12"
                        />
                        <div className="gallery-caption">
                          <div className="gallery-icon">
                            <span className="icon-magnifying-glass" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="relative text-center mb-5 mx-0 mt-0">
                    <div className="relative overflow-hidden">
                      <Link
                        className="relative"
                        href="https://drive.google.com/uc?export=view&id=1GvAAwps817YqASd6OWEgODhKsHLHUu97"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1GvAAwps817YqASd6OWEgODhKsHLHUu97"
                          alt="Gallery Image 8"
                        />
                        <div className="gallery-caption">
                          <div className="gallery-icon">
                            <span className="icon-magnifying-glass" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="relative text-center mb-5 mx-0 mt-0">
                    <div className="relative overflow-hidden">
                      <Link
                        className="relative"
                        href="https://drive.google.com/uc?export=view&id=1DIRczML7vD7B8SFnLMfjQZMfVjBDxcGV
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1DIRczML7vD7B8SFnLMfjQZMfVjBDxcGV
"
                          alt="Gallery Image 12"
                        />
                        <div className="gallery-caption">
                          <div className="gallery-icon">
                            <span className="icon-magnifying-glass" />
                          </div>
                        </div>
                      </Link>
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
