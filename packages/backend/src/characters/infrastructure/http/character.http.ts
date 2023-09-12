import { Injectable } from '@nestjs/common';
import { CharacterHttpDomain } from '../../../characters/domain/character.http';
import { CharactersService } from '../services/characters.service';
import { Character } from 'src/characters/domain/character.interface';

@Injectable()
export class CharactersHttp implements CharacterHttpDomain {
  constructor(private readonly service: CharactersService) {}
  public async findAll(): Promise<Character[]> {
    return await this.service.getAll();
  }

  public async findById(chId: string): Promise<Character> {
    return await this.service.getById(chId);
  }
}
