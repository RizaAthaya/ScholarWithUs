import Link from "next/link";
import Image from "next/image";
import React from "react";

import { HiArrowLeft } from "react-icons/hi2";

const NavAuth = () => {
  return (
    <div className="fixed w-screen flex justify-between py-5 md:px-20 px-10">
      <button className="flex gap-3 text-main border border-solid border-main rounded-lg px-6 py-3 text-base font-semibold hover:bg-sec2">
        <Link href={"/"} className="flex gap-3 items-center">
          <HiArrowLeft />
          Kembali
        </Link>
      </button>
      <Link href={"/"}>
        <Image
          src={"/images/LogoSWU.svg"}
          alt={"Logo"}
          width={100}
          height={100}
          priority
        />
      </Link>
    </div>
  );
};

export default NavAuth;
