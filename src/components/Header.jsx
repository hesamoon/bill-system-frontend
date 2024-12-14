// icons
import profileIcon from "../assets/profile.svg";
import airLogoIcon from "../assets/air-logo.svg";

function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-50 p-4 border-b border-outline">
      <div className="border-2 border-black rounded-full p-2 w-10 h-10 flex items-center justify-center cursor-pointer">
        <img src={profileIcon} alt="profile" />
      </div>
      <div className="flex items-center gap-1">
        <span>فرابار پرواز</span>
        <img src={airLogoIcon} alt="air-logo" />
      </div>
    </header>
  );
}

export default Header;
