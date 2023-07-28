import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  KAFKA_CLIENT_ID,
  KAFKA_GROUP_ID,
  KAFKA_URIS,
} from 'src/commons/environment';
import { UsersController } from 'src/presentation/controllers/users.controller';
import { KafkaMessagingProvider } from '../providers/kafka-messaging-provider';
import { SendUserService } from 'src/application/usecases/users/send-user.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KafkaService',
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
    ]),
  ],
  providers: [
    SendUserService,
    {
      provide: 'MessagingProvider',
      useClass: KafkaMessagingProvider,
    },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
