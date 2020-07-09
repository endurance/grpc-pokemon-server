import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PokemonById } from '../../protos/pokemon';
const Pokedex = require('pokedex-promise-v2');

@Controller()
export class PokemonController {
  private _pokedex = new Pokedex();

  @GrpcMethod('PokemonService', 'FindAll')
  public async findAll(data: any, metadata: any) {
    const answer = await this._pokedex.getPokemonsList();
    return {
      pokemon: answer.results,
    };
  }

  @GrpcMethod('PokemonService', 'FindOne')
  public async findOne(data: PokemonById, metadata: any) {
    return await this._pokedex.getPokemonByName(data.id);
  }
}
