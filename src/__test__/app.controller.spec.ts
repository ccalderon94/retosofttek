import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { HttpClientModule } from '@tresdoce-nestjs-toolkit/http-client';

import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { UtilsModule } from '../utils/utils.module';

import { config, validationSchema } from '../config';

jest.setTimeout(80000);
describe('AppController', () => {
  let app: INestApplication;
  let controller: AppController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env.test',
          ignoreEnvFile: false,
          load: [config],
          isGlobal: true,
          validationSchema,
        }),
        UtilsModule,
        HttpClientModule,
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    app = moduleRef.createNestApplication();
    controller = moduleRef.get<AppController>(AppController);

    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should be defined', async () => {
    expect(controller).toBeDefined();
  });

  it('should return "Hello World!"', async () => {
    expect(controller.getHello()).toBe('Hello World!');
  });
});
