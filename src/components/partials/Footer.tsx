import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-main">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 md:block flex justify-center">
              <a href="/" className="flex items-center">
                <Image
                  src="/images/LogoSWUWhite.svg"
                  className="mr-3 w-auto h-auto"
                  alt="ScholarWithUs Logo"
                  width={100}
                  height={100}
                />
                <span className="lg:block hidden self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  ScholarWithUs
                </span>
              </a>
              {/* <div>Haii panjang disini harusnya</div> */}
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white">
                  Layanan
                </h2>
                <ul className="text-white dark:text-white font-medium text-base">
                  <li className="mb-2">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Mentoring
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Pojok Beasiswa
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Komunitas
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Artikel
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white">
                  Lainnya
                </h2>
                <ul className="text-gray-600 dark:text-white font-medium text-base">
                  <li className="mb-2">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Help Center
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Syarat & Ketentuan
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Kebijakan Privasi
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white">
                  Kontak
                </h2>
                <ul className="text-white font-normal text-base">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      0271-12345678
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      scholarwithus@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white sm:mx-auto lg:my-8" />
          <div className="flex items-center justify-center text-center">
            <span className="text-sm text-white text-center ">
              Copyright ©2023 <b>ScholarWithUs.</b> All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
