import Head from "next/head";
import Footer from "@/components/footer";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function BeyoundAcademics() {
  return (
    <>
      <Head>
        <title>Beyond Academics | La Martiniere Girls' College</title>
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
                <div className="text-center text-base text-white  mb-20 -mt-8 italic font-volkho leading-relaxed">
                  <p className="font-montserrat text-darkblue  decoration-gold ">
                    An independent girls’ school La Martiniere Girls' College
                    prepares young women to be self-directed learners and
                    confident leaders. Outside of the classroom, girls are
                    leaders in every corner of the campus: The Student
                    Government, Athletics, Clubs, Theatre and Art. They never
                    take the back seat. No one can speak better to the power of
                    all-girls culture than our students and alumnae. Whether it
                    is due to the confidence they gained in our classrooms, the
                    leadership experience on campus, or the connections built
                    with older students and teachers, our girls say "La
                    Martinière is empowering."
                  </p>
                </div>
              </div>
              {/* <div className="mx-auto sm:w-1/2 px-3 min-h-[1px]">
                  <h2 className="font-montserrat leading-[1.4] font-normal  text-darkblue underline decoration-gold text-3xl mt-5 mb-3" />
                  <div className="text-base mb-20 font-volkhov italic text-left text-gray-700 leading-relaxed tracking-wide" />
                </div> */}

              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/3 sm:w-1/2 px-4">
                  <div className="mb-8 text-center">
                    <div className="box-content">
                      <Link href="/aboutUs/scientificSkills">
                        <img
                          src="https://drive.google.com/uc?export=view&id=16LbWQwUffxg_6QUNzoYf6RQ0GAJaO2cB"
                          alt="scientificSkills"
                          className="w-full h-auto"
                        />
                      </Link>
                    </div>
                    <h3 className="font-montserrat hover:text-gray-400 tracking-normal font-normal text-2xl text-gray-950 mt-4 mb-3 mx-0">
                      <strong>
                        <Link
                          href="/aboutUs/scientificSkills"
                          className="no-underline   "
                        >
                          Scientific Skills
                        </Link>
                      </strong>
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-1/3 sm:w-1/2 px-4">
                  <div className="mb-8 text-center">
                    <div className="box-content">
                      <Link href="/aboutUs/sportsSkills">
                        <img
                          src="https://drive.google.com/uc?export=view&id=19f4TW2y27VMM_TQ2G-4OYMRRa6D6JgS5"
                          alt="sportsSkills"
                          className="w-full h-auto"
                        />
                      </Link>
                    </div>
                    <h3 className="font-montserrat tracking-[2px] font-normal text-2xl text-gray-950 hover:text-gray-400 mt-4 mb-3 mx-0">
                      <strong>
                        <Link
                          href="/aboutUs/sportsSkills"
                          className="no-underline "
                        >
                          Sports Skills
                        </Link>
                      </strong>
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-1/3 sm:w-1/2 px-4">
                  <div className="mb-8 text-center">
                    <div className="box-content">
                      <Link href="/aboutUs/artisticSkills">
                        <img
                          src="https://drive.google.com/uc?export=view&id=1APvX084jfpGMaZpshWIsWaP8J-OepOQg"
                          alt="artisticSkills"
                        />
                      </Link>
                    </div>
                    <h3 className="font-montserrat tracking-[2px] font-normal text-2xl text-gray-950 hover:text-gray-400 mt-4 mb-3 mx-0">
                      <strong>
                        <Link
                          href="/aboutUs/artisticSkills"
                          className="no-underline "
                        >
                          Artistic Skills
                        </Link>
                      </strong>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/3 sm:w-1/2 px-4">
                  <div className="mb-8 text-center">
                    <div className="box-content">
                      <Link href="/aboutUs/leadershipSkills">
                        <img
                          src="https://drive.google.com/uc?export=view&id=1WyHrclCHMH6QMtAz0cQ18optY1hMj4wh"
                          alt="leadershipSkills"
                        />
                      </Link>
                    </div>
                    <h3 className="font-montserrat tracking-[2px] font-normal text-2xl text-gray-950 hover:text-gray-400 mt-4 mb-3 mx-0">
                      <b>
                        <Link
                          href="/aboutUs/leadershipSkills"
                          className="no-underline "
                        >
                          Leadership Skills
                        </Link>
                      </b>
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-1/3 sm:w-1/2 px-4">
                  <div className="mb-8 text-center">
                    <div className="box-content">
                      <Link href="/aboutUs/literarySkills">
                        <img
                          src="https://drive.google.com/uc?export=view&id=1n7luUxag0cmqc1Lit7IrNE4dYBKX8wVB"
                          alt="literarySkills"
                        />
                      </Link>
                    </div>
                    <h3 className="font-montserrat tracking-[2px] font-normal text-2xl text-gray-950 hover:text-gray-400 mt-4 mb-3 mx-0">
                      <b>
                        <Link
                          href="/aboutUs/literarySkills"
                          className="no-underline "
                        >
                          Literary Skills
                        </Link>
                      </b>
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-1/3 sm:w-1/2 px-4">
                  <div className="mb-8 text-center">
                    <div className="box-content">
                      <Link href="/aboutUs/mediaSkills">
                        <img
                          src="https://drive.google.com/uc?export=view&id=11x3RCY0X3Pf-xTfWSBX9WYjtqSYMKWmw"
                          alt="mediaSkills"
                        />
                      </Link>
                    </div>
                    <h3 className="font-montserrat tracking-[2px] font-normal text-2xl text-gray-950 hover:text-gray-400 mt-4 mb-3 mx-0">
                      <b>
                        <Link
                          href="/aboutUs/mediaSkills"
                          className="no-underline "
                        >
                          Communication Skills
                        </Link>
                      </b>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/3 sm:w-1/2 px-4">
                  <div className="mb-8 text-center">
                    <div className="box-content">
                      <Link href="/aboutUs/socialWelfare">
                        <img
                          src="https://drive.google.com/uc?export=view&id=1SCGE_haOf285KRMeRB-n_XTlbjhMUm3f"
                          alt="socialWelfare"
                        />
                      </Link>
                    </div>
                    <h3 className="font-montserrat tracking-[2px] font-normal text-2xl text-gray-950 hover:text-gray-400 mt-4 mb-3 mx-0">
                      <strong>
                        <Link
                          href="/aboutUs/socialWelfare"
                          className="no-underline "
                        >
                          Social Welfare
                        </Link>
                      </strong>
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-1/3 sm:w-1/2 px-4">
                  <div className="mb-8 text-center">
                    <div className="box-content">
                      <Link href="/aboutUs/entrepreneurialSkills">
                        <img
                          src="https://drive.google.com/uc?export=view&id=1BYmAsMEHLNGYoj-Tw-PRBijNWBKGfzqr"
                          alt="entrepreneurialSkills"
                        />
                      </Link>
                    </div>
                    <h3 className="font-montserrat tracking-[2px] font-normal text-2xl text-gray-950 hover:text-gray-400 mt-4 mb-3 mx-0">
                      <b>
                        <Link
                          href="/aboutUs/entrepreneurialSkills"
                          className="no-underline "
                        >
                          Entrepreneurial Skills
                        </Link>
                      </b>
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-1/3 sm:w-1/2 px-4">
                  <div className="mb-8 text-center">
                    <div className="box-content">
                      <Link href="/aboutUs/studentAchievements">
                        <img
                          src="https://drive.google.com/uc?export=view&id=1uX7tTr3VFqd5jezJ7VkxYSDZymk4b9oZ"
                          alt="studentAchievements"
                        />
                      </Link>
                    </div>
                    <h3 className="font-montserrat tracking-[2px] font-normal text-2xl text-gray-950 hover:text-gray-400 mt-4 mb-3 mx-0">
                      <strong>
                        <Link
                          href="/aboutUs/studentAchievements"
                          className="no-underline "
                        >
                          Student Achievements
                        </Link>
                      </strong>
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
