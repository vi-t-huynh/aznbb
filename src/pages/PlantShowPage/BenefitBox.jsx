const BenefitBox = (props) => {
    const { icon, title, description } = props;
    return (
        <div className="flex flex-col text-center flex-1 p-3 mt-2 space-y-1">
            <i className={`${icon} text-green-800 text-3xl`}></i>
            <h2 className="text-gray-700">{title}</h2>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    );
};

export default BenefitBox;
