import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { AlignJustify, LayoutGrid } from "lucide-react";

const ProductListing = () => {
  const [productList, setProductlist] = useState([]);
  const [toogleDisplay, setToogleDisplay] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductlist(data));
  }, []);
  console.log(productList);
  return (
    <div className="px-80  flex">
      <Sidebar />
      <div className="w-full py-10 px-3 ">
        <div className="w-full grid grid-cols-3 items-center mb-10 ">
          <div className="  flex gap-3 ">
            <button
              onClick={() => setToogleDisplay(false)}
              className="bg-gray-300 rounded-sm px-1 py-1 "
            >
              <LayoutGrid />
            </button>
            <button
              onClick={() => setToogleDisplay(true)}
              className="bg-gray-300 rounded-sm px-1 py-1"
            >
              <AlignJustify />
            </button>
          </div>
          <div className="text-center">{productList.length} total products</div>
          <div className="text-right">
            <select
              name=""
              id=""
              className="border border-gray-300 w-[150px] px-1 py-1"
            >
              <option value="">Price(Lowest)</option>
              <option value="">Price(Lowest)</option>
            </select>
          </div>
        </div>
        <div
          className={`${
            toogleDisplay ? "flex flex-col " : "grid grid-cols-4"
          } gap-4   `}
        >
          {productList &&
            productList.map((item) => (
              <ProductCard
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
                toogleDisplay={toogleDisplay}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ProductListing;
