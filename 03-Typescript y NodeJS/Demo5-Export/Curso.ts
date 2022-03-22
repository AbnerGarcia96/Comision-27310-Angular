export interface Curso {
    nombre: string;
    profesor: string;
    tutores?: Array<string>;

    saludar(): string
}