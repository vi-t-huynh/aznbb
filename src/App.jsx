import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "pages/auth/SignInPage";
import SignUpPage from "pages/auth/SignUpPage";
import { useState } from "react";
import * as UserService from "services/user";
import { SessionContext } from "context/SessionContext";
import { jwtDecode } from "jwt-decode";

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
                username: sessionToken ? jwtDecode(sessionToken) : null,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                </Routes>
            </BrowserRouter>
        </SessionContext.Provider>
    );
}

export default App;
