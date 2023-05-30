import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';
import axios from 'axios';

import { Country } from '../entities/countries.entity';

@Injectable()
export class CountriesService {
  constructor(
    private configService: ConfigService,
    @Inject('PG') private clientPg: Client,
    @InjectRepository(Country) private countryRepo: Repository<Country>,
  ) {}

  findAll(limit: number, offset: number) {
    try {
      return this.countryRepo.find({
        skip: offset,
        take: limit,
      });
    } catch (error) {
      throw new Error('Ocurrió un error en la operación obtener todos paises.');
    }
  }

  findAllFree() {
    try {
      return this.countryRepo.find();
    } catch (error) {
      throw new Error('Ocurrió un error en la operación obtener todos paises.');
    }
  }

  findOne(id: number) {
    try {
      const country = this.countryRepo.findOne(id);
      if (!country) {
        throw new NotFoundException(`Country #${id} not found`);
      }
      return country;
    } catch (error) {
      throw new Error('Ocurrió un error en la operación busqueda por id.');
    }
  }
  findAllOrder(order) {
    try {
      return this.countryRepo.find({
        order: {
          name: order, // Orden ascendente (A-Z)
          // name: 'DESC', // Orden descendente (Z-A)
        },
      });
    } catch (error) {
      throw new Error('Ocurrió un error en la operación ordenar segun query.');
    }
  }
  findAllOrderPopulate() {
    try {
      return this.countryRepo.find({
        order: {
          population: 'DESC',
        },
      });
    } catch (error) {
      throw new Error('Ocurrió un error en la operación ordenar segun query.');
    }
  }
  async loadDataFromAPI() {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const data = response.data;

      const entities = data.map((item: any) => {
        const entity = new Country();

        entity.name = item.name.common;
        entity.capital = item.capital;
        entity.currencies = item.currencies;
        entity.region = item.region;
        entity.languages = item.languages;
        entity.population = item.population;
        entity.flags = item.flags.png;
        return entity;
      });

      await this.countryRepo.save(entities);
      console.log('Datos cargados exitosamente.');
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }
  searchByName(name: string) {
    try {
      const country = this.countryRepo.find({ name: name });
      if (!country) {
        throw new NotFoundException(`Country #${name} not found`);
      }
      return country;
    } catch (error) {
      throw new Error('Ocurrió un error en la operación buscqueda por nombre.');
    }
  }
}
