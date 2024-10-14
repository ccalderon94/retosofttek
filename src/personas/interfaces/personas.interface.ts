export interface IPersonaKey {
  id: string;
}

export interface IPersona extends IPersonaKey {
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correoElectronico: string;
  celular: string;
  fechaNacimiento?: Date;
  direccion: string;
  esActivo?: boolean;
}
