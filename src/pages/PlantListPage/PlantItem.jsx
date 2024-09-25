import { useState } from "react";
import { Link } from "react-router-dom";
import PlantColorItem from "shared-components/PlantColorItem";

const PlantItem = (props) => {
    const { images, name, price, id } = props.plant;
    const [idx, setIdx] = useState(Math.floor(Math.random() * images.length));
    return (
        <div>
            <Link to={`/plants/${id}`}>
                <img
                    src={images[idx].src}
                    alt={name}
                    className="w-60 h-72 rounded"
                />
            </Link>
            <div className="flex justify-between font-lato text-green-700 mt-2">
                <p>{name}</p>
                <p>{`$${price}`}</p>
            </div>
            <div className="flex justify-between font-lato">
                <p>{images[idx].pot_color}</p>
                <div className="flex items-center">
                    {images.map((image, index) => {
                        return (
                            <PlantColorItem
                                key={index}
                                image={image}
                                index={index}
                                setIdx={setIdx}
                                idx={idx}
                                length="w-4 h-4"
                                pHidden={true}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PlantItem;
