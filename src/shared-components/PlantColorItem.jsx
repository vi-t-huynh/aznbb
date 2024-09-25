import clsx from "clsx";
import { POT_COLORS } from "services/util";

const PlantColorItem = (props) => {
    const { image, index, setIdx, idx, length, pHidden } = props;

    return (
        <div
            className="flex flex-col text-center items-center"
            onMouseEnter={() => {
                setIdx(index);
            }}
        >
            <div
                className={clsx(
                    "mr-1 rounded-full border border-slate-300",
                    POT_COLORS[image.pot_color],
                    length,
                    idx === index &&
                        "outline outline-2 outline-slate-400 outline-offset-1"
                )}
            ></div>
            <p
                className={clsx(
                    "mt-1",
                    idx === index ? "text-gray-600" : "text-gray-400",
                    pHidden ? "hidden" : null
                )}
            >
                {image.pot_color}
            </p>
        </div>
    );
};

export default PlantColorItem;
