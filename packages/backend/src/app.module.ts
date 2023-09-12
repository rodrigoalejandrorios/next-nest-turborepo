import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CharactersModule } from './characters/infrastructure/characters.module';
import { MoviesModule } from './movies/infrastructure/movies.module';
import { PlanetsModule } from './planets/infrastructure/planets.module';
import { ShipsModule } from './ships/infrastructure/ships.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    CharactersModule,
    MoviesModule,
    PlanetsModule,
    ShipsModule,
  ],
})
export class AppModule {}
