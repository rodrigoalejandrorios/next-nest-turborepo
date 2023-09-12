import { Character } from "./character.interface";

export abstract class CharacterHttpDomain {
  abstract findAll(): Promise<Character[]>;
  abstract findById(chId: string): Promise<Character>
}
