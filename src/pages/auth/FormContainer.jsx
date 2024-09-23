import { Link } from "react-router-dom";

const FormContainer = (props) => {
    const { children } = props;
    return (
        <div className="flex">
            <div className="relative hidden md:block md:w-2/3">
                <img
                    src="assets/authform-scene.png"
                    className="h-screen object-cover w-full"
                />
                <div className="top-0 left-0 w-full absolute bg-green-800/40 h-screen"></div>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-6 bg-green-50/80 min-h-screen">
                <Link to="/">
                    <img src="assets/authform-logo.png" className="w-24" />
                </Link>
                <h1 className="text-green-800 font-playfair text-4xl mb-6">
                    Plantify
                </h1>
                {children}
            </div>
        </div>
    );
};

export default FormContainer;
