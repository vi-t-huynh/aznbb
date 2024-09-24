import NavBar from "shared-components/NavBar";
import RedirectToSigninIfSignedOut from "shared-components/RedirectToSigninIfSignedOut";
import { useEffect, useState } from "react";
import * as PlantService from "services/plants";
import PlantItem from "./PlantItem";

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
                    <div className="mt-24">
                        <i className="text-4xl fa-thin fa-spinner-third animate-spin text-green-800"></i>
                    </div>
                ) : (
                    <div className="w-full max-w-4xl mt-12">
                        <h1 className="text-green-800 text-4xl font-playfair mx-4">
                            Plants In Stock
                        </h1>
                        <div className="flex flex-wrap justify-center gap-16 mt-8">
                            {plants.map((ele) => {
                                console.log(ele);
                                return <PlantItem plant={ele} key={ele.id} />;
                            })}
                        </div>
                    </div>
                )}
            </div>
        </RedirectToSigninIfSignedOut>
    );
};

export default PlantListPage;
