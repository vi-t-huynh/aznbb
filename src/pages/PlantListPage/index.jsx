import NavBar from "shared-components/NavBar";
import RedirectToSigninIfSignedOut from "shared-components/RedirectToSigninIfSignedOut";

const PlantListPage = () => {
    return (
        <RedirectToSigninIfSignedOut>
            <div className="flex flex-col items-center min-h-screen bg-green-50">
                <NavBar />
            </div>
        </RedirectToSigninIfSignedOut>
    );
};

export default PlantListPage;
