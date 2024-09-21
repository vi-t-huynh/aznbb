import AuthForm from "./AuthForm/authIndex";

const SIGN_IN_FIELDS = [
    { label: "username", type: "text" },
    { label: "password", type: "password" },
];

const SignInPage = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <div className="flex justify-center w-full max-w-4xl">
                <AuthForm fields={SIGN_IN_FIELDS} submitButtonText="sign in" />
            </div>
        </div>
    );
};

export default SignInPage;
