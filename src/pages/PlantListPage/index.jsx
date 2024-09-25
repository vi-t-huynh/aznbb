import NavBar from "shared-components/NavBar";
import RedirectToSigninIfSignedOut from "shared-components/RedirectToSigninIfSignedOut";
import { useEffect, useState } from "react";
import * as PlantService from "services/plants";
import PlantItem from "./PlantItem";
import LoadingSpinner from "shared-components/LoadingSpinner";

const PlantListPage = () => {
    const [loading, setLoading] = useState(false);
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await PlantService.getPlants();
            const data = await response.json();
            setPlants(data);
            setLoading(false);
        })();
    }, []);

    return (
        <RedirectToSigninIfSignedOut>
            <div className="flex flex-col items-center min-h-screen bg-green-50">
                <NavBar />
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="w-full max-w-4xl mt-12">
                        <h1 className="text-green-800 text-4xl font-playfair mx-4 flex md:justify-start justify-center">
                            Plants In Stock
                        </h1>
                        <div className="flex flex-wrap justify-center gap-16 mt-8">
                            {plants.map((ele) => {
                                return <PlantItem plant={ele} key={ele.name} />;
                            })}
                        </div>
                    </div>
                )}
            </div>
        </RedirectToSigninIfSignedOut>
    );
};

export default PlantListPage;
