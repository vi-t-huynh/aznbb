import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

const ModalWrapper = (props) => {
    const { children, isOpen, setOpenClose } = props;
    const backgroundRef = useRef(null);

    if (!isOpen) return null;
    return (
        <RemoveScroll>
            <div
                ref={backgroundRef}
                className="fixed top-0 left-0 w-full h-full bg-black/15 backdrop-blur-sm flex items-start justify-end font-playfair z-20"
                onClick={(e) => {
                    if (e.target === backgroundRef.current) {
                        setOpenClose(false);
                    }
                }}
            >
                {children}
                <button
                    className="absolute top-4 right-4 text-white text-lg bg-gray-400/30 w-8 h-8 rounded-full flex items-center justify-center"
                    onClick={() => setOpenClose(false)}
                >
                    <i className="fa-solid fa-x text-white/70"></i>
                </button>
            </div>
        </RemoveScroll>
    );
};

export default ModalWrapper;
