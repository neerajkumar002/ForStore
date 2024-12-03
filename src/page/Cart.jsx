import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const CartItem = () => {
  return ( 
    <div className="bg-white shadow-xl flex justify-between items-center  px-4 py-5 text-xl ">
      <div className="flex items-center">
        <img
          src="https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png"
          alt=""
          className=" w-[50px] h=[50px]  lg:w-[100px] lg:h-[80px]"
        />
        <p className="text-sm">Guci Bloom</p>
      </div>
      <p className="text-sm">₹1000</p>
      <div className="flex items-center gap-3">
        <button>
          <Minus className="w-4" />
        </button>
        <p className="text-sm">0</p>
        <button>
          <Plus className="w-4" />
        </button>
      </div>
      <p className="text-sm">₹1000</p>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="w-full  px-8 lg:px-24 ">
      <div className="mt-10 mb-10">
        <Link to="/" className="text-gray-400">
          Home
        </Link>{" "}
        <span className="text-gray-500">/</span> <Link>Cart</Link>
      </div>
      <div className="flex  flex-col gap-8  "> 
        <div className="bg-white shadow-xl w-full flex justify-evenly  lg:justify-between   font-semibold gap-4 py-3 lg:px-4 ">
          <span className="lg:pl-10 ">Product</span>
          <span className="lg:pl-10 ">Price</span>
          <span className="lg:pl-10 ">Quanity</span>
          <span className="lg:pl-10 ">Subtotal</span>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="flex  flex-col lg:flex-row lg:justify-between gap-4 py-8">
        <div className="flex  gap-3  h-10 lg:h-14 lg:w-[600px] ">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full border border-black rounded px-4"
          />
          <button
            className="bg-[#db4444]
             px-3 py-2 text-white rounded-sm w-[70%]
             text-sm
            "
          >
            Apply Coupon
          </button>
        </div>
        <div className="border border-black rounded-md  flex flex-col gap-4 px-4 py-6 lg:w-[400px]">
          <p>Cart Total</p>
          <div className="flex justify-between border-b border-gray-400 py-3">
            <p>Subtotal:</p> <span>$1000</span>
          </div>
          <div className="flex justify-between border-b border-gray-400 py-3">
            <p>Shipping:</p> <span>Free</span>
          </div>
          <div className="flex justify-between  ">
            <p>Total:</p> <span>$1000</span>
          </div>
          <div className="text-center">
            <button
              className="bg-[#db4444]
             px-5 py-3 text-white rounded-sm
            "
            >
              Procees to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
