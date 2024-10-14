import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsUUID,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  @ApiProperty({ example: 'Christian Carmelo', description: 'Nombres de la persona' })
  nombres: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  @ApiProperty({ example: 'Calderon', description: 'Apellido paterno de la persona' })
  apellidoPaterno: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  @ApiProperty({ example: 'Castro', description: 'Apellido materno de la persona' })
  apellidoMaterno: string;

  @IsEmail()
  @MinLength(5)
  @MaxLength(250)
  @ApiProperty({
    example: 'ccalderon9411@gmail.com',
    description: 'Correo electrónico de contacto',
  })
  correoElectronico: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ example: '956044447', description: 'Número celular de contacto' })
  celular: string;

  @IsOptional()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Fecha de nacimiento debe estar en formato YYYY-MM-DD',
  })
  @ApiProperty({
    example: '1994-05-28',
    description: 'Fecha de nacimiento en formato YYYY-MM-DD',
    required: false,
  })
  fechaNacimiento?: string;

  @IsString()
  @MinLength(10)
  @ApiProperty({
    example: 'Asoc. Costa Verde Mz 602 Lt 06 - Tacna',
    description: 'Dirección actual de residencia',
  })
  direccion: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    example: 'true',
    description: 'true = registro activo | false = registro inactivo',
    required: false,
  })
  esActivo?: boolean;
}

export class ResponsePersonaDto {
  @ApiProperty({
    example: '4fc87f46-2393-4161-adf1-bcf86ff432a3',
    description: 'Id único de registro de la persona',
  })
  id: string;

  @ApiProperty({ example: 'Christian Carmelo', description: 'Nombres de la persona' })
  nombres: string;

  @ApiProperty({ example: 'Calderon', description: 'Apellido paterno de la persona' })
  apellidoPaterno: string;

  @ApiProperty({ example: 'Castro', description: 'Apellido materno de la persona' })
  apellidoMaterno: string;

  @ApiProperty({
    example: 'ccalderon9411@gmail.com',
    description: 'Correo electrónico de contacto',
  })
  correoElectronico: string;

  @ApiProperty({ example: '956044447', description: 'Número celular de contacto' })
  celular: string;

  @ApiProperty({
    example: '1994-05-28',
    description: 'Fecha de nacimiento en formato YYYY-MM-DD',
    required: false,
  })
  fechaNacimiento?: Date;

  @ApiProperty({
    example: 'Asoc. Costa Verde Mz 602 Lt 06 - Tacna',
    description: 'Dirección actual de residencia',
  })
  direccion: string;

  @ApiProperty({
    example: 'true',
    description: 'true = registro activo | false = registro inactivo',
    required: false,
  })
  esActivo?: boolean;

  @ApiProperty({
    example: '2024-09-13T05:16:50.800Z',
    description: 'Campo de auditoria fecha de creación',
  })
  createdAt?: number;

  @ApiProperty({
    example: '2024-09-13T05:16:50.800Z',
    description: 'Campo de auditoria fecha de modificación',
  })
  updatedAt?: number;
}

export class FindOnePersonaParams {
  @IsUUID('4')
  id: string;
}
