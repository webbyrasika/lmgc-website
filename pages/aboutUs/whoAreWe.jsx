import Head from "next/head";
import Footer from "@/components/footer";
import {
  LightBulbIcon,
  LifebuoyIcon,
  Cog8ToothIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Navbar from "@/components/navbar";

export default function WhoAreWe() {
  return (
    <>
      <Head>
        <title>Who Are We | La Martiniere Girls' College</title>
      </Head>
      <main>
        <Navbar />
        <div className="relative bg-white z-[1] mt-14">
          <section className="relative bg-[url('https://drive.google.com/uc?export=view&id=1CUtu27EvB233JE92Dncz0R7yXTmmuSIA')] bg-no-repeat bg-center bg-cover text-white inset-0 bg-black/20 py-36 px-0">
            <div className="container mx-auto px-4 lg:w-3/4 ">
              <div className="flex flex-col -mx-3">
                <div className="mx-auto sm:w-1/2 px-3 min-h-[1px]">
                  <h2 className="text-white relative tracking-[4px] text-center font-normal text-3xl  mt-0 mb-10 mx-0 font-montserrat uppercase">
                    Who Are We
                  </h2>
                </div>
              </div>
            </div>
          </section>
          <section className="relative bg-no-repeat bg-center bg-cover px-0 py-36">
            <div className="container mx-auto px-4 lg:w-3/4 ">
              <div className="flex flex-col -mx-3">
                <div className="mx-auto sm:w-1/2 px-3 min-h-[1px]">
                  <h2 className="font-montserrat leading-[1.4] font-normal  text-darkblue underline decoration-gold text-3xl mt-5 mb-3" />
                  <div className="text-base mb-20 font-volkhov italic text-left text-gray-700 leading-relaxed tracking-wide" />
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="text-xl flex text-center justify-center">
                      <LightBulbIcon className="w-12 h-12" />
                    </div>
                    <h2 className="font-montserrat leading-[1.4] font-normal text-darkblue underline decoration-gold text-3xl mt-5 mb-3">
                      <b>Our Mission</b>
                    </h2>
                    <p className="mb-5">
                      Our Mission is to provide a holistic education to mould
                      young women into confident thinkers and compassionate
                      leaders who are capable and courageous enough to create
                      their impact in the world. We endeavour to create
                      compassionate, responsible and innovative global citizens
                      committed to the development and service of humanity.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="text-xl flex text-center justify-center">
                      <LifebuoyIcon className="w-12 h-12" />
                    </div>
                    <h2 className="font-montserrat leading-[1.4] font-normal text-darkblue underline decoration-gold text-3xl mt-5 mb-3">
                      <b>Our Vission</b>
                    </h2>
                    <p>
                      Our Vision is to create a warm and joyful learning
                      experience that inspires students to develop a love for
                      learning and helps them to discover their highest
                      potential. We aim to prepare caring and influential
                      citizens who are adept at facing the challenges of an
                      ever-evolving global society and at the same time are able
                      to lead the world into a bright and progressive future.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="text-xl flex text-center justify-center">
                      <SparklesIcon className="w-12 h-12" />
                    </div>
                    <h2 className="font-montserrat leading-[1.4] font-normal text-darkblue underline decoration-gold text-3xl mt-5 mb-3">
                      <b>Our Values</b>
                    </h2>
                    <p>
                      Our Values are rooted in our Motto “Labore Et Constantia”
                      which essential means Toil and Fidelity. We promote the
                      development of confidence and compassion, the art of
                      responsible risk taking and ethical decision making. Both
                      our mission and motto are underscored by our core values
                      of conscience, courtesy, courage and charity.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="text-xl flex text-center justify-center">
                      <Cog8ToothIcon className="w-12 h-12" />
                    </div>
                    <h2 className="font-montserrat leading-[1.4] font-normal text-darkblue underline decoration-gold text-3xl mt-5 mb-3">
                      <b>Our Strategy</b>
                    </h2>
                    <p>
                      Our strategy is to educate our girls to become leaders of
                      a changing world. We dedicate ourselves to provide
                      superior education in academics, physical and mental
                      health as well as in character building and enriching
                      programs that help create a community which is empathetic
                      towards society with the help of our talented staff
                      working in a modernized environment with a
                      strong&nbsp;financial&nbsp;base.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative bg-no-repeat bg-center bg-cover px-0 py-36">
            <div className="container mx-auto px-4 lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                  <div className="relative md:pl-14 lg:mt-14 md:mt-5 md:mx-0 md:mb-0 md:text-left text-center pl-0 mb-8  ">
                    <h2 className="font-montserrat leading-[1.4] font-normal text-darkblue underline decoration-gold text-3xl mt-5 mb-3">
                      <b>School Song</b>
                    </h2>
                    Chorus
                    <br />
                    Hail! Hail! The name we own,
                    <br />
                    Hail to the giver :<br />
                    Blessing and bright renown,
                    <br />
                    Be his forever!
                    <br />
                    All his martial deeds may die,
                    <br />
                    Lasting still his charity
                    <br />
                    This his laurel blooms for aye,
                    <br />
                    Dead, he lives in us today,
                    <br />
                    This, then, our song shall be,
                    <br />
                    As we chant his eulogy-
                    <br />
                    “May our Founder’s name endure,
                    <br />
                    Ever spotless, ever pure!”
                    <br />
                    Chorus
                    <br />
                    Faithful may we ever be,
                    <br />
                    Followers of his constancy;
                    <br />
                    Firm of hand against the foe,
                    <br />
                    Soft of heart to succour woe.
                    <br />
                    This, then, our song shall be,
                    <br />
                    As we chant his eulogy-
                    <br />
                    “May our Founder’s name endure,
                    <br />
                    Ever spotless, ever pure!”
                    <br />
                    Chorus
                    <br />
                    <br />
                    ~F.J.Rowe, M.A., Second Master
                    <br />
                    La Martiniere College Calcutta (1868-1890)
                  </div>
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-2 hidden lg:block">
                  <div className="text-cenetr">
                    {/* <Image
                      src="/right.jpg"
                      width={1000}
                      height={1000}
                    /> */}
                    <img
                      src="https://drive.google.com/uc?export=view&id=1btNmRibWjIw6X50JayIf7OdKoctplOZ8"
                      alt="Featured image"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                  <div className="relative lg:mt-14 md:pl-14 md:mt-5 md:mx-0 md:mb-0 md:text-left text-center pl-0 mb-8 ">
                    <h2 className="font-montserrat leading-[1.4] font-normal text-darkblue underline decoration-gold text-3xl mt-5 mb-3">
                      <b>School Prayer</b>
                    </h2>
                    O Almighty God, and most merciful Father,
                    <br />
                    Who has taught us to praise Thee as well for the dead as the
                    living,
                    <br />
                    We thank Thee for Claude Martin, our Founder,
                    <br />
                    And for the lives and examples of all who have served Thee
                    in this school.
                    <br />
                    Pour down Thy blessing, we pray Thee, upon those who are now
                    here.
                    <br />
                    Prosper our labours, as Thou, in Thy wisdom, seest to be
                    best for us.
                    <br />
                    Protect us, we beseech Thee, from all things hurtful both to
                    soul and body.
                    <br />
                    Preserve us by Thy Holy spirit from sin and selfishness,
                    <br />
                    And make us generous and brave, pure and true, in all our
                    work and in all our play,
                    <br />
                    That our tasks, being sanctified by Thy love, our days here
                    may be attended by Thy blessing,
                    <br />
                    And that when our days’ work on earth is over,
                    <br />
                    Thou mayest send us rest from our labours under the shadow
                    of Thy wing,
                    <br />
                    For the sake of Jesus Christ, Our Lord.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative bg-no-repeat bg-center bg-cover px-0 py-36">
            <div className="container  mx-auto px-4 lg:w-3/4">
              <div className="flex text-center flex-col -mx-3">
                <div className="w-full mx-auto sm:w-1/2 px-3 min-h-[1px]">
                  <h2 className="text-darkblue underline decoration-gold relative tracking-[4px] text-center font-normal text-3xl  mt-0 mb-10 mx-0 font-montserrat uppercase">
                    <b>The Four Houses</b>
                  </h2>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="border-box">
                      {/* <Image
                        src="/houses.png"
                        width={1000}
                        height={1000}
                      /> */}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1pWGzD3VVvEheXdBYXY4FXwB390WywBEZ"
                        alt="houses"
                        className="w-full h-auto"
                      />
                    </div>
                    <h2 className="font-montserrat leading-[1.4] text-3xl mt-5 mb-3 font-normal text-green-800 underline decoration-black ">
                      <b>Cornwallis</b>
                    </h2>
                    <p>
                      Motto: Never Give In
                      <br />
                      This house is named after the renowned reformer and
                      administrator Lord Cornwallis, who was one of Claude
                      Martin’s greatest friends and benefactors. The motto
                      ‘Never Give In’, simple yet inspirational, teaches
                      everyone to continue fighting for their dreams and goals
                      in this long windy road of Life.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="border-box">
                      {/* <Image
                        src="/houses2.png"
                        alt="houses2"
                        width={1000}
                        height={1000}
                      /> */}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1b7InfIiDSrHpNtCaekHmC0ytm0TuSvBD"
                        alt="houses2"
                        className="w-full h-auto"
                      />
                    </div>
                    <h2 className="font-montserrat leading-[1.4] text-3xl mt-5 mb-3 font-normal text-red-800 underline decoration-black ">
                      <b>Hodson</b>
                    </h2>
                    <p>
                      Motto: Do or Die
                      <br />
                      This house is named after the gallant and intrepid officer
                      Major William Stephen Hodson. As understood by the Motto
                      “Do or Die”, this house teaches our girls to continue
                      fighting for what they believe in and to never give up.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="border-box">
                      {/* <Image
                        src="/houses3.png"
                        alt="houses3"
                        width={1000}
                        height={1000}
                      /> */}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1oIKniSltIISsqr-Re0R093JCoe2cwwdH"
                        alt="houses3"
                        className="w-full h-auto"
                      />
                    </div>
                    <h2 className="font-montserrat leading-[1.4] text-3xl mt-5 mb-3 font-normal text-yellow-600   underline decoration-black ">
                      <b>Lyons</b>
                    </h2>
                    <p>
                      Motto: Perseverance
                      <br />
                      This house is named after the town of Lyons in France, the
                      birthplace of Major General Claude Martin. True to its
                      Motto “Perseverance”, this house teaches our girls to
                      continue dreaming and working towards achieving their
                      aspirations despite the struggles.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-center">
                    <div className="border-box">
                      {/* <Image
                        src="/houses4.png"
                        alt="houses4"
                        width={1000}
                        height={1000}
                      /> */}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1Rszu7arkisPq00OeOTj_xchD0ZZY1-yW"
                        alt="houses4"
                        className="w-full h-auto"
                      />
                    </div>
                    <h2 className="font-montserrat leading-[1.4] text-3xl mt-5 mb-3 font-normal text-blue-800  underline decoration-black ">
                      <b>Martin</b>
                    </h2>
                    <p>
                      Motto: Nil Desperandum
                      <br />
                      The house derives its name from the founder of the La
                      Martiniere Institutions, Major General Claude Martin. The
                      Motto “Nil Desperandum” or “Do Not Despair” teaches the
                      girls to never give up or feel disheartened if they are
                      ever met with failures on the road to success.
                    </p>
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
