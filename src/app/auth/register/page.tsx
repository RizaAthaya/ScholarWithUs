'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ilustrasi from "public/images/ilustrasiSignup.svg";
import Image from "next/image";

interface formData {
  username: string;
  email: string;
  password: string;
  confirm: string;
}
const Page = () => {
  const [forms, setForms] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ mode: "onBlur" });

  const onSubmit = handleSubmit(({ username, email, password, confirm }) => {
    console.log(username, email, password, confirm);
  });

  const registerOptions = {
    username: { required: "Username is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    confirm: { required: "Confirm password is required" },
  };

  return (
    <div>
      <div className="bg-white flex items-center h-[100vh] w-[100vw]">
        <div className="w-[50vw] bg-login min-h-[100vh] bg-no-repeat flex items-center justify-center bg-cover">
          <Image
            src={ilustrasi}
            className="w-[80%] h-auto "
            alt={"Register Pict"}
          ></Image>
        </div>
        <div className="w-[50vw] h-[100vh] flex flex-col items-center justify-center">
          <h3 className="text-[#192BC2] text-[48px] font-[700] align-center mb-[8px]">
            Buat Akun
          </h3>
          <h5 className="w-[80%] font-[400] text-[#4C4C50] text-center text-[16px] mb-[48px] max-w-[400px]">
            Bergabung untuk mendapatkan bimbingan bersama mentor-mentor yang
            handal.
          </h5>
          <form
            className="w-[80%] max-w-[400px]"
            // onSubmit={handleRegister}
          >
            <div className="">
              <label className="flex text-left text-[16px] font[400] mb-[8px] text-[#121216]">
                Nama Lengkap
              </label>
              <input
                {...register("username", registerOptions.username)}
                value={forms.username}
                onChange={(e) =>
                  setForms({ ...forms, username: e.target.value })
                }
                name="username"
                type="text"
                className="w-[100%] px-[24px] py-[12px] border border-solid border-gray-500 rounded-lg text-[16px] font-[400]"
                placeholder="Masukkan nama lengkap"
              ></input>
              <div className="text-[#E4026F] text-left mt-[4px]">
                {errors?.username && errors.username.message}
              </div>
            </div>
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
            <div className="">
              <label className="flex text-left text-[16px] font[400] my-[8px] text-[#121216]">
                Konfirmasi Kata Sandi
              </label>
              <input
                {...register("confirm", registerOptions.password)}
                value={forms.confirm_password}
                onChange={(e) =>
                  setForms({ ...forms, confirm_password: e.target.value })
                }
                name="confirm"
                type="password"
                className="w-[100%] px-[24px] py-[12px] border border-solid border-gray-500 rounded-lg text-[16px] font-[400]"
                placeholder="Masukkan kata sandi"
              ></input>
              <div className="text-[#E4026F] text-left mt-[4px]">
                {errors?.confirm && errors.confirm.message}
              </div>
            </div>
            <div>
              <h5 className="mt-[16px] mb-[32px] font-[400] text-[16px] text-[#4C4C50]">
                Dengan mendaftar, anda setuju dengan{" "}
                <a href="" className="text-[#192BC2] font-[600] text-[16px]">
                  Syarat dan Ketentuan
                </a>{" "}
                serta{" "}
                <a href="" className="text-[#192BC2] font-[600] text-[16px]">
                  Kebijakan Privasi
                </a>{" "}
                yang berlaku
              </h5>
            </div>
            <button
              // onClick={handleRegister}
              type="submit"
              className="font-[600] text-[16px] text-white px-[24px] py-[12px] w-[100%] bg-[#192BC2] shadow-lg rounded-lg"
            >
              Buat Akun
            </button>
            <h5 className="mt-[24px] text-[16px] font-[400] text-[#4C4C50]">
              Sudah punya akun?{" "}
              <a href="/login" className="text-[#192BC2] font-[600]">
                Masuk
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
