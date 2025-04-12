import mongoose from "mongoose";

export const PetMongoSchema = new mongoose.Schema({
    id: String,
    name: String,
    color: String,
    race: String,
    photo: String,
    gender: String,
    size: String,
    isAdopted: Boolean,
    tags: [String],
    description: String
})