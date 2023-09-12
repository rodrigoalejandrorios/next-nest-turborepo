import { Character } from './character.interface';

export class CharacterDomain {
  constructor(readonly params: Character) {}

  get returnValue(): Character {
    return this.params;
  }
}
