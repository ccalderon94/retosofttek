import { AuditFieldsDto, TranslateAuditFieldsDto } from './audit.dto';

/* istanbul ignore next */
export class VehiclesResponseDto extends AuditFieldsDto {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
}

/* istanbul ignore next */
export class TranslateVehiclesResponseDto extends TranslateAuditFieldsDto {
  nombre: string;
  modelo: string;
  tipo_vehiculo: string;
  fabricante: string;
  longitud: string;
  costo_en_creditos: string;
  tripulacion: string;
  pasajeros: string;
  velocidad_atmosferica_maxima: string;
  capacidad_carga: string;
  duracion_suministros: string;
  peliculas: string[];
  pilotos: string[];
  url: string;
}
