import { useState } from "react";
import BenefitBox from "./BenefitBox";
import PlantHeading from "./PlantHeading";
import PlantPurchaseOption from "./PlantPurchaseOptions";
import { addPlantToCart } from "services/cart";

const PlantInfoSection = (props) => {
    const { plant } = props;
    const [idx, setIdx] = useState(0);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(false);
    return (
        <div className="w-full max-w-4xl flex flex-col md:flex-row mt-6 md:mt-12 font-lato">
            <div className="md:hidden flex flex-col flex-1 space-y-4 font-lato m-6">
                <PlantHeading name={plant.name} price={plant.price} />
                <p className="text-gray-500 text-lg italic">
                    {plant.botanical_name}
                </p>
            </div>
            <div className="flex flex-col items-center flex-1 mx-6">
                <img src={plant.images[idx].src} className="rounded-lg" />
                <div className="flex mt-4">
                    <BenefitBox
                        icon="fa-regular fa-circle-check"
                        title="Guaranteed Healthy"
                        description="Guaranteed to arrive healthy or your money back"
                    />
                    <div className="bg-gray-300 w-px"></div>
                    <BenefitBox
                        icon="far fa-shipping-fast"
                        title="Free Shipping"
                        description="Get free ground shipping on all orders $50 or more"
                    />
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-y-5 font-lato mx-6 md:my-0 my-6">
                <div className="hidden md:block">
                    <PlantHeading name={plant.name} price={plant.price} />
                </div>
                <p className="md:flex hidden text-gray-500 text-lg italic">
                    {plant.botanical_name}
                </p>
                <p className="text-gray-600">{plant.description}</p>
                <PlantPurchaseOption setIdx={setIdx} plant={plant} idx={idx} />
                <div className="flex mt-2">
                    <div className="flex items-center gap-2 text-xl border border-gray-300 rounded-full px-4 py-2 text-gray-500 ">
                        <button
                            className="text-xl"
                            onClick={() => {
                                if (count - 1 != 0) {
                                    setCount(count - 1);
                                }
                            }}
                        >
                            <i className="fa-solid fa-minus"></i>
                        </button>
                        <p className="text-green-800">{count}</p>
                        <button
                            className="text-xl"
                            onClick={() => {
                                setCount(count + 1);
                            }}
                        >
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <button
                        className="mx-6 bg-emerald-800 text-white px-6 py-2 rounded-full flex-1"
                        onClick={async () => {
                            setLoading(true);
                            const response = await addPlantToCart({
                                quantity: count,
                                pot_color: plant.images[idx].pot_color,
                                id: plant.id,
                            });
                            console.log(response.status);
                            setLoading(false);
                        }}
                    >
                        {loading ? (
                            <i className="fa-duotone fa-solid fa-spinner animate-spin text-lg mr-1"></i>
                        ) : (
                            <i className="fa-solid fa-cart-shopping text-lg mr-1"></i>
                        )}{" "}
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlantInfoSection;
