interface MenuItem {
    label: string;
    href: string;

}
export const MENU: MenuItem[] = [
    {
        label: "PETs",
        href: "/"
    },
    {
        label: "Cadastro PET",
        href: "/cadastro-pet"
    },
    {
        label: "Quem Somos",
        href: "/quem-somos"
    }
]
