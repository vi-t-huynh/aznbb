import AuthForm from "./AuthForm/authIndex";
import FormContainer from "./FormContainer";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "services/user";
import { useState } from "react";

const SIGN_UP_FIELDS = [
    { label: "username", type: "text" },
    { label: "password", type: "password" },
    { label: "confirm password", type: "password" },
];
const SignUpPage = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    return (
        <FormContainer>
            {error && (
                <p className="text-red-500 bg-red-200 px-3 py-2 rounded">
                    {error}
                </p>
            )}{" "}
            <AuthForm
                fields={SIGN_UP_FIELDS}
                submitButtonText="Create an Account"
                onSubmit={async (values) => {
                    if (values.username.length < 4) {
                        setError("Username must be greater than 4 letters.");
                        return;
                    }

                    if (values.password.length < 4) {
                        setError("Password must be greater than 8 letters.");
                        return;
                    }

                    if (values.password != values["confirm password"]) {
                        setError("Password does not match.");
                        return;
                    }

                    const response = await createUser({
                        username: values.username,
                        password: values.password,
                    });

                    if (response.status == 201) {
                        setError("");
                        navigate("/", {
                            state: {
                                accountCreated: true,
                            },
                        });
                    } else {
                        setError("Account has already been created.");
                    }
                }}
            />
            <Link to="/" className="text-green-800 hover:underline">
                Sign In
            </Link>
        </FormContainer>
    );
};

export default SignUpPage;
