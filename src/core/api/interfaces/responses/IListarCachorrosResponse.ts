export interface IListarCachorrosResponse {
    _id: string;
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