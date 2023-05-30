import {
  IsString,
  IsNotEmpty,
  Length,
  IsArray,
  IsNumber,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCountryDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly capital: string;

  @IsString()
  readonly currencies: string;

  @IsString()
  readonly region: string;

  @IsArray()
  readonly languages: [];

  @IsString()
  readonly population: number;

  @IsString()
  readonly flags: string;
}

export class UpdateCountryDto extends PartialType(CreateCountryDto) {}
