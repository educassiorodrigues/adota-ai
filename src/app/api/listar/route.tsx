import mongoose, { Schema } from "mongoose";
import { connectMongo } from "../_mongo/mongodb";

// Define the schema for the pets collection
const petSchema = new Schema({
    name: String,
    color: String,
    race: String,
    photo: String,
    gender: Number,
    size: Number,
    isAdopted: Boolean,
    tags: [String],
    description: String,
});

// Register the model if it doesn't already exist
const Pet = mongoose.models.pets || mongoose.model("pets", petSchema);

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
        return new Response('Erro ao buscar objetos no banco', { status: 403 });
    }
}