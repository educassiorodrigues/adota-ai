export interface IListarCachorrosResponse {
    id: number;
    name: string;
    color: string;
    race: string;
    photo: string;
    gender: number;
    size: number;
    tags: string[];
    description: string;
    isadopted: boolean;
}