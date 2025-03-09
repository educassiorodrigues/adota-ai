import axios from "axios";
import { httpInstance } from "../httpInstance/httpInstance";
import { IAdicionarCachorroRequest } from "../interfaces/requests/IAdicionarCachorroRequest";
import { IListarCachorrosResponse } from "../interfaces/responses/IListarCachorrosResponse";

const http = httpInstance()

export async function listarCachorros(isAdopted?: boolean) : Promise<IListarCachorrosResponse[]> {
    const response = await http.get("/dogs", {
        params: {
            isAdopted: isAdopted
        }
    });

    return response.data
}

export async function adicionarCachorro(dog: IAdicionarCachorroRequest) : Promise<number> {
    return await axios.post("http://localhost:3000/api/adicionar", dog);
}

export async function buscarCachorro(id: string) {
    return http.get(`/dogs/${id}`);
}

export async function editarCachorro(id: string, dog: any) {
    return http.put(`/dogs/${id}`, dog);
}

export async function deletarCachorro(id: string) {
    return http.delete(`/dogs/${id}`);
}

export async function listarAdocoes() {
    return http.get("/adoptions");
}

export async function buscarAdocao(id: string) {
    return http.get(`/adoptions/${id}`);
}

export async function adicionarAdocao(adoption: any) {
    return http.post("/adoptions", adoption);
}

export async function deletarAdocao(id: string) {
    return http.delete(`/adoptions/${id}`);
}

