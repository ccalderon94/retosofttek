import { AuditFieldsDto, TranslateAuditFieldsDto } from './audit.dto';

/* istanbul ignore next */
export class StartshipsResponseDto extends AuditFieldsDto {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
}
/* istanbul ignore next */
export class TranslateStartshipsResponseDto extends TranslateAuditFieldsDto {
  nombre: string;
  modelo: string;
  tipo_nave: string;
  fabricante: string;
  costo_en_creditos: string;
  longitud: string;
  tripulacion: string;
  pasajeros: string;
  velocidad_atmosferica_maxima: string;
  clasificacion_hiperimpulsor: string;
  MGLT: string;
  capacidad_carga: string;
  duracion_suministros: string;
  peliculas: string[];
  pilotos: string[];
  url: string;
}
