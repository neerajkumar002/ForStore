const ProductCard = ({ image, title, price, description, toogleDisplay }) => {
  return (
    <div
      className={`${
        toogleDisplay ? "w-full h-[300px] flex items-center gap-4" : "flex flex-col items-center"
      }  shadow-lg px-3 p-5 `}
    >
      <img
        src={image}
        alt={title}
        className={`${toogleDisplay ? "w-[250px] h-[200px]" : " h-[150px]"}   `}
      />
      <div className="flex flex-col gap-4 pt-2">
        <p className="  r">{title}</p>
        <p>{price}</p>
        <p className={`${toogleDisplay ? "" : "hidden"}`}>{description}</p>
        <button className="bg-[#DB4444] w-[100px] text-white ">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
