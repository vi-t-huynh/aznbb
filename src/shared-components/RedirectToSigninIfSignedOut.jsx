import { SessionContext } from "context/SessionContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToSigninIfSignedOut = (props) => {
    const { username } = useContext(SessionContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (username === null) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username]);

    return props.children;
};

export default RedirectToSigninIfSignedOut;
