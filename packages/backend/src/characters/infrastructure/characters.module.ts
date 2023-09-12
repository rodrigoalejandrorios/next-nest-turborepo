import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CharactersService } from './services/characters.service';
import { CharactersController } from './controllers/characters.controller';
import { API_URL } from 'src/constant/url';
import { urlFactory } from 'src/utils/urlFactory.util';
import { CharacterHttpDomain } from '../domain/character.http';
import { CharactersHttp } from './http/character.http';
import { FindAllCharacter } from '../application/getAll/getAll.useCase';
import { FindByIdCharacter } from '../application/getById/getById.useCase';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    HttpModule.register({
      baseURL: urlFactory(API_URL, 'people'),
    }),
    CacheModule.register()
  ],
  providers: [
    CharactersService,
    { provide: CharacterHttpDomain, useClass: CharactersHttp },
    FindAllCharacter,
    FindByIdCharacter,
  ],
  controllers: [CharactersController],
})
export class CharactersModule {}
