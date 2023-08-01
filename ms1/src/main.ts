import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { Transport } from '@nestjs/microservices';
import {
  APPLICATION_PORT,
  KAFKA_CLIENT_ID,
  KAFKA_GROUP_ID,
  KAFKA_URIS,
} from './commons/environment';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });

  const corsOptions: CorsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    preflightContinue: false,
    optionsSuccessStatus: 200,
  };
  app.enableCors(corsOptions);

  const swaggerDocumentBuilder = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Desafio MS - API Documentation')
    .setDescription('Desafio MS - API Documentation')
    .setVersion('1.0')
    .build();
  const swaggerDocumentOptions: SwaggerDocumentOptions = {
    operationIdFactory: (_controllerKey: string, methodKey: string) =>
      methodKey,
  };
  const swaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerDocumentBuilder,
    swaggerDocumentOptions,
  );

  SwaggerModule.setup('api', app, swaggerDocument);

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
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();
