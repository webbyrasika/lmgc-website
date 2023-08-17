import Head from "next/head";
import Footer from "@/components/footer";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Academics() {
  const imageUrl = "YOUR_IMAGE_URL_HERE";
  return (
    <>
      <Head>
        <title>
          Beyond Academics- Scientific Skills | La Martiniere Girls' College
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
            <div className="container mx-auto px-4 lg:w-3/4">
              <div className="flex flex-col -mx-4">
                <div className="text-center text-base text-white  mb-20 -mt-8 italic font-volkhov leading-relaxed">
                  <p className="font-montserrat text-darkblue  decoration-gold ">
                    La Martiniere Girls' College equips its pupils with
                    cutting-edge labs and equipment to keep up with the times
                    and the latest scientific and technical developments. The
                    school is home to a number of STEM clubs, including the math
                    club, Mathaletes, the science club The Inquisitive Spirit,
                    the robotics Club, Robyss, and the computer club, Iris, as
                    well as two computer labs and a lab for biotechnology,
                    chemistry, biology, and physics. The school also
                    participates in a variety of competitions and activities
                    that give students a platform to continue their STEM
                    exploration while also broadening their horizons.
                  </p>
                </div>
                {/* <h2 className="text-darkblue underline decoration-gold relative tracking-[4px] text-center font-normal text-3xl  mt-0 mb-10 mx-0 font-montserrat ">
                  <strong>Subjects Offered</strong>
                </h2> */}
              </div>
              <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="box-content max-w-full h-auto">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1dJxmFp1FQI0zmFiTkzE_-iHe8ZZIf51x"
                        alt=""
                      />
                    </div>
                    <h5 className="font-montserrat decoration-black font-normal leading-4 my-3">
                      <b>
                        TIS- The Science Club
                        <br />
                        Teachers Incharge - Mrs. R. Kapoor and Mrs. A. Masih
                        <br />
                        Prefect - Snigdha Chandra
                      </b>
                    </h5>
                    <p className="text-justify">
                      TIS aims to encourage students to engage in experimental
                      learning by using a practical approach. The young minds
                      get an opportunity to voice their opinions and thoughts
                      about various diverse scientific topics since the club
                      makes a conscious attempt to give students ample scope and
                      opportunity to observe and explore the world around them.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="box-content max-w-full h-auto">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1-Eh4pSFMBfTvSj42gpoO05IgAnBBYzSb"
                        alt=""
                      />
                    </div>
                    <h5 className="font-montserrat decoration-black font-normal leading-4 my-3">
                      <b>
                        Mathalete-The Mathematics Club
                        <br />
                        Teacher Incharge - Mrs. T. Mahmud
                        <br />
                        Prefects - Divjot Kaur and Vainavi Vikas
                      </b>
                    </h5>
                    <p className="text-justify">
                      The Mathematics Club (Mathalete) was established with the
                      aim to arouse and maintain the interest of the students in
                      Mathematics and to inculcate in their problem-solving
                      skills and analytical-based reasoning while approaching a
                      given math problem, through fun and engaging workshops
                      conducted by the Club Members.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="box-content max-w-full h-auto">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1MyQZVnDbsKEntdrqF3b8BN9H0Mvd3Ltp"
                        alt=""
                      />
                    </div>
                    <h5 className="font-montserrat decoration-black font-normal leading-4 my-3">
                      <b>
                        Iris-The Computer Club
                        <br />
                        Teacher Incharge - Ms. S. Arora
                        <br />
                        Prefect - Anushka Sharma
                      </b>
                    </h5>
                    <p className="text-justify">
                      IRIS, the computer club nurtures tech enthusiasts'
                      interest in all aspects of computer science and
                      technology! Primarily focusing on programming, we
                      encourage all things tech and provide a supportive
                      environment that helps students polish their programming
                      skills and instils a strong foundation for technology in
                      the future.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="box-content max-w-full h-auto">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1R6dHlE2tetbyzxsoAGFuq-nilJ5l6DLu"
                        alt=""
                      />
                    </div>
                    <h5 className="font-montserrat decoration-black font-normal leading-4 my-3">
                      <b>
                        Robyss-The Robotics Club
                        <br />
                        Teacher Incharge - Mrs. S. Pandey
                        <br />
                        Prefects - Samia Khan and Ratnpriya
                      </b>
                    </h5>
                    <p className="text-justify">
                      The Robotics Club “Robyss” was established last year under
                      the able guidance of Mrs Sheela Pandey, a senior school
                      Physics teacher whose enthusiasm and passion towards
                      technology and its vast plethora of opportunities has
                      motivated us to put our best forward.
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
                        href="https://drive.google.com/uc?export=view&id=1J_W5QyIYAWoUuDxxzY0A1BOpbvorw6XO
                        "
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1J_W5QyIYAWoUuDxxzY0A1BOpbvorw6XO
                          "
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
                        href="https://drive.google.com/uc?export=view&id=1GZ_IIYwppT1e1G74uM-gwx9nJhjb_dEI
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1GZ_IIYwppT1e1G74uM-gwx9nJhjb_dEI
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
                        href="https://drive.google.com/uc?export=view&id=1gY2TbKtrgAXF8sbd8csX0PU0xxNTMAf6
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1gY2TbKtrgAXF8sbd8csX0PU0xxNTMAf6
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
                        href="https://drive.google.com/uc?export=view&id=1z0IcRo7-Gj4QDuKRv5iFjXmvKgKTHSvx
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1z0IcRo7-Gj4QDuKRv5iFjXmvKgKTHSvx
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
                        href="https://drive.google.com/uc?export=view&id=17pzqlAH0OIn4thmgcE83jd4SOFCc-Fmr
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=17pzqlAH0OIn4thmgcE83jd4SOFCc-Fmr
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
                        href="https://drive.google.com/uc?export=view&id=1XS1ezXrXXuMU96nnc4BUMCigCyRyPnYM
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1XS1ezXrXXuMU96nnc4BUMCigCyRyPnYM
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
                        href="https://drive.google.com/uc?export=view&id=1fg8CsJVYy9RUBCHBnHCeeNxMq7_FFsbL
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1fg8CsJVYy9RUBCHBnHCeeNxMq7_FFsbL
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
                        href="https://drive.google.com/uc?export=view&id=1GTUCnPLhTjgHJdUEBceVg-AYfSAyhjZl
"
                      >
                        <img
                          src="https://drive.google.com/uc?export=view&id=1GTUCnPLhTjgHJdUEBceVg-AYfSAyhjZl
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
