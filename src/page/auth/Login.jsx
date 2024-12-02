import { Link } from "react-router-dom";
import loginImage from "../../../public/phone.svg";
const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center  lg:h-fit">
      <div className="hidden lg:block">
        <img src={loginImage} alt="" />
      </div>
      <div className="w-[600px]     flex   items-center  justify-center">
        <form action="" className="flex gap-10  flex-col w-[400px]">
          <div className="w-full ">
            <h3 className=" text-4xl ">Log in to ForStore</h3>
            <p className="text-left my-5">Enter your details below</p>
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
          <div className="w-full flex justify-between items-center">
            <button className="bg-[#db4444] text-white px-[48px] py-[16px] rounded-md">
              Login
            </button>{" "}
            <Link className="text-[#db4444]">Forget Password?</Link>
          </div>
          <div>
            <p className="text-gray-500 text-center">
              Create an account
              <Link className="text-black ml-2 " to="/signup">
                Signup now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
