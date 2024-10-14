import { AuditFieldsDto, TranslateAuditFieldsDto } from './audit.dto';

/* istanbul ignore next */
export class PlanetsResponseDto extends AuditFieldsDto {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
}
/* istanbul ignore next */
export class TranslatePlanetsResponseDto extends TranslateAuditFieldsDto {
  nombre: string;
  diametro: string;
  periodo_rotacion: string;
  periodo_orbital: string;
  gravedad: string;
  poblacion: string;
  clima: string;
  terreno: string;
  agua_superficial: string;
  residentes: string[];
  peliculas: string[];
  url: string;
}
