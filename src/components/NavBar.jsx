/*importing resources */
import { appleImg, bagImg, searchImg } from "../utils/index.js";

/*importing constants */
import navData from "../constants/navbar.js";

const NavBar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="w-full flex screen-max-width items-center justify-center gap-9">
                {/* apple logo */}
                <img src={appleImg} width={14} height={18} alt="apple logo" />

                {/* nav items  */}
                <div className="flex text-sm max-lg:hidden">
                    {navData.map((nav, index) => (
                        <div
                            className=" text-gray px-5 max-xl:px-4 max-lg:px-3 hover:text-white transition-all"
                            key={index}
                        >
                            {nav}
                        </div>
                    ))}
                </div>

                {/* search bar and bag logo */}
                <div className=" flex gap-9 max-lg:justify-end max-lg:flex-1 ">
                    {/* search bar */}
                    <img
                        src={searchImg}
                        alt="search logo"
                        width={14}
                        height={14}
                    />

                    {/* bag  logo*/}
                    <img src={bagImg} alt="bag logo" width={14} height={14} />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
