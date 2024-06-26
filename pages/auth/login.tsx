import Head from "next/head";
import Link from "next/link";
import React from "react";

const Login = () => {
  const [hideAndShowPass, setHideAndShowPass] = React.useState(false);

  React.useEffect(() => {
    if (hideAndShowPass) {
      setTimeout(() => setHideAndShowPass(false), 10000);
    }
  }, [hideAndShowPass]);

  return (
    <>
      <Head>
        <title>Task - Log In</title>
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
                Welcome back to Demo task
              </h1>
            </div>
          </div>
          <div className="w-[50%] h-full flex justify-start items-center">
            <div className="w-[85%] h-[60%]">
              <h2 className="text-white font-bold text-3xl">Log in</h2>
              <p className="text-white line-clamp-2 text-sm font-medium my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum laborum delectus reprehenderit rem numquam accusamus
                sunt doloribus repellat ipsum necessitatibus, nemo harum
                voluptatibus fugiat sit. Amet odit maiores sapiente? Inventore?
              </p>

              <div className="w-[80%] mt-10 flex flex-col justify-start items-start gap-6">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Email ID"
                    className="w-full rounded-lg
                   border border-[#ccc]  outline-none
                    focus:outline-none bg-[#202020] text-[#ccc] text-[15px] px-4 py-3 font-[Montserrat] font-[400]"
                  />
                </div>
                <div className="w-full relative">
                  <input
                    type={`${hideAndShowPass ? "text" : "password"}`}
                    placeholder="Password"
                    className="w-full rounded-lg
                   border border-[#ccc]  outline-none
                    focus:outline-none bg-[#202020] text-[#ccc] text-[15px] px-4 py-3 font-[Montserrat] font-[400]"
                  />
                  <img
                    onClick={() => setHideAndShowPass(!hideAndShowPass)}
                    className={`absolute ${
                      hideAndShowPass ? "opacity-100" : "opacity-70"
                    }  hover:opacity-100 transition-all duration-150 ease-in-out h-5 w-5 right-4 top-4 cursor-pointer`}
                    src="../EyeIcon.png"
                    alt="eye-icon"
                  />
                </div>

                <button className="border-white text-lg border text-white font-[Montserrat] font-[500] px-4 py-2 rounded-2xl hover:rounded transition-all duration-150 ease-in-out hover:text-[#008ed7] hover:bg-white">
                  Log In
                </button>
              </div>

              <p className="text-white font-[Montserrat] font-[500] text-md mt-4">
                Don’t have an account ?{" "}
                <Link href="/auth/register" className="text-[#008ed7] font-[700]">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
