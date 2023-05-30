import { IsOptional, IsString, IsNumber } from 'class-validator';

export class QueryCountryDto {
  @IsString()
  @IsOptional()
  order: string;

  @IsString()
  @IsOptional()
  name: string;
  @IsString()
  @IsOptional()
  limit: string;

  @IsString()
  @IsOptional()
  offset: string;
}
