import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ArchetypeModule } from '@tresdoce-nestjs-toolkit/archetype';
import { DynamooseModule } from '@tresdoce-nestjs-toolkit/dynamoose';
import { ResponseInterceptor } from '@tresdoce-nestjs-toolkit/response-parser';
import { HttpClientInterceptor, HttpClientModule } from '@tresdoce-nestjs-toolkit/http-client';

import { UtilsModule } from './utils/utils.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { getEnvFilePath, config, validationSchema } from './config';
import { StarwarsModule } from './starwars/starwars.module';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvFilePath(),
      ignoreEnvFile: process.env.NODE_ENV === 'production' || false,
      load: [config],
      isGlobal: true,
      validationSchema,
    }),
    ArchetypeModule,
    HttpClientModule,
    UtilsModule,
    StarwarsModule,
    PersonasModule,
    DynamooseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpClientInterceptor,
    },
  ],
})
export class AppModule {}
