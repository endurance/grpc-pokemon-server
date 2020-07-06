import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { pokemon } from '../../generated/rpc';
import PokemonById = pokemon.PokemonById;
var Pokedex = require('pokedex-promise-v2');

@Controller()
export class PokemonController {
  @GrpcMethod('PokemonService', 'FindOne')
  public async findOne(data: PokemonById, metadata: any) {
    const pokedex = new Pokedex();
    const pokemon = await pokedex.getPokemonByName(data.id);
    return pokemon;
  }
}
