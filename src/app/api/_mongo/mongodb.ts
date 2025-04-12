

import mongoose from "mongoose";
import { PetMongoSchema } from "./models/Pet";

export async function connectMongo() {
    const mongoURI = 'mongodb://admin:admin123@localhost:27017/adotaai?authSource=admin'; // Substitua se necessário
    try {
        await mongoose.connect(mongoURI);
        
        // models register
        mongoose.model("Pets", PetMongoSchema);
    } catch {
        return new Response('Erro ao conectar no mongo', { status: 500 });
    }
}
