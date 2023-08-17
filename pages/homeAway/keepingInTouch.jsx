import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function KeepingInTouch() {
  return (
    <>
      <Head>
        <title>Keeping In Touch | La Martiniere Girls' College</title>
      </Head>
      <main>
        <Navbar />
        <div className="relative bg-white z-[1] mt-14">
          <section className="relative bg-[url('https://drive.google.com/uc?export=view&id=1UjSXWBgEtZk83331z4VtcQLSx3y38qpj')]  bg-no-repeat bg-center bg-cover text-white inset-0 bg-black/20 py-36 px-0 ">
            <div className="container mx-auto px-4 lg:w-3/4 ">
              <div className="flex flex-col -mx-3">
                <div className="mx-auto sm:w-1/2 px-3 min-h-[1px]">
                  <h2 className="text-white relative tracking-[4px] text-center font-normal text-3xl mb-10 mx-0 font-montserrat uppercase">
                    Keeping In Touch
                  </h2>
                  <div className="text-center text-base text-white  mb-20 -mt-8 italic font-volkhov leading-relaxed">
                    It’s a Team Effort and Parents/Guardians Play a Key Role
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-no-repeat bg-center bg-cover px-0 py-36 ">
            <div className="container mx-auto px-4 lg:w-3/4">
              <div className="flex flex-col -mx-3">
                <div className="w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-4 mt-5 mb-1 gap-8 lg:gap-8 ">
                    <div className="lg:col-span-1">
                      {/* <Image
                        src="/speedu1.png"
                        alt="speedu1"
                        width={1000}
                        height={1000}
                        className="w-full h-auto"
                      /> */}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1xJcIjuKUsgFhSxnSOUdLy2norBoFw3DB"
                        alt="speedu1"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="lg:col-span-3">
                      <p className="font-montserrat text-sm pb-5 text-justify leading-relaxed tracking-wide">
                        Your child’s dressing rooms and dormitories, her
                        matrons, teachers and ayahs are at the core of her
                        stability and safety while she is here. Children are
                        cared for by matrons and ayahs who have raised children
                        of their own and have child-care experience. They
                        provide guidance, support and discipline. While no one
                        can replace a parent/guardian, matrons and teachers
                        ensure that the girls have someone there to listen to
                        them, offer guidance or advice when problems occur, or
                        simply reassure a child when it is needed most.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-justify">
                  <div className="grid grid-cols-1 lg:grid-cols-4 mt-5 mb-1 gap-8 lg:gap-8 ">
                    <div className="lg:col-span-3">
                      <p className="font-montserrat text-sm pb-5 text-justify leading-relaxed tracking-wide">
                        Parents are encouraged to keep in touch with their
                        children regularly, through phone calls and visits.
                      </p>
                      <ul className="font-montserrat text-sm list-disc list-inside ml-4 ">
                        <li className="list-item">
                          Visiting hours:
                          <ul className="list-disc list-inside ml-4">
                            <li className="list-item ">
                              Saturday from 4:15 p.m. to 6:00 p.m.
                            </li>
                            <li className="list-item ">
                              Sunday from 9:00 a.m. to noon.
                            </li>
                          </ul>
                        </li>
                        <li>
                          In case of an emergency, parents can contact the
                          emergency phone number given at the time of admission
                          visits.
                        </li>
                      </ul>
                    </div>

                    <div className="lg:col-span-1 ">
                      {/* <Image
                        src="/speedu2.png"
                        alt="speedu2"
                        width={1000}
                        height={1000}
                        className="w-full h-auto"
                      /> */}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1KJrwFmlGeVJajUSCBapZt30eNUf-aeuu"
                        alt="speedu2"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <br /> <br />
                <br />
                <h2 className="text-darkblue underline decoration-gold relative tracking-[4px] text-center font-normal text-3xl  mt-0 mb-10 mx-0 font-montserrat ">
                  <strong>Outings And Holidays </strong>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 mt-5 mb-1 gap-8 lg:gap-8 ">
                  <div className="lg:col-span-1">
                    {/* <Image
                      src="/speedu3.png"
                      width={1000}
                      height={1000}
                      className="w-full h-auto"
                    /> */}
                    <img
                      src="https://drive.google.com/uc?export=view&id=12ovRWGESnWNl8Sl71Zcilm0E_hJe08wQ"
                      alt="speedu3"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="lg:col-span-3">
                    <div className="font-montserrat text-sm pb-5 text-justify leading-relaxed tracking-wide px-4">
                      <ul className="list-disc">
                        <li className="list-item">
                          Girls are allowed out of the school on designated
                          Sundays and holidays only when accompanied by a
                          parent/guardian.
                        </li>
                        <li className="list-item">
                          School holidays are usually from the second week of
                          May to the first week of July and from the second week
                          of December to the first week of January. During this
                          time, the boarding is closed and all students are
                          expected to go home.
                        </li>
                        <li className="list-item">
                          Only parents, grandparents, adult siblings or
                          guardians specifically mentioned on the visitors’ list
                          are permitted to fetch the child from school and drop
                          her back when school resumes.
                        </li>
                      </ul>
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
