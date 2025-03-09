'use server'

import { adicionarCachorro } from "@/core/api/dogs/apiService";
import { IAdicionarCachorroRequest } from "@/core/api/interfaces/requests/IAdicionarCachorroRequest";

 
export async function adicionarPetAction(cachorro: IAdicionarCachorroRequest) : Promise<number> {
    return await adicionarCachorro(cachorro);
}