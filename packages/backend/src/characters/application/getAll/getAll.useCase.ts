import { Injectable } from '@nestjs/common';
import { CharacterHttpDomain } from 'src/characters/domain/character.http';
import { Response } from '../../../characters/domain/character.interface';

@Injectable()
export class FindAllCharacter {
  constructor(private readonly characterHttp: CharacterHttpDomain) {}
  public async execute({ page }: { page: string }): Promise<Response> {
    return await this.characterHttp.findAll({ page });
  }
}
