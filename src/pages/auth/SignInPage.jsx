import AuthForm from "./AuthForm/authIndex";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SIGN_IN_FIELDS = [
    { label: "username", type: "text" },
    { label: "password", type: "password" },
];

const SignInPage = () => {
    return (
        <FormContainer>
            <AuthForm fields={SIGN_IN_FIELDS} submitButtonText="sign in" />
            <Link to="/sign-up" className="text-green-800 hover:underline">
                create an account
            </Link>
        </FormContainer>
    );
};

export default SignInPage;
