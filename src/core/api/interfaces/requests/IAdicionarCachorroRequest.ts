import { EGender } from '../../enums/EGender';
import { ESize } from '../../enums/ESize';

export interface IAdicionarCachorroRequest {
    name: string;
    color: string;
    race: string;
    gender: EGender; 
    size: ESize;
    isAdopted: boolean;
    tags: string[];
    description: string;
    photo: string;
}
