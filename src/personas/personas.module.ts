import { Module } from '@nestjs/common';
import { DynamooseModule } from '@tresdoce-nestjs-toolkit/dynamoose';
import { PersonaSchema } from '../dynamoo/schemas/persona.schema';
import { PersonasController } from './controllers/personas.controller';
import { PersonasService } from './services/personas.service';
@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'Persona',
        schema: PersonaSchema,
        options: { tableName: 'persona' },
      },
    ]),
  ],
  controllers: [PersonasController],
  providers: [PersonasService],
})
export class PersonasModule {}
