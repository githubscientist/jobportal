import axios from "axios";

const baseURL = "https://677a17b9671ca03068330b72.mockapi.io";

const instance = axios.create({
    baseURL,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;