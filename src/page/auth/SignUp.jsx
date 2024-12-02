import { Link } from "react-router-dom";
import loginImage from "../../../public/phone.svg";
import iconGoogle from "../../../public/Icon-Google.svg";
const SignUp = () => {
  return (
    <div className="w-full h-screen flex justify-center lg:h-fit ">
      <div className="hidden lg:block">
        <img src={loginImage} alt="" />
      </div>
      <div className="w-[600px]   flex   items-center  justify-center">
        <form action="" className="flex gap-10  flex-col w-[400px]">
          <div className="w-full ">
            <h3 className=" text-4xl ">Create an account</h3>
            <p className="text-left my-5">Enter your details below</p>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-gray-400 outline-none w-full py-3"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border-b border-gray-400 outline-none w-full py-3"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Enter Your Password"
              className="border-b border-gray-400 outline-none w-full py-3"
            />
          </div>
          <div className="w-full flex gap-3 flex-col ">
            <button className="bg-[#db4444] text-white px-[48px] py-[16px] rounded-md">
              Create Account
            </button>
            <button className="flex  gap-5 items-center justify-center px-[48px] py-[16px] rounded-md border border-gray-300">
              <img src={iconGoogle} alt="google icon" />
              Sign up with Google
            </button>
            <p className="text-gray-500 text-center">
              Already have account?{" "}
              <Link className="text-black" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
