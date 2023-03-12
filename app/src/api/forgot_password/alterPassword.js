import { instance } from "../../configs/httpClient";

export async function alterPassword(body) {
    const response = await instance.post('/senha/redefinir', body)

    return response.data;
}