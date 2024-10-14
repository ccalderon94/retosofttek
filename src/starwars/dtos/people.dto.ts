import { AuditFieldsDto, TranslateAuditFieldsDto } from './audit.dto';

/* istanbul ignore next */
export class PeopleResponseDto extends AuditFieldsDto {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
}

/* istanbul ignore next */
export class TranslatePeopleResponseDto extends TranslateAuditFieldsDto {
  nombre: string;
  anio_nacimiento: string;
  color_ojos: string;
  genero: string;
  color_cabello: string;
  estatura: string;
  peso: string;
  color_piel: string;
  planeta_origen: string;
  peliculas: string[];
  especies: string[];
  naves_estelares: string[];
  vehiculos: string[];
  url: string;
}
