import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
export default function hero() {
  return (
    <section className="hero mt-8">
      <div className="py-8">
        <h1 className="text-4xl font-semibold">
          Design Delicious <br />
          Your Cravings, <br />
          Your <span className="text-primary">Pizza!</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Craft Your Perfect Pizza Experience with Feastify – Where Flavor Meets
          Innovation. Immerse yourself in a culinary adventure like never
          before, where every pizza is a canvas waiting for your personal touch.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase  items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <FaArrowRight />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
