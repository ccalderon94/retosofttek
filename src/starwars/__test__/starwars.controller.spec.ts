import { Test, TestingModule } from '@nestjs/testing';
import { StarwarsPeopleController } from '../controllers/starwars-people.controller';
import { StarwarsPeopleService } from '../services/starwars-people.service';
import { UtilsService } from '../../utils/services/utils.service';
import { HttpClientModule } from '@tresdoce-nestjs-toolkit/http-client';
import { config } from '../../config/';
import { mockResponse } from './mocks';

describe('StarwarsPeopleController', () => {
  let controller: StarwarsPeopleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpClientModule],
      controllers: [StarwarsPeopleController],
      providers: [
        StarwarsPeopleService,
        {
          provide: 'CONFIGURATION(config)',
          useValue: config(),
        },
        UtilsService,
      ],
    }).compile();
    controller = module.get<StarwarsPeopleController>(StarwarsPeopleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of translated people', async () => {
      const result = await controller.findAll();
      expect(result[0]).toEqual(mockResponse);
    });
  });

  describe('findOne', () => {
    it('should return a translated person when API call is successful', async () => {
      const result = await controller.findOne(1);
      expect(result).toEqual(mockResponse);
    });
  });
});
