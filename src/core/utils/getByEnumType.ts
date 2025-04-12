export function getByEnum<Type>(value: string, enumType: Type): number {
    return enumType[value as keyof typeof enumType] as unknown as number;
}