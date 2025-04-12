'use server'

import { EGender } from "@/core/api/enums/EGender";
import { ESize } from "@/core/api/enums/ESize";
import { PetSchema } from "@/core/types/TPet";
import { PetMongoSchema } from "@/app/api/_mongo/models/Pet";
import mongoose from "mongoose";
import { z } from "zod";

const mongoURI = 'mongodb://admin:admin123@localhost:27017/adotaai?authSource=admin';

// Initialize Pet model if it doesn't exist
const Pet = mongoose.models.Pet || mongoose.model('Pet', PetMongoSchema);

const formSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    color: z.string().min(1, "Cor é obrigatória"),
    description: z.string().min(1, "Descrição é obrigatória"),
    race: z.string().min(1, "Raça é obrigatória"),
    size: z.enum([ESize.P.toString(), ESize.M.toString(), ESize.G.toString(), ESize.GG.toString()]),
    gender: z.enum([EGender.Feminino.toString(), EGender.Masculino.toString()]),
    photo: z.instanceof(File)
});

export async function adicionarPetAction(data: FormData) {
    // Validate the form data
    const validatedFields = formSchema.safeParse({
        name: data.get('name'),
        color: data.get('color'),
        description: data.get('description'),
        race: data.get('race'),
        size: data.get('size'),
        gender: data.get('gender'),
        photo: data.get('photo')
    });

    if (!validatedFields.success) {
        const errorMessages = validatedFields.error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join(', ');
        return { error: errorMessages };
    }

    const formData = validatedFields.data;
    const file = formData.photo;
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = buffer.toString("base64");

    // Connect to MongoDB
    try {
        await mongoose.connect(mongoURI);
    } catch {
        return { error: 'Erro ao conectar ao banco de dados' };
    }

    // Create the pet object
    const petData = {
        name: formData.name,
        color: formData.color,
        description: formData.description,
        race: formData.race,
        gender: Number(formData.gender),
        size: Number(formData.size),
        photo: base64,
        isAdopted: false,
        tags: []
    };

    // Validate with PetSchema
    const petValidation = PetSchema.safeParse(petData);
    if (!petValidation.success) {
        const errorMessages = petValidation.error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join(', ');
        return { error: `Dados inválidos do pet: ${errorMessages}` };
    }

    try {
        const newPet = new Pet({
            ...petValidation.data
        });
        await newPet.save();
    } catch (e: unknown) {
        if (e instanceof Error && e.message !== 'NEXT_REDIRECT') {
            return { error: 'Erro ao salvar o pet: ' + e.message };
        }
        if (e instanceof Error && e.message === 'NEXT_REDIRECT') {
            throw e; // Let Next.js handle the redirect
        }
        return { error: 'Erro ao salvar o pet' };
    }
}