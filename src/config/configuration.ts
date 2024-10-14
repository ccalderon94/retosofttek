import { getSkipHealthChecks, Typings } from '@tresdoce-nestjs-toolkit/core';
import { registerAs } from '@nestjs/config';

import * as PACKAGE_JSON from '../../package.json';

export default registerAs(
  'config',
  (): Typings.AppConfig => ({
    project: {
      apiPrefix: process.env.API_PREFIX || 'API-PREFIX',
      name: PACKAGE_JSON.name,
      version: PACKAGE_JSON.version,
      description: PACKAGE_JSON.description,
      author: PACKAGE_JSON.author,
      repository: PACKAGE_JSON.repository,
      bugs: PACKAGE_JSON.bugs,
      homepage: PACKAGE_JSON.homepage,
    },
    server: {
      isProd: process.env.NODE_ENV === 'production',
      appStage: process.env.APP_STAGE,
      port: parseInt(process.env.PORT, 10) || 8080,
      context: process.env.CONTEXT || 'v1',
      origins: process.env.ORIGINS ? process.env.ORIGINS.split(',') : '*',
      allowedHeaders: process.env.ALLOWED_HEADERS,
      allowedMethods: process.env.ALLOWED_METHODS,
      propagateHeaders: process.env.PROPAGATE_HEADERS
        ? process.env.PROPAGATE_HEADERS.split(',')
        : [],
      corsEnabled: process.env.CORS_ENABLED.toLowerCase() === 'true',
      corsCredentials: process.env.CORS_CREDENTIALS.toLowerCase() === 'true',
    },
    health: {
      skipChecks: getSkipHealthChecks(process.env.SKIP_HEALTH_CHECKS),
    },
    swagger: {
      path: process.env.SWAGGER_PATH || 'docs',
      enabled: process.env.SWAGGER_ENABLED.toLowerCase() === 'true',
    },
    params: {
      testEnv: process.env.TEST_KEY,
    },
    services: {
      starWarsAPI: {
        url: process.env.STAR_WARS_API_URL,
        timeout: 3000,
        healthPath: process.env.STAR_WARS_API_URL_LIVENNESS,
      },
    },
    dynamodb: {
      local: process.env.NODE_ENV !== 'production' || false,
      logger: process.env.NODE_ENV !== 'production' || false,
      aws: {
        accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
        secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY}`,
        region: `${process.env.AWS_REGION}`,
      },
      table: {
        create: process.env.NODE_ENV !== 'production' || false,
        prefix: `${PACKAGE_JSON.name}-`,
        suffix: '-table',
      },
    },
  }),
);
