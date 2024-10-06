import Hamburger from "./Hamburger";
import Logo from "./Logo";

const Header = async () => {

  return (
    <header className="flex items-center justify-between px-2 border-b lg:hidden">
      <h1 className="text-xl">
        <Logo />
      </h1>
      <Hamburger />
    </header>
  );
};

export default Header;
