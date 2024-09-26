import { useCallback, useContext, useEffect, useState } from "react";
import { SessionContext } from "context/SessionContext";
import CartItem from "./CartItem";
import * as CartService from "services/cart";
import { motion } from "framer-motion";
import clsx from "clsx";

const CartModal = () => {
    const { username } = useContext(SessionContext);
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCart = useCallback(async () => {
        const response = await CartService.getCart();
        const data = await response.json();
        setCart(data);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    return (
        <motion.div
            initial={{ opacity: 0, translateX: "100%" }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col w-full max-w-xl h-screen bg-green-50"
        >
            <div className="bg-emerald-800 min-h-20 text-white flex items-center justify-center text-2xl">
                <h1>{username}&apos;s Cart</h1>
            </div>

            {isLoading ? (
                <i className="flex justify-center mt-24 text-4xl fa-thin fa-spinner-third animate-spin text-green-800"></i>
            ) : (
                <div className="overflow-y-auto pb-20">
                    {cart.map((item, idx) => (
                        <div
                            key={item.id}
                            className={clsx(
                                idx !== 0
                                    ? "border-t border-gray-400/30 px-4 py-6 mx-4"
                                    : "px-4 py-6 mx-4"
                            )}
                        >
                            <CartItem
                                item={item}
                                fetchCart={fetchCart}
                                setIsLoading={setIsLoading}
                            />
                        </div>
                    ))}
                </div>
            )}

            <div className="flex flex-1 items-end">
                <div className=" flex flex-col border-t border-gray-400/30 w-full">
                    <div className="flex justify-between px-6 py-3 text-gray-500 text-sm">
                        <p>
                            {cart.reduce((acc, curr) => acc + curr.quantity, 0)}{" "}
                            items
                        </p>
                        <p>
                            subtotal:{" "}
                            <span className="text-gray-600">
                                $
                                {cart.reduce(
                                    (acc, curr) =>
                                        acc +
                                        curr.price_per_unit * curr.quantity,
                                    0
                                )}
                            </span>
                        </p>
                    </div>
                    <button className="text-white bg-emerald-800 rounded-full flex-1 mx-4 mb-4 py-2">
                        Checkout{" "}
                        <i className="fa-solid fa-credit-card ml-2"></i>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default CartModal;
