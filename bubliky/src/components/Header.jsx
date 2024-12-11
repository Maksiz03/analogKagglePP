import { useState } from "react";

const Header = ({ user = { name: "User", image: "/user_image.svg" } }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = {
    Соревнования: "#",
    Обучение: "#",
    Форум: "#",
    FAQ: "#",
    Контакты: "#",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex flex-row w-full h-[92px] bg-[#fcfcfd] items-center text-[#777e90] font-bold px-4 md:px-10 2xl:px-40 gap-8 justify-between border-b border-[#e6e8ec]">
      <div className="flex items-center gap-8 flex-shrink-0">
        <div id="logo" className="h-[52px] flex-shrink-0">
          <img
            src="/logo.svg"
            alt=""
            className="w-full h-full object-contain cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
        </div>

        <div
          id="separator"
          className="hidden md:block h-[40px] w-[2px] bg-[#e6e8ec] flex-shrink-0"
        ></div>
      </div>

      {/* Middle section (menu) */}
      <div id="menu" className="hidden md:flex flex-row gap-8 flex-1">
        {Object.keys(menuItems).map((item, index) => (
          <a
            href={menuItems[item]}
            key={index}
            className="hover:text-black transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden self-end"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        <div
          id="user"
          className="hidden md:block w-[40px] h-[40px] flex-shrink-0 bg-[#e6e8ec] rounded-full"
        >
          <img
            src={user.image}
            alt="User Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[92px] left-0 right-0 bg-[#fcfcfd] md:hidden z-50">
          <div className="flex flex-col w-full border-t border-[#e6e8ec]">
            {Object.keys(menuItems).map((item, index) => (
              <a
                href={menuItems[item]}
                key={index}
                className="px-4 py-3 hover:bg-gray-100 border-b border-[#e6e8ec]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="px-4 py-3 border-b border-[#e6e8ec] flex items-center flex-row gap-2">
              <div className="bg-[#e6e8ec] w-[40px] h-[40px] rounded-full">
                <img src={user.image} alt="User Image" className="h-[40px]" />
              </div>
              <span>Привет, {user.name}!</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
