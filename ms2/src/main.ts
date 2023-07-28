import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import {
  APPLICATION_PORT,
  KAFKA_CLIENT_ID,
  KAFKA_GROUP_ID,
  KAFKA_URIS,
} from './commons/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = APPLICATION_PORT;
  app.connectMicroservice(
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: KAFKA_CLIENT_ID,
          brokers: [KAFKA_URIS],
        },
        consumer: {
          groupId: KAFKA_GROUP_ID,
        },
      },
    },
    { inheritAppConfig: true },
  );
  await app.startAllMicroservices();
  await app.listen(port);
}
bootstrap();
