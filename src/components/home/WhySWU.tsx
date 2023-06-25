import React from "react";
import Image from "next/image";

//components
import WSWUCard from "./WSWUCard";

//assets
import Konsultasi from "public/images/Konsultasi.png";
import Modul from "public/images/Modul.png";
import Review from "public/images/Review.png";

const wswuList = [
  {
    title: "Konsultasi",
    desc: "Dapatkan panduan persiapan beasiswa terbaik dari mentor berpengalaman melalui konsultasi 1-on-1 yang mudah dan fleksibel.",
    img: Konsultasi,
  },
  {
    title: "Modul & Video Pembelajaran",
    desc: "Akses berbagai modul & video pembelajaran untuk mempersiapkan diri menghadapi tes beasiswa dengan lebih percaya diri.",
    img: Modul,
  },
  {
    title: "Review Dokumen",
    desc: "Kirimkan berbagai dokumen beasiswa kamu untuk direview oleh mentor ahli dan tingkatkan peluang meraih beasiswa impian.",
    img: Review,
  },
];

const WhySWU = () => {
  return (
    <div className="bg-main w-screen">
      <div className="py-[60px] md:px-[100px] px-[25px]">

        {/* SECTION 1 */}
        <div className="">
          <h3 className="text-[32px] font-bold text-center mb-12">
            Bagaimana ScholarWithUs Membantu Kamu?
          </h3>
          <div className="block mx-auto xl:flex justify-center gap-5">
            {wswuList.map((item, index) => {
              return (
                <div key={index} className="flex justify-center mb-5">
                  <WSWUCard
                    title={item.title}
                    desc={item.desc}
                    img={item.img}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2 */}
        <div>
          <h3 className="text-[32px] font-bold text-center my-12 ">
            Mengapa harus ScholarWithUs?
          </h3>
          <div className="md:flex block justify-center items-center">
            <div className="md:min-w-[40vw] min-w-[60vw] flex justify-center mr-8">
              <Image
                src={"/images/WSWU.png"}
                alt={"WSWU?"}
                width={500}
                height={500}
              />
            </div>

            {/* KONTEN */}
            <div className="md:mt-0 mt-8">
              <div className="flex my-4">
                <div className="mt-2 mr-2 min-w-[45px]">
                  <Image
                    src={"/images/01.png"}
                    alt={"01"}
                    width={47}
                    height={48}
                  />
                </div>
                <div>
                  <h3 className="text-3xl my-2 md:mb-0 md:text-[32px] font-bold">Harga Terjangkau</h3>
                  <h3 className="text-base font-normal">
                    Dapatkan akses ke layanan lengkap dan berkualitas serta
                    bimbingan dari mentor berpengalaman dengan biaya yang
                    terjangkau.
                  </h3>
                </div>
              </div>
              <hr />
              <div className="flex my-4">
                <div className="mt-2 mr-2 min-w-[45px]">
                  <Image
                    src={"/images/02.png"}
                    alt={"02"}
                    width={47}
                    height={48}
                  />
                </div>
                <div>
                  <h3 className="text-3xl my-2 md:mb-0 md:text-[32px] font-bold">
                    Mentor Berpengalaman
                  </h3>
                  <h3 className="text-base font-normal">
                    Dibimbing oleh mentor berpengalaman yang membantu kamu
                    mempersiapkan diri mengikuti beasiswa.
                  </h3>
                </div>
              </div>
              <hr />
              <div className="flex my-4">
                <div className="mt-2 mr-2 min-w-[45px]">
                  <Image
                    src={"/images/03.png"}
                    alt={"03"}
                    width={47}
                    height={48}
                  />
                </div>
                <div>
                  <h3 className="text-3xl my-2 md:mb-0 md:text-[32px] font-bold">Materi Terstruktur</h3>
                  <h3 className="text-base font-normal">
                    Kurikulum dan metode pembelajaran yang terstruktur dan
                    lengkap untuk kamu mempersiapkan diri mengikuti beasiswa.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySWU;
