import NavBar from "shared-components/NavBar";
import RedirectToSigninIfSignedOut from "shared-components/RedirectToSigninIfSignedOut";
import LoadingSpinner from "shared-components/LoadingSpinner";
import * as PlantService from "services/plants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlantInfoSection from "./PlantInfoSection";

const PlantShowPage = () => {
    const { plantId } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await PlantService.getPlantById({ id: plantId });
            const data = await response.json();
            setPlant(data);
            setLoading(false);
        })();
    }, [plantId]);

    return (
        <RedirectToSigninIfSignedOut>
            <div className="flex flex-col items-center min-h-screen bg-green-50">
                <NavBar />
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <PlantInfoSection plant={plant} />
                )}
            </div>
        </RedirectToSigninIfSignedOut>
    );
};

export default PlantShowPage;
