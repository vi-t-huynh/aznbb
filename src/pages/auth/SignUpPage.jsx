import AuthForm from "./AuthForm/authIndex";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
import { createUser } from "../../services/user";
import { useState } from "react";

const SIGN_UP_FIELDS = [
    { label: "username", type: "text" },
    { label: "password", type: "password" },
    { label: "confirm password", type: "password" },
];
const SignUpPage = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    return (
        <FormContainer>
            <p className="text-red-400">{error}</p>
            <p className="text-green-400">{success}</p>
            <AuthForm
                fields={SIGN_UP_FIELDS}
                submitButtonText="create an account"
                onSubmit={async (values) => {
                    setSuccess("");
                    setError("");
                    if (values.username.length < 4) {
                        setError("username must be greater than 4 letters");
                        return;
                    }

                    if (values.password.length < 4) {
                        setError("password must be greater than 8 letters");
                        return;
                    }

                    if (values.password != values["confirm password"]) {
                        setError("password does not match");
                        return;
                    }

                    const response = await createUser({
                        username: values.username,
                        password: values.password,
                    });

                    if (response.status == 201) {
                        setSuccess("account has been created successfully");
                        return;
                    } else {
                        setError("account has already been created");
                        return;
                    }
                }}
            />
            <Link to="/" className="text-green-800 hover:underline">
                sign in
            </Link>
        </FormContainer>
    );
};

export default SignUpPage;
