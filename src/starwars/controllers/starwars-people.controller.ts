import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StarwarsPeopleService } from '../services/starwars-people.service';
import { TranslatePeopleResponseDto } from '../dtos';

@ApiTags('StarWars')
@Controller('starwars-people')
export class StarwarsPeopleController {
  constructor(private readonly starwarsPeopleService: StarwarsPeopleService) {}

  @Get()
  findAll(): Promise<TranslatePeopleResponseDto[]> {
    return this.starwarsPeopleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TranslatePeopleResponseDto> {
    return this.starwarsPeopleService.findOne(id);
  }
}
