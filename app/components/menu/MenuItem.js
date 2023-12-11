const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/20 transition-all duration-500">
      <div className="text-center ">
        <img src="/pizza.png" alt="pizza" className="max-h-28 block mx-auto" />
      </div>
      <h4 className="my-3 font-semibold text-xl">Peporoni pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      </p>
      <div className="bg-primary px-4 py-2 text-white rounded-full mt-2">
        Add to cart $18
      </div>
    </div>
  );
};
export default MenuItem;
