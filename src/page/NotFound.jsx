import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-4 justify-center     ">
      <h1 className="text-8xl font-bold">404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Link
        to="/"
        className="bg-[#db4444] text-white px-[48px] py-[16px] rounded-md"
      >
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
