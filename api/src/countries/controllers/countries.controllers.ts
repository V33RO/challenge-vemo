import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { CountriesService } from '../services/countries.service';
import { QueryCountryDto } from '../dtos/validate-query.dto';

@Controller('countries')
export class CountriesController {
  constructor(private countriesService: CountriesService) {}

  @Get('/load-data')
  @ApiResponse({ status: 200, description: 'Load db with api' })
  async loadData() {
    await this.countriesService.loadDataFromAPI();
    return 'Datos cargados exitosamente.';
  }
  @Get('/populate')
  async findAllOrderPopulate() {
    return this.countriesService.findAllOrderPopulate();
  }
  // @Get()
  // async findAllFree() {
  //   return this.countriesService.findAllFree();
  // }
  @Get()
  async searchByName(@Query(new ValidationPipe()) query: QueryCountryDto) {
    const { name, order } = query;
    const limit = Number(query.limit) ?? 10;
    const offset = Number(query.offset) ?? 10;
    if (!name && !order && limit > 0 && offset > -1) {
      return this.countriesService.findAll(limit, offset);
    }
    if (name) {
      return await this.countriesService.searchByName(name);
    }

    if (order) {
      return await this.countriesService.findAllOrder(order);
    }
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.countriesService.findOne(id);
  }
}
