import { connectMongo } from "./api/_mongo/mongodb";
import mongoose from "mongoose";
import { PetMongoSchema } from "./api/_mongo/models/Pet";
import FilterForm from "./components/Home/FilterForm/FilterForm";
import CardList from "./components/Home/CardList/CardList";
import { Suspense } from "react";

export default async function Home() {
  await connectMongo();
  const Pet = mongoose.models.Pets || mongoose.model("Pets", PetMongoSchema);
  const pets = await Pet.find();

  return (
    <div className="flex flex-col gap-2 mt-4">
      <h3 className="text-2xl text-secondary">Busque seu ou sua Melhor Amigo(a)!</h3>
      <FilterForm />
      
      <Suspense fallback={<div>Carregando...</div>}>
        <CardList pets={pets} />
      </Suspense>

    </div>
  );
}
