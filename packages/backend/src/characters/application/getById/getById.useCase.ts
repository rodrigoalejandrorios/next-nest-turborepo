import { Injectable } from '@nestjs/common';
import { CharacterHttpDomain } from 'src/characters/domain/character.http';
import { Character } from 'src/characters/domain/character.interface';

@Injectable()
export class FindByIdCharacter {
  constructor(private readonly characterHttp: CharacterHttpDomain) {}
  public async execute(id: string): Promise<Character> {
    return await this.characterHttp.findById(id);
  }
}
