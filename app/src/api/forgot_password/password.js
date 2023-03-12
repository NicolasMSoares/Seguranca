import { instance } from "../../configs/httpClient";

export async function password(email) {
    const response = await instance.post('/senha/recuperar', email)

    return response.data;
}