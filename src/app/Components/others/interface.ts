export interface Usuario {
    Id: number;
    Nombre: string;
    Apellido: string;
    Correo: String;
    Nick: string;
    Contraseña: string;
    Tipo: UserType;
}

export enum UserType {
    Administrador,
    Cliente,
    Tecnico
}
