import Link from "next/link";
const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <nav className="flex items-center gap-8 text-gray-400 font-semibold ">
        <Link href={"/"} className="text-primary text-2xl font-semibold mr-10">
          FEASTIFY
        </Link>
        <Link
          href={"/"}
          className="hover:text-gray-600 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href={"/"}
          className="hover:text-gray-600 transition-all duration-300"
        >
          Menu
        </Link>
        <Link
          href={"/"}
          className="hover:text-gray-600 transition-all duration-300"
        >
          About
        </Link>
        <Link
          href={"/"}
          className="hover:text-gray-600 transition-all duration-300"
        >
          Contact
        </Link>
      </nav>
      <nav className="flex items-center gap-6">
        <Link
          href={"/login"}
          className="text-gray-400 font-semibold hover:text-gray-600 transition-all duration-300"
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className="bg-primary text-white px-6 py-2 rounded-full"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};
export default Header;
