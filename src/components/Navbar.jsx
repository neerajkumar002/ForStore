import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-5 py-6">
      <div className="font-bold text-3xl ">ForStore</div>
      <div className="flex items-center gap-3">
        <ul className="flex gap-5">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Products</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Login</Link>
          </li>
        </ul>
        <span className="relative">
          <ShoppingCart width={24} height={24} />
          <span className="bg-[#DB4444] text-white   min-w-4 h-4 py-2 px-1  rounded-full absolute -top-1 -right-2 flex items-center justify-center">
            2
          </span>
        </span>
      </div>
    </div>
  );    
};

export default Navbar;
