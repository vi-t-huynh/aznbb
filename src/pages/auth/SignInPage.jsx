import * as UserService from "services/user";
import AuthForm from "./AuthForm/authIndex";
import FormContainer from "./FormContainer";
import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { SessionContext } from "context/SessionContext";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";

const SIGN_IN_FIELDS = [
    { label: "username", type: "text" },
    { label: "password", type: "password" },
];

const SignInPage = () => {
    const [error, setError] = useState("");
    const location = useLocation();
    const { signIn } = useContext(SessionContext);

    return (
        <RedirectToPlantsIfSignedIn>
            <FormContainer>
                {error && (
                    <p className="text-red-500 bg-red-200 px-3 py-2 rounded">
                        {error}
                    </p>
                )}
                {location.state && location.state.accountCreated && (
                    <p className="text-green-500 bg-green-200 px-3 py-2 m-2 rounded">
                        Account has been created successfully. Please sign in.
                    </p>
                )}
                <AuthForm
                    fields={SIGN_IN_FIELDS}
                    submitButtonText="sign in"
                    onSubmit={async (values) => {
                        const response = await UserService.createSession({
                            username: values.username,
                            password: values.password,
                        });
                        const data = await response.json();
                        if (response.status == 201) {
                            signIn(data.capstone_session_token);
                            setError("");
                        } else {
                            setError(data.error);
                        }
                    }}
                />
                <Link to="/sign-up" className="text-green-800 hover:underline">
                    Create an Account
                </Link>
            </FormContainer>
        </RedirectToPlantsIfSignedIn>
    );
};

export default SignInPage;
