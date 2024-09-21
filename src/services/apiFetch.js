const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

/**
 * Fetches data from the API using the specified HTTP method and path.
 *
 * This function constructs a fetch request with the appropriate options,
 * including authorization using a bearer token stored in the environment
 * variable. It can also send a request body if provided.
 *
 * @param {string} method - The HTTP method to use (e.g., 'GET', 'POST').
 * @param {string} path - The endpoint path to which the request will be made.
 * @param {Object|null} [body=null] - The request body to be sent with the request.
 *                                    Defaults to null if not provided.
 *
 * @returns {Promise<Response>} - A promise that resolves to the response of the fetch request.
 *
 * @throws {Error} - Throws an error if the fetch request fails.
 *
 * @example
 * // Example of a GET request
 * apiFetch('GET', '/endpoint')
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(error => console.error('Error:', error));
 *
 * @example
 * // Example of a POST request
 * apiFetch('POST', '/endpoint', { key: 'value' })
 *   .then(response => response.json())
 *   .then(data => console.log('Success:', data))
 *   .catch(error => console.error('Error:', error));
 */

const apiFetch = (method, path, body = null) => {
    const options = {
        method,
        credentials: "include",
        headers: {
            Authorization: "Bearer " + VITE_API_KEY,
            "Content-Type": "application/json",
        },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    return fetch(VITE_API_BASE_URL + path, options);
};

export default apiFetch;
