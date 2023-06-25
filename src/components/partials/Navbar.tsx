import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

//icons
import { IoIosArrowDown } from "react-icons/io";
// import { GoPerson } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { HiArrowRightOnRectangle, HiBars4 } from "react-icons/hi2";
import { useMediaQuery } from "react-responsive";

const HoverUnderline = styled.span`
  position: relative;
  display: inline-block;
  &:hover::after {
    content: "";
    display: block;
    height: 3.5px;
    width: 100%;
    background-color: #192bc2;
    position: absolute;
    bottom: -15px;
    animation: slide 0.3s ease-in-out forwards;
  }
  @keyframes slide {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

const Underline = styled.span`
  position: relative;
  display: inline-block;
  &:after {
    content: "";
    display: block;
    height: 3.5px;
    width: 100%;
    background-color: #192bc2;
    position: absolute;
    bottom: -15px;
  }
  @keyframes slide {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

const NavList = [
  {
    name: "Mentoring",
    path: "/mentoring",
  },
  {
    name: "Pojok Beasiswa",
    path: "/pojokbeasiswa",
  },
  {
    name: "Komunitas",
    path: "/komunitas",
  },
  {
    name: "Artikel",
    path: "/artikel",
  },
];

const Navbar = () => {
  // const token = window.localStorage.getItem("token");
  const [token, setToken] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 900 });
  const pathname = usePathname();

  return (
    <div className="fixed z-[999] transition">
      <div className="absolute opacity-95 bg-white text-black flex w-screen justify-between md:px-0 px-7 md:justify-around items-center py-5">
        <div className="md:w-[20vw] justify-center flex">
          <Link href={"/"}>
            <Image
              src={"/images/LogoSWU.svg"}
              alt={"Logo"}
              width={100}
              height={100}
              priority
              className="w-auto h-auto"
            />
          </Link>
        </div>
        {!isSmallScreen ? (
          <div className="flex justify-around w-[80vw] items-center">
            <div>
              <ul className="flex gap-12">
                {NavList.map((item, index) => {
                  const isActive = pathname.startsWith(item.path);
                  return (
                    <li key={index}>
                      <Link href={item.path}>
                        {isActive ? (
                          <Underline className="text-base font-semibold text-main transition ">
                            {item.name}
                          </Underline>
                        ) : (
                          <HoverUnderline className="text-base font-semibold hover:text-main transition">
                            {item.name}
                          </HoverUnderline>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              {token ? (
                <div onMouseLeave={() => setisOpen(!isOpen)}>
                  <div className="flex gap-12">
                    <button className="text-main border border-solid border-main rounded-lg px-6 py-3 text-base font-semibold hover:bg-sec2">
                      Dashboard
                    </button>
                    <button
                      className="flex gap-3 items-center"
                      onClick={() => setisOpen(!isOpen)}
                    >
                      <Image
                        src={"/images/PropfPict.png"}
                        alt={"Profile"}
                        width={32}
                        height={32}
                      />
                      <IoIosArrowDown className="w-6 h-4" />
                    </button>
                  </div>
                  {isOpen && (
                    <div className="absolute right-24 mt-2">
                      <ul className="bg-white border border-solid border-blue-200 shadow-md rounded-lg px-4 py-[12px] w-[150px]">
                        <li className="mb-[12px]">
                          <Link
                            className="flex items-center text-base font-normal"
                            href={"/profile"}
                          >
                            {/* <GoPerson className="bg-white" /> */}
                            <RxPerson className="w-6 h-4" />
                            Profile Saya
                          </Link>
                        </li>
                        <li className="flex items-center text-base font-normal text-red-500">
                          <HiArrowRightOnRectangle className="w-6 h-4" />
                          Keluar
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className=" flex gap-3">
                  <Link href={"/auth/register"}>
                    <button className="text-main border border-solid border-main rounded-lg px-6 py-3 text-base font-semibold hover:bg-sec2">
                      Daftar
                    </button>
                  </Link>
                  <Link href={"/auth/login"}>
                    <button className="bg-main text-white rounded-lg px-6 py-3 text-base font-semibold hover:bg-sec1">
                      Masuk
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <button>
              <HiBars4 className="w-10 h-10" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
