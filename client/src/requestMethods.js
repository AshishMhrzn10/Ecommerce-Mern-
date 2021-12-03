import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTIwNjA4NTIxN2JjZGEyZmUwNzVmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODUxNzA2OSwiZXhwIjoxNjM4Nzc2MjY5fQ.QGSD82X6UmOERbNXAlZ_BqUR4edfKg7sTgUXq-PNkro";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});