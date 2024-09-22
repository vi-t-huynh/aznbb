import apiFetch from "./apiFetch";

export const createUser = ({ username, password }) => {
    return apiFetch("POST", "/users", { username, password });
};
