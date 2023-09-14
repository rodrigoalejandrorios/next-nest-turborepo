import { Character, Response } from "./character.interface";

export abstract class CharacterHttpDomain {
  abstract findAll(params: { page: string }): Promise<Response>;
  abstract findById(chId: string): Promise<Character>
}
