import FilterForm from "./components/main/FilterForm/FilterForm";
import CardPet from "./components/main/Card/CardPet";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <h3 className="text-2xl text-secondary">Busque seu ou sua Melhor Amigo(a)!</h3>

      <FilterForm />

      <section className="flex flex-wrap gap-8 justify-between">
        <CardPet
          name="Moacir"
          description="Cachorro muito brincalhão e carinhoso, adora crianças e outros
      animais. Está castrado e vacinado."
          tags={["Cachorro", "Grande", "Macho"]}
          imgSrc="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </section>
    </div>
  );
}
