import { instance } from "../../configs/httpClient";

export async function alter(body) {
    const response = await instance.put('/usuarios', body)

    return response.data;
}