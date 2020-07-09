/* eslint-disable */
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';


export interface FindAllParams {
}

export interface PokemonArrayResponse {
  pokemon: PokemonListItem[];
}

export interface PokemonById {
  id: number;
}

export interface Pokemon {
  id: number;
  name: string;
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonServiceController {

  findAll(request: FindAllParams): Observable<PokemonArrayResponse>;

  findOne(request: PokemonById): Observable<Pokemon>;

}

export interface PokemonServiceClient {

  findAll(request: FindAllParams): Observable<PokemonArrayResponse>;

  findOne(request: PokemonById): Observable<Pokemon>;

}

export function PokemonServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['findAll', 'findOne'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('PokemonService', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('PokemonService', method)(constructor.prototype[method], method, descriptor);
    }
  }
}

export const POKEMON_PACKAGE_NAME = 'pokemon'
export const POKEMON_SERVICE_NAME = 'PokemonService';