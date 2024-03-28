import navLogo from "../../assets/navlogo.png";
import profile from "../../assets/profile.svg";

const NavBar = () => {
  return (
    <div className="flex w-full shadow-lg p-[1rem]">
      <div >
        <img src={navLogo} alt="Logo" />
      </div>
      <div className="w-full">
        <div className="flex justify-end">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
