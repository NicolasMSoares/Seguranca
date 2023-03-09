import { instance } from "../../configs/httpClient";

export async function register(body) {
    const response = await instance.post('/usuarios', body)

    return response.data;
}