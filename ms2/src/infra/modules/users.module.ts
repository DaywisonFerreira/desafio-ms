import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import {
  KAFKA_CLIENT_ID,
  KAFKA_GROUP_ID,
  KAFKA_URIS,
} from 'src/commons/environment';
import { CreateUserService } from 'src/application/usecases/users/create-user.service';
import { UserEntity, UserSchema } from '../db/mongoose/schemas/user.schema';
import { MongooseUserRepository } from '../db/mongoose/repositories/mongoose-user.repository';
import { UsersController } from 'src/presentation/users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
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
    CreateUserService,
    {
      provide: 'UserRepository',
      useClass: MongooseUserRepository,
    },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
