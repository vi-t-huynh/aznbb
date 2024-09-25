import apiFetch from "./apiFetch";

export const addPlantToCart = ({ quantity, pot_color, id }) => {
    return apiFetch("POST", `/cart/plants/${id}`, { quantity, pot_color });
};
