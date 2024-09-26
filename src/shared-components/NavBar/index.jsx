import { SessionContext } from "context/SessionContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal";
import ModalWrapper from "./modals/ModalWrapper";
import MobileMenuModal from "./modals/MobileMenuModal";

const NavBar = () => {
    const { username, signOut } = useContext(SessionContext);
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    return (
        <>
            <nav
                className="flex justify-center w-full bg-emerald-800 min-h-20"
                onMouseLeave={() => {
                    setOpenMenu(false);
                }}
            >
                <div className="flex justify-between w-full max-w-4xl text-white font-playfair py-2 md:px-2 px-4">
                    <div className="flex items-center gap-x-2">
                        <Link
                            to="/plants"
                            className="flex items-center space-x-2"
                        >
                            <img
                                src="/assets/logo-light.png"
                                className="w-10"
                            />
                            <p className="text-2xl">Plantify</p>
                        </Link>
                    </div>
                    <div className="flex items-center justify-end font-lato text-white/80 min-w-24">
                        <div className="hidden md:flex gap-x-4">
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
                                    className="absolute top-14 mr-7 text-gray-500 bg-white p-2 rounded shadow"
                                    onClick={() => {
                                        signOut();
                                    }}
                                >
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                                    sign out
                                </button>
                            )}
                            <button
                                className="flex items-center justify-center gap-x-1"
                                onClick={() => {
                                    setOpenCart(true);
                                }}
                            >
                                <i className="fa-solid fa-cart-shopping"></i>{" "}
                                cart
                            </button>
                        </div>
                        <button
                            className="md:hidden"
                            onClick={() => setOpenMobileMenu(true)}
                        >
                            <i className="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </nav>

            <ModalWrapper
                isOpen={openMobileMenu}
                setOpenClose={setOpenMobileMenu}
            >
                <MobileMenuModal
                    signOut={signOut}
                    onCartOpenClick={() => {
                        setOpenCart(true);
                        setOpenMobileMenu(false);
                    }}
                />
            </ModalWrapper>

            <ModalWrapper isOpen={openCart} setOpenClose={setOpenCart}>
                <CartModal />
            </ModalWrapper>
        </>
    );
};

export default NavBar;
