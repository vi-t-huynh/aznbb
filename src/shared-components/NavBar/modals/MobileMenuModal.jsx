import { SessionContext } from "context/SessionContext";
import { useContext } from "react";

const MobileMenuModal = (props) => {
    const { signOut, onCartOpenClick } = props;
    const { username } = useContext(SessionContext);
    return (
        <div className="w-36 h-56 flex flex-col bg-emerald-900 justify-center items-start rounded-bl-lg text-gray-300 gap-y-3 pl-8">
            <button>
                <i className="fa-solid fa-user mr-1 relative"></i> {username}
            </button>
            <button onClick={() => signOut()}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> sign
                out
            </button>
            <button onClick={onCartOpenClick}>
                <i className="fa-solid fa-cart-shopping"></i> cart
            </button>
        </div>
    );
};

export default MobileMenuModal;
