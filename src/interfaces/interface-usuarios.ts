export interface iUsuario {
  id: string;
  usuario: string;
  nombre: string;
  correo: string;
  idPersonaUnica: string;
  idCobrador?: number
  fechaCreacion?: Date
}