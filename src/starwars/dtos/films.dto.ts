import { AuditFieldsDto, TranslateAuditFieldsDto } from './audit.dto';

/* istanbul ignore next */
export class FilmsResponseDto extends AuditFieldsDto {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
}

/* istanbul ignore next */
export class TranslateFilmsResponseDto extends TranslateAuditFieldsDto {
  titulo: string;
  id_episodio: number;
  texto_apertura: string;
  director: string;
  productor: string;
  fecha_lanzamiento: string;
  especies: string[];
  naves_estelares: string[];
  vehiculos: string[];
  personajes: string[];
  planetas: string[];
  url: string;
}
