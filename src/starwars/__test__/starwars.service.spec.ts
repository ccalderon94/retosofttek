import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { StarwarsPeopleService } from '../services/starwars-people.service';
import { mockResponse } from './mocks';

describe('StarwarsPeopleService', () => {
  let service: StarwarsPeopleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<StarwarsPeopleService>(StarwarsPeopleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of translated people', async () => {
      const result = await service.findAll();
      expect(result[0]).toEqual(mockResponse);
    });
  });

  describe('findOne', () => {
    it('should return a translated person when API call is successful', async () => {
      const result = await service.findOne(1);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('findOneError', () => {
    it('should return a not found error', async () => {
      try {
        await service.findOne(10000);
      } catch (error) {
        expect(error.status).toEqual(404);
      }
    });
  });
});
