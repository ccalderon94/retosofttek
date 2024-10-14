import { AuditFieldsDto, TranslateAuditFieldsDto } from './audit.dto';

/* istanbul ignore next */
export class SpeciesResponseDto extends AuditFieldsDto {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: string[];
  films: string[];
  url: string;
}
/* istanbul ignore next */
export class TranslateSpeciesResponseDto extends TranslateAuditFieldsDto {
  nombre: string;
  clasificacion: string;
  designacion: string;
  altura_promedio: string;
  esperanza_vida_promedio: string;
  colores_ojos: string;
  colores_cabello: string;
  colores_piel: string;
  idioma: string;
  planeta_origen: string;
  personas: string[];
  peliculas: string[];
  url: string;
}
