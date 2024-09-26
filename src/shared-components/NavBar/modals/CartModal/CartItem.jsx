import * as CartService from "services/cart";
const CartItem = (props) => {
    const { item, fetchCart, setIsLoading } = props;

    return (
        <div className="flex font-playfair gap-x-4">
            <img
                src={item.image_src}
                alt={item.plant_name}
                className="w-28 h-30 rounded-lg"
            />
            <div className="flex flex-col flex-1 gap-y-2">
                <div className="flex justify-between">
                    <p className="text-lg text-green-800">{item.plant_name}</p>
                    <p className="text-gray-500">
                        ${item.price_per_unit * item.quantity}
                    </p>
                </div>
                <div className="flex flex-1 font-lato text-sm gap-x-2">
                    <div className="flex flex-col text-gray-400 mr-4 gap-y-1">
                        <p>price:</p>
                        <p>qty:</p>
                        <p>color:</p>
                    </div>
                    <div className="flex flex-col text-gray-500 gap-y-1">
                        <p>${item.price_per_unit}</p>
                        <p>{item.quantity}</p>
                        <p>{item.pot_color}</p>
                    </div>
                </div>
                <div className="flex flex-1 justify-end">
                    <button
                        className="hover:text-red-500 text-sm text-gray-500"
                        onClick={async () => {
                            setIsLoading(true);
                            await CartService.removePlantFromCart(item.id);
                            fetchCart();
                        }}
                    >
                        <i className="fa-solid fa-trash-can "></i> remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
