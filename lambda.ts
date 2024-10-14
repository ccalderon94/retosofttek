import { Handler, Context, Callback } from 'aws-lambda';
import { createServer, proxy } from 'aws-serverless-express';
import { AppModule } from './src/app.module';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const expressApp = express();

const createNestServer = async (expressInstance: express.Express) => {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance));
  await app.init();
};

createNestServer(expressApp);

const server = createServer(expressApp);

export const handler: Handler = (event: any, context: Context, callback: Callback) => {
  proxy(server, event, context, 'CALLBACK', (error: Error | null, result: any) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  });
};
