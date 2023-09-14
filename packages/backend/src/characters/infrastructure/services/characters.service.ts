import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import {
  Character,
  Response,
} from '../../../characters/domain/character.interface';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CharactersService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  public async getAll({ page = '1' }: { page: string }): Promise<Response> {
    try {
      const cacheKey = 'getAll_cache';
      const cachedData = await this.cacheManager.get<Response>(cacheKey);
      if (cachedData) {
        return cachedData;
      }
      const callPeopleAll = await lastValueFrom(
        this.httpService.get<Response>('/', {
          params: {
            page: page,
          },
        }),
      );
      const { data } = callPeopleAll;
      await this.cacheManager.set(cacheKey, data, 300);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  public async getById(id: string): Promise<Character> {
    try {
      const cacheKey = 'getById_cache';
      const cachedData = await this.cacheManager.get<Character>(cacheKey);
      if (cachedData) {
        return cachedData;
      }
      const callPeopleAll = await lastValueFrom(
        this.httpService.get<Character>(`/${id}`),
      );
      const { data } = callPeopleAll;
      await this.cacheManager.set(cacheKey, data, 300);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
