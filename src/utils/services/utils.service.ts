import { Injectable } from '@nestjs/common';
import { PeopleResponseDto, TranslatePeopleResponseDto } from '../../starwars/dtos/people.dto';
import { FilmsResponseDto, TranslateFilmsResponseDto } from '../../starwars/dtos/films.dto';
import { PlanetsResponseDto, TranslatePlanetsResponseDto } from 'src/starwars/dtos/planets.dto';
import { SpeciesResponseDto, TranslateSpeciesResponseDto } from 'src/starwars/dtos/species.dto';
import {
  StartshipsResponseDto,
  TranslateStartshipsResponseDto,
} from 'src/starwars/dtos/starships.dto';
import { TranslateVehiclesResponseDto, VehiclesResponseDto } from 'src/starwars/dtos/vehicles.dto';

@Injectable()
export class UtilsService {
  mapAndTranslatePeople(dto: PeopleResponseDto): TranslatePeopleResponseDto {
    return {
      nombre: dto.name,
      anio_nacimiento: dto.birth_year,
      color_ojos: dto.eye_color,
      genero: dto.gender,
      color_cabello: dto.hair_color,
      estatura: dto.height,
      peso: dto.mass,
      color_piel: dto.skin_color,
      planeta_origen: dto.homeworld,
      peliculas: dto.films,
      especies: dto.species,
      naves_estelares: dto.starships,
      vehiculos: dto.vehicles,
      url: dto.url,
      fecha_creacion: dto.created,
      fecha_modificacion: dto.edited,
    };
  }
  /* istanbul ignore next */
  mapAndTranslateFilms(dto: FilmsResponseDto): TranslateFilmsResponseDto {
    return {
      titulo: dto.title,
      id_episodio: dto.episode_id,
      texto_apertura: dto.opening_crawl,
      director: dto.director,
      productor: dto.producer,
      fecha_lanzamiento: dto.release_date,
      especies: dto.species,
      naves_estelares: dto.starships,
      vehiculos: dto.vehicles,
      personajes: dto.characters,
      planetas: dto.planets,
      url: dto.url,
      fecha_creacion: dto.created,
      fecha_modificacion: dto.edited,
    };
  }
  /* istanbul ignore next */
  mapAndTranslatePlanets(dto: PlanetsResponseDto): TranslatePlanetsResponseDto {
    return {
      nombre: dto.name,
      diametro: dto.diameter,
      periodo_rotacion: dto.rotation_period,
      periodo_orbital: dto.orbital_period,
      gravedad: dto.gravity,
      poblacion: dto.population,
      clima: dto.climate,
      terreno: dto.terrain,
      agua_superficial: dto.surface_water,
      residentes: dto.residents,
      peliculas: dto.films,
      url: dto.url,
      fecha_creacion: dto.created,
      fecha_modificacion: dto.edited,
    };
  }
  /* istanbul ignore next */
  mapAndTranslateSpecies(dto: SpeciesResponseDto): TranslateSpeciesResponseDto {
    return {
      nombre: dto.name,
      clasificacion: dto.classification,
      designacion: dto.designation,
      altura_promedio: dto.average_height,
      esperanza_vida_promedio: dto.average_lifespan,
      colores_ojos: dto.eye_colors,
      colores_cabello: dto.hair_colors,
      colores_piel: dto.skin_colors,
      idioma: dto.language,
      planeta_origen: dto.homeworld,
      personas: dto.people,
      peliculas: dto.films,
      url: dto.url,
      fecha_creacion: dto.created,
      fecha_modificacion: dto.edited,
    };
  }
  /* istanbul ignore next */
  mapAndTranslateStarships(dto: StartshipsResponseDto): TranslateStartshipsResponseDto {
    return {
      nombre: dto.name,
      modelo: dto.model,
      tipo_nave: dto.starship_class,
      fabricante: dto.manufacturer,
      costo_en_creditos: dto.cost_in_credits,
      longitud: dto.length,
      tripulacion: dto.crew,
      pasajeros: dto.passengers,
      velocidad_atmosferica_maxima: dto.max_atmosphering_speed,
      clasificacion_hiperimpulsor: dto.hyperdrive_rating,
      MGLT: dto.MGLT,
      capacidad_carga: dto.cargo_capacity,
      duracion_suministros: dto.consumables,
      peliculas: dto.films,
      pilotos: dto.pilots,
      url: dto.url,
      fecha_creacion: dto.created,
      fecha_modificacion: dto.edited,
    };
  }
  /* istanbul ignore next */
  mapAndTranslateVehicles(dto: VehiclesResponseDto): TranslateVehiclesResponseDto {
    return {
      nombre: dto.name,
      modelo: dto.model,
      tipo_vehiculo: dto.vehicle_class,
      fabricante: dto.manufacturer,
      longitud: dto.length,
      costo_en_creditos: dto.cost_in_credits,
      tripulacion: dto.crew,
      pasajeros: dto.passengers,
      velocidad_atmosferica_maxima: dto.max_atmosphering_speed,
      capacidad_carga: dto.cargo_capacity,
      duracion_suministros: dto.consumables,
      peliculas: dto.films,
      pilotos: dto.pilots,
      url: dto.url,
      fecha_creacion: dto.created,
      fecha_modificacion: dto.edited,
    };
  }
}
