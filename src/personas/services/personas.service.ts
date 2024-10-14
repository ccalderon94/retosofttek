import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel, Model } from '@tresdoce-nestjs-toolkit/dynamoose';
import { IPersona, IPersonaKey } from '../interfaces/personas.interface';
import { CreatePersonaDto, ResponsePersonaDto } from '../dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PersonasService {
  constructor(@InjectModel('Persona') private personaModel: Model<IPersona, IPersonaKey>) {}

  async create(persona: CreatePersonaDto): Promise<ResponsePersonaDto> {
    const fechaNacimiento = new Date(persona?.fechaNacimiento);
    return this.personaModel.create({ id: uuidv4(), ...persona, fechaNacimiento });
  }

  async findAll(): Promise<ResponsePersonaDto[]> {
    return this.personaModel.scan().exec();
  }

  async findOne(key: IPersonaKey): Promise<ResponsePersonaDto> {
    const response = await this.personaModel.get(key);
    if (!response) {
      throw new NotFoundException(`La persona con id: ${key.id} no existe`);
    }
    return response;
  }
}
