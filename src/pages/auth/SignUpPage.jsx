import AuthForm from "./AuthForm/authIndex";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SIGN_UP_FIELDS = [
    { label: "username", type: "text" },
    { label: "password", type: "password" },
    { label: "confirm password", type: "password" },
];
const SignOutPage = () => {
    return (
        <FormContainer>
            <AuthForm
                fields={SIGN_UP_FIELDS}
                submitButtonText="create an account"
            />
            <Link to="/" className="text-green-800 hover:underline">
                sign in
            </Link>
        </FormContainer>
    );
};

export default SignOutPage;
