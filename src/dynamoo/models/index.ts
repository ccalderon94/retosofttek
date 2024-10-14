import { model } from 'dynamoose';
import { PersonaSchema } from '../schemas/persona.schema';

/* istanbul ignore next */
export const PersonaModel = model('Persona', PersonaSchema);
