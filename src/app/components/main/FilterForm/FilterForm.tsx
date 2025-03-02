import Button from "../../shared/Button/Button";
import Select from "../../shared/Select/Select";

export default function FilterForm() {
    return (
        <form className="flex flex-col gap-2">
            <div className="flex gap-4">
                <Select
                    label="Tipo"
                    options={[
                        { value: "Cachorro", label: "Cachorro" },
                        { value: "Gato", label: "Gato" },
                    ]}
                />

                <Select
                    label="Sexo"
                    options={[
                        { label: "1", value: "Masculino" },
                        { label: "2", value: "Feminino" },
                    ]}
                />

                <Select
                    label="Tamanho"
                    options={[
                        { label: "1", value: "Grande" },
                        { label: "2", value: "Médio" },
                        { label: "3", value: "Pequeno" },
                    ]}
                />

                <Select
                    label="Raça"
                    options={[
                        { label: "Dachshund", value: "Dachshund" },
                        { label: "Hotweiller", value: "Hotweiller" },
                        { label: "Pitbull", value: "Pitbull" },
                    ]}
                />
            </div>

            <div className="flex align-center justify-end">
                <Button
                    label="Buscar"
                    variant="primary"
                />

            </div>
        </form>
    )
}