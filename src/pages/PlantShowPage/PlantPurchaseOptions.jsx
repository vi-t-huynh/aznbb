import PlantColorItem from "shared-components/PlantColorItem";

const PlantPurchaseOption = (props) => {
    const { plant, setIdx, idx } = props;

    return (
        <div className="flex flex-col justify-center mt-2">
            <h2 className="text-green-800 text-lg flex justify-center md:justify-start items-center">
                <i className="fa-solid fa-brush mr-2"></i>Pot Color
            </h2>
            <div className="flex justify-center md:justify-start">
                <div className="flex mt-5 space-x-4">
                    {plant.images.map((image, index) => {
                        return (
                            <PlantColorItem
                                key={index}
                                image={image}
                                index={index}
                                setIdx={setIdx}
                                idx={idx}
                                length="w-8 h-8"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PlantPurchaseOption;
