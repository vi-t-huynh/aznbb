const PlantHeading = (props) => {
    const { name, price } = props;
    return (
        <div className="flex justify-between text-green-800 font-playfair text-3xl">
            <h1>{name}</h1>
            <h1>${price}</h1>
        </div>
    );
};

export default PlantHeading;
