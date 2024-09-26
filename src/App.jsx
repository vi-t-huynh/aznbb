import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "pages/auth/SignInPage";
import SignUpPage from "pages/auth/SignUpPage";
import PlantListPage from "pages/PlantListPage/index";
import { useState } from "react";
import * as UserService from "services/user";
import { SessionContext } from "context/SessionContext";
import { jwtDecode } from "jwt-decode";
import PlantShowPage from "pages/PlantShowPage";
import ScrollToTop from "shared-components/ScrollToTop";

function App() {
    const [sessionToken, setSessionToken] = useState(() =>
        UserService.getSessionToken()
    );

    return (
        <SessionContext.Provider
            value={{
                signIn: (sessionToken) => {
                    setSessionToken(sessionToken);
                    UserService.setSessionToken(sessionToken);
                },
                signOut: () => {
                    setSessionToken(null);
                    UserService.removeSessionToken();
                },
                username: sessionToken
                    ? jwtDecode(sessionToken).username
                    : null,
            }}
        >
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/plants" element={<PlantListPage />} />
                    <Route
                        path="/plants/:plantId"
                        element={<PlantShowPage />}
                    />
                </Routes>
            </BrowserRouter>
        </SessionContext.Provider>
    );
}

export default App;
