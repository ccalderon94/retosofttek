import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PersonasService } from '../services/personas.service';
import { CreatePersonaDto, FindOnePersonaParams, ResponsePersonaDto } from '../dto';

@ApiTags('Personas')
@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @ApiOperation({
    summary: 'Obtiene el listado de personas registradas',
    description: 'Devuelve un arreglo de todas las personas registradas en la Base de Datos',
  })
  @ApiResponse({
    status: 201,
    description: 'Devuelve un arreglo de todas las personas',
    type: ResponsePersonaDto,
    isArray: true,
  })
  @Get()
  /* istanbul ignore next */
  findAll() {
    return this.personasService.findAll();
  }

  @ApiOperation({
    summary: 'Obtiene una persona específica',
    description: 'Devuelve el registro de la persona según el identificador enviado',
  })
  @ApiResponse({
    status: 201,
    description: 'Devuelve el registro de la persona buscada',
    type: ResponsePersonaDto,
    isArray: false,
  })
  @ApiResponse({
    status: 404,
    description: 'Persona no encontrada',
    type: Object,
    isArray: false,
  })
  @ApiParam({ name: 'id', type: 'string', description: 'Identificador único de la persona' })
  @Get(':id')
  /* istanbul ignore next */
  findOne(@Param() params: FindOnePersonaParams) {
    return this.personasService.findOne({
      id: params.id,
    });
  }

  @ApiOperation({
    summary: 'Crear nueva persona',
    description: 'Genera un nuevo registro de una persona en Dynamoo',
  })
  @ApiBody({
    type: CreatePersonaDto,
    required: true,
  })
  @ApiResponse({
    status: 201,
    description: 'Retorna la entidad creada',
    type: ResponsePersonaDto,
    isArray: false,
  })
  @Post()
  /* istanbul ignore next */
  create(@Body() persona: CreatePersonaDto) {
    return this.personasService.create(persona);
  }
}
