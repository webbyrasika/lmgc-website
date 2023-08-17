import Head from "next/head";
import Footer from "@/components/footer";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function SocialWelfare() {
  return (
    <>
      <Head>
        <title>
          Beyond Academics-Social Welfare | La Martiniere Girls' College
        </title>
      </Head>
      <main>
        <Navbar />
        <div className="relative bg-white z-[1] mt-14">
          <section className="relativebg-[url('https://drive.google.com/uc?export=view&id=1CUtu27EvB233JE92Dncz0R7yXTmmuSIA')]  bg-no-repeat bg-center bg-cover text-white inset-0 bg-black/20 py-36 px-0 ">
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
            <div className="container mx-auto px-4 lg:w-3/4">
              <div className="flex flex-col -mx-4">
                <div className="text-center text-base text-white  mb-20 -mt-8 italic font-volkhov leading-relaxed">
                  <p className="font-montserrat text-darkblue  decoration-gold ">
                    At La Martiniere Girls College, we teach our students the
                    value of giving back to the community from an early age
                    because we recognise how important it is to do so. Under the
                    direction of Miss Mary Annette Gresseum, Mrs. C. Cornelius
                    established the Gandhi Corner, which is dedicated to
                    assisting the less fortunate through various drives carried
                    out by the students as well as the annual Girl Child Day
                    intended to honour the girl child, in an effort to develop
                    our girls into socially conscious and engaged members of
                    society. Later, Miss R Ali established the PALS Club
                    (Protectors of Animals Life and Surroundings), an
                    organisation devoted to preserving and safeguarding the
                    environment.
                    <br />
                    These ideals are demonstrated by the children in their
                    behaviour, and as a result of their efforts, "Arangani," the
                    school nursery, and "Sakhi," the recycling department, were
                    born.
                  </p>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="box-content max-w-full h-auto">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1aw2JOgXc3vCbaZPa-s4pRBR_a186wPnk"
                        alt=""
                      />
                    </div>
                    <h5 className="font-montserrat decoration-black font-normal leading-4 my-3">
                      <b>
                        Gandhi Corner
                        <br />
                        Teacher Incharge - Mrs. P. Khanna
                        <br />
                        Prefect - Megan Rodricks
                      </b>
                    </h5>
                    <p className="text-justify">
                      The Gandhi Corner, the social work club of the College,
                      aims to instil in students a sense of empathy and
                      compassion for others from a young age. Under the guidance
                      of staff volunteers, it enables students to understand the
                      importance of charity and selfless service, encouraging
                      them to “Live to help and help to live”.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="box-content max-w-full h-auto">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1OueAkMLWrB4VS73b7MZ2-hWLUmNtD9kX"
                        alt=""
                      />
                    </div>
                    <h5 className="font-montserrat decoration-black font-normal leading-4 my-3">
                      <b>
                        PALS
                        <br />
                        Teacher Incharge - Mrs. N. Dube
                        <br />
                        Prefects - Pavni Arora and Sharmishtha Nigam
                      </b>
                    </h5>
                    <p className="text-justify">
                      Protectors of Animal Life and Surroundings, The Nature
                      Club.The PALS Club works for the conservation of the
                      environment through various projects such as recycling,
                      animal adoption, tree plantation, composting, and
                      ecotourism. We strive to instil the spirit of loving and
                      protecting nature in everyone.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="box-content max-w-full h-auto">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1hYDi0IOS7c2qdjdy67MbLPP8bVDeL9B1"
                        alt=""
                      />
                    </div>
                    <h5 className="font-montserrat decoration-black font-normal leading-4 my-3">
                      <b>
                        Sakhi
                        <br />
                        Teacher Incharge - Ms. A Ali
                      </b>
                    </h5>
                    <p className="text-justify">
                      La Martiniere Girls’ College believes in the importance of
                      service to humanity and the urgency of protecting our
                      environment and planet. To instil these beliefs, the
                      initiative of ‘Sakhi’ was taken up by our teachers and
                      students. Sakhi works towards recycling old and used items
                      and converting them into items like linens and bags which
                      are further distributed amongst the underprivileged.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="box-content max-w-full h-auto">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1_aLDXbmNSiR7coVzaxvlwfW6VO6Zj5mL"
                        alt=""
                      />
                    </div>
                    <h5 className="font-montserrat decoration-black font-normal leading-4 my-3">
                      <b>
                        Creado- The Happiness Club
                        <br />
                        Teacher Incharge - Mrs. P. Sharma
                        <br />
                        Prefects - Diya Shukla and Nikita Suri
                      </b>
                    </h5>
                    <p className="text-justify">
                      The Credo Club, where happiness, literacy and skills
                      intertwine. The Club embarks upon creating a place filled
                      with smiles, and laughter, fostering a love for literacy
                      and unlocking a world of limitless possibilities. Credo
                      empowers the students of La Martiniere Girls' College to
                      embrace personal growth and create a positive impact on
                      society.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="">
                  <div className="relative text-center mb-5 mx-0 mt-0">
                    <div className="relative overflow-hidden">
                      <Link
                        className="relative"
                        href="https://drive.google.com/uc?export=view&id=1ieXeqW6NIRad1A1K-KlXhVXV87A0KwbX"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1ieXeqW6NIRad1A1K-KlXhVXV87A0KwbX"
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
                        href="https://drive.google.com/uc?export=view&id=1n7H0ac65MfSZ4mX3WXhPY8kWrqmWoUlG
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1n7H0ac65MfSZ4mX3WXhPY8kWrqmWoUlG
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
                        href="https://drive.google.com/uc?export=view&id=19SBYvlmvLTmtF4n3wsWyp8Ab45S0bu7a
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=19SBYvlmvLTmtF4n3wsWyp8Ab45S0bu7a
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
                        href="https://drive.google.com/uc?export=view&id=1mhQkks1FWMji7XD1bhjTpUg9P9uG1Pm2
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1mhQkks1FWMji7XD1bhjTpUg9P9uG1Pm2
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
                        href="https://drive.google.com/uc?export=view&id=16e669yhOYBaEyBRiBFRMT5q_3hFmOY_g
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=16e669yhOYBaEyBRiBFRMT5q_3hFmOY_g
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
                        href="https://drive.google.com/uc?export=view&id=1mTjvxHOOuwph1RL-nErnQP_VdkfCIeoM
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1mTjvxHOOuwph1RL-nErnQP_VdkfCIeoM
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
                        href="https://drive.google.com/uc?export=view&id=1wacKr6cQNNk6EqxAjP4Evng2T99GSpF7
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1wacKr6cQNNk6EqxAjP4Evng2T99GSpF7
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
                        href="https://drive.google.com/uc?export=view&id=1i9uNES-UWxeHGZuqASdye_dnsjZcR63G
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1i9uNES-UWxeHGZuqASdye_dnsjZcR63G
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
