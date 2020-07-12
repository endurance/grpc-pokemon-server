import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import * as path from 'path';
import { ApiModule } from './api.module';
import { srcPath } from '../directory';

export async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: 'pokemon',
      protoPath: path.join(srcPath, 'protos/pokemon.proto'),
    },
  });
  await app.listen(3000, () => {
    console.log('App is listening');
  });
}
