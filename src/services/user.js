import apiFetch from "./apiFetch";

export const createUser = ({ username, password }) => {
    return apiFetch("POST", "/users", { username, password });
};

export const createSession = ({ username, password }) => {
    return apiFetch("POST", "/users/session", { username, password });
};

// Session Management
const SESSION_TOKEN = "session_token";

export const setSessionToken = (sessionToken) =>
    localStorage.setItem(SESSION_TOKEN, sessionToken);

export const getSessionToken = () => localStorage.getItem(SESSION_TOKEN);

export const removeSessionToken = () => localStorage.removeItem(SESSION_TOKEN);
