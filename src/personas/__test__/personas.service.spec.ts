import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { PersonasService } from '../services/personas.service';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';
import { getEnvFilePath } from '../../config';
import { personaDto } from './mock';

describe('PersonasService', () => {
  let service: PersonasService;
  let idSearch: string;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: getEnvFilePath(),
          load: [config],
          isGlobal: true,
        }),
        AppModule,
      ],
    }).compile();

    service = module.get<PersonasService>(PersonasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new person', async () => {
    const result = await service.create(personaDto);
    idSearch = result.id;
    expect(result.nombres).toEqual(personaDto.nombres);
  });

  it('should get an array of people', async () => {
    const result = await service.findAll();
    const searchedPerson = result.find((row) => row.id === idSearch);
    expect(searchedPerson.nombres).toEqual(personaDto.nombres);
  });

  it('should get a searched person', async () => {
    const result = await service.findOne({
      id: idSearch,
    });
    expect(result.nombres).toEqual(personaDto.nombres);
  });
});
