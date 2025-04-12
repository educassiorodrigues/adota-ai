import {  z } from "zod";
import { EGender } from "../api/enums/EGender";
import { ESize } from "../api/enums/ESize";

export const PetSchema = z.object({
    name: z.string(),
    color: z.string(),
    race: z.string(),
    photo: z.string(), // BASE 64 da imagem
    gender: z.nativeEnum(EGender), // ENUM Masculino = 1, Feminino  = 2
    size: z.nativeEnum(ESize), // ENUM P = 1, M = 2, G = 3, GG = 4
    isAdopted: z.boolean(),
    tags: z.array(z.string()),
    description: z.string()
});

export type Pet = z.infer<typeof PetSchema>;

