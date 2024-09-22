import { createSession } from "services/user";
import AuthForm from "./AuthForm/authIndex";
import FormContainer from "./FormContainer";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const SIGN_IN_FIELDS = [
    { label: "username", type: "text" },
    { label: "password", type: "password" },
];

const SignInPage = () => {
    const [error, setError] = useState("");
    const location = useLocation();
    return (
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
                    const response = await createSession({
                        username: values.username,
                        password: values.password,
                    });
                    if (response.status == 201) {
                        console.log("log in success!");
                        setError("");
                    } else {
                        setError((await response.json()).error);
                    }
                }}
            />
            <Link to="/sign-up" className="text-green-800 hover:underline">
                Create an Account
            </Link>
        </FormContainer>
    );
};

export default SignInPage;
