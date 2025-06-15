import { connectMongo } from "../_mongo/mongodb";
import mongoose from "mongoose";
import { PetMongoSchema } from "../_mongo/models/Pet";

// Register the model if it doesn't already exist
const Pet = mongoose.models.Pet || mongoose.model("Pet", PetMongoSchema);

export async function GET() {
    await connectMongo();

    try {   
        const pets = await Pet.find();
        if(!pets){
            return new Response('Nenhum objeto encontrado', { status: 404 });
        }
        return Response.json(pets, { status: 200 });
    } catch(e){
        console.error(e);
        return new Response('Erro ao buscar objetos no banco', { status: 500 });
    }
}