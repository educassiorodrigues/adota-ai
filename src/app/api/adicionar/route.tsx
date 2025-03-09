import { PetMongoSchema, PetSchema } from "@/core/types/TPet";
import mongoose from "mongoose";
const mongoURI = 'mongodb://admin:admin123@localhost:27017/adotaai?authSource=admin'; // Substitua se necessário

export async function POST(request: Request) {
    const body = await request.json();
    
    const requestParser = PetSchema.safeParse(body);

    if (!requestParser.success) {
        return new Response(JSON.stringify(requestParser.error.issues), { status: 400 });
    }

    try {
        await mongoose.connect(mongoURI);
    } catch {
        return new Response('Erro ao conectar no mongo', { status: 500 });
    }

    const Pet = mongoose.models.Pet || mongoose.model('Pet', PetMongoSchema, 'pets');

    const newPet = new Pet({
        id: new mongoose.Types.ObjectId(),
        ...requestParser.data
    });

    try {
        await newPet.save();
    } catch {
        return new Response('Erro ao adicionar objeto no banco', { status: 403 });
    }

    return new Response(newPet.id, { status: 201 });
}