import Joi from 'joi';
import { validateSchemaForApp } from '@tresdoce-nestjs-toolkit/core';

export const validationSchema = validateSchemaForApp({
  TEST_KEY: Joi.string().required(),
  STAR_WARS_API_URL: Joi.string().required(),
  STAR_WARS_API_URL_LIVENNESS: Joi.string().required(),
});
