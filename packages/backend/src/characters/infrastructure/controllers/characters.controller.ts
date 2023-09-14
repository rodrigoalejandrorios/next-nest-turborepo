import { Controller, Get, Param, Query } from '@nestjs/common';
import { FindAllCharacter } from '../../../characters/application/getAll/getAll.useCase';
import { FindByIdCharacter } from '../../../characters/application/getById/getById.useCase';

@Controller('characters')
export class CharactersController {
  constructor(
    private readonly findAllCharacter: FindAllCharacter,
    private readonly findByIdCharacter: FindByIdCharacter,
  ) {}

  @Get('all')
  public async getAll(@Query('page') page: string) {
    return this.findAllCharacter.execute({ page });
  }

  @Get(':id')
  public async getById(@Param('id') id: string) {
    return this.findByIdCharacter.execute(id);
  }
}
