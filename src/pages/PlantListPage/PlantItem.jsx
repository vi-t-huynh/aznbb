import clsx from "clsx";
import { useState } from "react";

const POT_COLORS = {
    stone: "bg-stone-200",
    slate: "bg-slate-300",
    sky: "bg-sky-700",
    black: "bg-gray-600",
    white: "bg-gray-50",
    amber: "bg-amber-600",
};

const PlantItem = (props) => {
    const { images, name, price } = props.plant;
    const [idx, setIdx] = useState(Math.floor(Math.random() * images.length));
    return (
        <div>
            <img
                src={images[idx].src}
                alt={name}
                className="w-60 h-72 rounded"
            />
            <div className="flex justify-between font-lato text-green-700 mt-2">
                <p>{name}</p>
                <p>{`$${price}`}</p>
            </div>
            <div className="flex justify-between font-lato">
                <p>{images[idx].pot_color}</p>
                <div className="flex">
                    {images.map((image, index) => {
                        return (
                            <div
                                key={index}
                                className={clsx(
                                    `w-4 h-4 mr-1 rounded-full border border-slate-300`,
                                    POT_COLORS[image.pot_color],
                                    idx === index &&
                                        "outline outline-2 outline-slate-400 outline-offset-1"
                                )}
                                onMouseEnter={() => {
                                    setIdx(index);
                                }}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PlantItem;
