import { Injectable } from "@nestjs/common";
import { CharacterHttpDomain } from "src/characters/domain/character.http";
import { Character } from "src/characters/domain/character.interface";

@Injectable()
export class FindAllCharacter {
    constructor(private readonly characterHttp: CharacterHttpDomain){}
    public async execute() : Promise<Character[]> {
        return await this.characterHttp.findAll()
    }
}