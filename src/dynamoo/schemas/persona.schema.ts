import { Schema } from 'dynamoose';

export const PersonaSchema = new Schema(
  {
    id: {
      type: String,
      hashKey: true,
    },
    nombres: {
      type: String,
      required: true,
    },
    apellidoPaterno: {
      type: String,
      required: true,
    },
    apellidoMaterno: {
      type: String,
      required: true,
    },
    correoElectronico: {
      type: String,
      required: true,
    },
    celular: {
      type: String,
      required: true,
    },
    fechaNacimiento: {
      type: Date,
      default: Date.now,
    },
    direccion: {
      type: String,
      required: true,
    },
    esActivo: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);
