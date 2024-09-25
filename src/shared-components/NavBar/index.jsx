import { SessionContext } from "context/SessionContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const { username, signOut } = useContext(SessionContext);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav
            className="flex justify-center w-full bg-emerald-800"
            onMouseLeave={() => {
                setOpenMenu(false);
            }}
        >
            <div className="flex justify-between w-full max-w-4xl text-white font-playfair py-2 md:px-2 px-4">
                <div className="flex items-center space-x-2">
                    <Link to="/plants" className="flex items-center space-x-2">
                        <img src="/assets/logo-light.png" className="w-10" />
                        <p className="text-2xl">Plantify</p>
                    </Link>
                </div>
                <div className="flex items-center justify-end font-lato text-white/80 min-w-24">
                    <button
                        onClick={() => {
                            setOpenMenu(true);
                        }}
                    >
                        <i className="fa-solid fa-user mr-1 relative"></i>{" "}
                        {username}
                    </button>
                    {openMenu && (
                        <button
                            className="absolute top-14 text-gray-500 bg-white p-2 rounded shadow"
                            onClick={() => {
                                signOut();
                            }}
                        >
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                            sign out
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
