import { registerValidation } from "@/utils/validationSchema";
import axios from "axios";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface FormikConfig {
  userName: string;
  password: string;
  email: string;
  confirmPassword: string;
}

const initialValues: FormikConfig = {
  userName: "",
  password: "",
  email: "",
  confirmPassword: "",
};

const Register = () => {
  const [hideAndShowPass, setHideAndShowPass] = useState(false);
  const [hideAndShowConPass, setHideAndShowConPass] = useState(false);

  const { handleBlur, errors, values, handleChange, touched, handleSubmit } =
    useFormik<FormikConfig>({
      initialValues,
      validationSchema: registerValidation,
      onSubmit: async (value) => {
        try {
          const sendClientData = await axios.post('/api/auth/register', {
            clientData: value
          })
          console.log(value);
        } catch (error) {
          console.error(error);
          throw new Error("error while submitting the form");
        }
      },
    });

  useEffect(() => {
    if (hideAndShowPass) {
      setTimeout(() => setHideAndShowPass(false), 10000);
    }

    if (hideAndShowConPass) {
      setTimeout(() => setHideAndShowConPass(false), 10000);
    }
  }, [hideAndShowPass, hideAndShowConPass]);

  return (
    <>
      <Head>
        <title>Task - Sign Up</title>
      </Head>
      <div className="h-screen  flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center gap-8">
          <div
            style={{
              backgroundImage: `url(../SignUpBg.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-[50%] h-full flex justify-center items-center rounded-e-lg"
          >
            <div className=" w-[70%]">
              <h1 className="text-6xl text-white font-bold line-clamp-1">
                Welcome to Demo task
              </h1>
            </div>
          </div>
          <div className="w-[50%] h-full flex justify-start items-center">
            <div className="w-[85%] h-[60%]">
              <h2 className="text-white font-bold text-3xl">Sign Up</h2>
              <p className="text-white line-clamp-2 text-sm font-medium my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum laborum delectus reprehenderit rem numquam accusamus
                sunt doloribus repellat ipsum necessitatibus, nemo harum
                voluptatibus fugiat sit. Amet odit maiores sapiente? Inventore?
              </p>

              <div className="w-[80%] mt-10 flex flex-col justify-start items-start gap-6">
                <div className="w-full relative">
                  <input
                    type="text"
                    name="userName"
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Full Name"
                    className={`w-full rounded-lg
                   border border-[#ccc]  outline-none
                    focus:outline-none bg-[#202020] text-[#ccc] text-[15px] px-4 py-3 font-[Montserrat] font-[400] ${
                      errors.userName &&
                      touched.userName &&
                      "ring-1 border-none ring-red-500"
                    }`}
                  />

                  <span className="absolute w-full text-sm text-red-500 text-center left-0 -bottom-5">
                    {errors.userName && touched.userName && errors.userName}
                  </span>
                </div>
                <div className="w-full relative">
                  <input
                    type="text"
                    placeholder="Email ID"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={`w-full rounded-lg
                   border border-[#ccc]  outline-none
                    focus:outline-none bg-[#202020] text-[#ccc] text-[15px] px-4 py-3 font-[Montserrat] font-[400] ${
                      errors.email &&
                      touched.email &&
                      "ring-1 ring-red-500 border-none"
                    }`}
                  />

                  <span className="absolute w-full text-sm text-red-500 text-center left-0 -bottom-5">
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>

                <div className="flex justify-between items-center gap-3 w-full">
                  <div className="w-[50%] relative">
                    <input
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type={`${hideAndShowPass ? "text" : "password"}`}
                      placeholder="Password"
                      className={`w-full rounded-lg
                   border border-[#ccc]  outline-none
                    focus:outline-none bg-[#202020] text-[#ccc] text-[15px] px-4 py-3 font-[Montserrat] font-[400] ${
                      errors.password &&
                      touched.password &&
                      "ring-1 ring-red-500 border-none"
                    }`}
                    />
                    <img
                      onClick={() => setHideAndShowPass(!hideAndShowPass)}
                      className={`absolute ${
                        hideAndShowPass ? "opacity-100" : "opacity-70"
                      }  hover:opacity-100 transition-all duration-150 ease-in-out h-5 w-5 right-4 top-4 cursor-pointer`}
                      src="../EyeIcon.png"
                      alt="eye-icon"
                    />

                    <span className="absolute w-full text-sm text-red-500 text-center left-0 -bottom-7">
                      {errors.password && touched.password && errors.password}
                    </span>
                  </div>
                  <div className="w-[50%] relative">
                    <input
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type={`${hideAndShowConPass ? "text" : "password"}`}
                      placeholder="Confirm Password"
                      className={`w-full rounded-lg
                   border border-[#ccc]  outline-none
                    focus:outline-none bg-[#202020] text-[#ccc] text-[15px] px-4 py-3 font-[Montserrat] font-[400] ${
                      errors.confirmPassword &&
                      touched.confirmPassword &&
                      "ring-1 ring-red-500 border-none"
                    }`}
                    />
                    <img
                      onClick={() => setHideAndShowConPass(!hideAndShowConPass)}
                      className={`absolute ${
                        hideAndShowConPass ? "opacity-100" : "opacity-70"
                      }  hover:opacity-100 transition-all duration-150 ease-in-out h-5 w-5 right-4 top-4 cursor-pointer`}
                      src="../EyeIcon.png"
                      alt="eye-icon"
                    />

                    <span className="absolute w-full text-sm text-red-500 text-center left-0 -bottom-7">
                      {errors.confirmPassword &&
                        touched.confirmPassword &&
                        errors.confirmPassword}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="border-white text-lg border text-white font-[Montserrat] font-[500] px-4 py-2 rounded-2xl hover:rounded transition-all duration-150 ease-in-out hover:text-[#008ed7] hover:bg-white mt-5"
                >
                  Sign Up
                </button>
              </div>

              <p className="text-white font-[Montserrat] font-[500] text-md mt-4">
                Already have a Account ?{" "}
                <Link href="/auth/login" className="text-[#008ed7] font-[700]">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
