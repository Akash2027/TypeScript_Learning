export function isValidName(name: string): boolean {
    return name.trim().length > 0;
}

export function isValidId(id: number): boolean {
    return id > 0;
}