export function getByEnum<Type>(value:string, enumType: Type): Type[keyof Type]{
    return enumType[value as keyof typeof enumType];  
}