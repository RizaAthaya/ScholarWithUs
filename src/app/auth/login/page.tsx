'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ilustrasi from "public/images/ilustrasiLogin.svg";
import Image from "next/image";
import NavAuth from "@/components/partials/NavAuth";

interface formData {
  email: string;
  password: string;
}

const Page = () => {
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ mode: "onBlur" });

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
  });

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 5,
        message: "Password must have at least 8 characters",
      },
    },
  };
  return (
    <div>
      <div className="bg-white flex items-center max-h-[100vh] w-[100vw]">
        <div className="w-[50vw] bg-login min-h-[100vh] bg-no-repeat flex items-center justify-center bg-cover">
          <Image src={ilustrasi} className="w-[90%] h-auto " alt={"Login Pict"} priority></Image>
        </div>
        <div className="w-[50vw] h-[100vh] flex flex-col items-center justify-center">
          <h3 className="text-[#192BC2] text-[48px] font-[700] align-center mb-[8px]">
            Selamat Datang
          </h3>
          <h5 className="w-[80%] font-[400] text-[16px] mb-[48px] max-w-[400px] text-[#4C4C50] text-center">
            Masuklah dengan akunmu untuk mendapatkan akses ke layanan kami.
          </h5>
          <form
            className="w-[80%] max-w-[400px]"
            // onSubmit={handleLogin}
          >
            <div className="">
              <label className="flex text-left text-[16px] font[400] mb-[8px] text-[#121216]">
                Email
              </label>
              <input
                {...register("email", registerOptions.email)}
                value={forms.email}
                onChange={(e) => setForms({ ...forms, email: e.target.value })}
                name="email"
                type="text"
                className="w-[100%] px-[24px] py-[12px] border border-solid border-gray-500 rounded-lg text-[16px] font-[400]"
                placeholder="Masukkan email"
              ></input>
              <div className="text-[#E4026F] text-left mt-[4px]">
                {errors?.email && errors.email.message}
              </div>
            </div>
            <div className="">
              <label className="flex text-left text-[16px] font[400] my-[8px] text-[#121216]">
                Kata Sandi
              </label>
              <input
                {...register("password", registerOptions.password)}
                value={forms.password}
                onChange={(e) =>
                  setForms({ ...forms, password: e.target.value })
                }
                name="password"
                type="password"
                className="w-[100%] px-[24px] py-[12px] border border-solid border-gray-500 rounded-lg text-[16px] font-[400]"
                placeholder="Masukkan kata sandi"
              ></input>
              <div className="text-[#E4026F] text-left mt-[4px]">
                {errors?.password && errors.password.message}
              </div>
            </div>
            <div>
              <a>
                <h5 className="mt-[16px] mb-[36px] text-right text-[#192BC2] font-[400] text-[16px]">
                  Lupa kata sandi?
                </h5>
              </a>
            </div>
            <button
              // onClick={handleLogin}
              type="submit"
              className="font-[600] text-[16px] text-white px-[24px] py-[12px] w-[100%] bg-[#192BC2] shadow-lg rounded-lg"
            >
              Masuk
            </button>
            <h5 className="text-center mt-[24px] text-[16px] font-[400] text-[#4C4C50]">
              Belum punya akun?{" "}
              <a href="/register" className="text-[#192BC2] font-[600]">
                Buat Akun
              </a>{" "}
              di sini.
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
