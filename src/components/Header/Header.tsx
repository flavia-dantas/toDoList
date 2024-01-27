import Image from "next/image";
import Logo from "../../assets/logo.svg";

const Header = () => (
  <header className="flex h-[200px] justify-center bg-gray-700">
    <Image src={Logo} alt="logo" />
  </header>
);

export default Header;
