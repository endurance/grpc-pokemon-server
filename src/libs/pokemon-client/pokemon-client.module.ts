import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { DynamicModule, Module } from '@nestjs/common';
import { srcPath } from '../../directory';

interface ClientOptions {
  url: string;
}

@Module({})
export class PokemonClientModule {
  public static forRoot(options: ClientOptions): DynamicModule {
    const clientModule = ClientsModule.register([
      {
        name: 'POKEMON_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: options.url,
          package: 'pokemon',
          protoPath: join(srcPath, 'protos/pokemon.proto'),
        },
      },
    ]);
    return {
      module: PokemonClientModule,
      imports: [clientModule],
      exports: [clientModule],
    };
  }
}
