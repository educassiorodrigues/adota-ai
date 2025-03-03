'use server'

import { listarCachorros } from "@/core/api/dogs/apiService";
import FilterForm from "./components/Home/FilterForm/FilterForm";
import CardList from "./components/Home/CardList/CardList";
import { Suspense } from "react";

export default async function Home() {
  const pets = await listarCachorros(false);

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
