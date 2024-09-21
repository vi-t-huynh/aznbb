import AuthForm from "./AuthForm/authIndex";

const SIGN_UP_FIELDS = [
    { label: "username", type: "text" },
    { label: "password", type: "password" },
    { label: "confirm password", type: "password" },
];
const SignOutPage = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <div className="flex justify-center w-full max-w-4xl">
                <AuthForm
                    fields={SIGN_UP_FIELDS}
                    submitButtonText="create an account"
                />
            </div>
        </div>
    );
};

export default SignOutPage;
