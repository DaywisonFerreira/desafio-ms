import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { CreateUserService } from 'src/application/usecases/users/create-user.service';
import { KAFKA_TOPIC_CREATE_NEW_USER } from 'src/commons/environment';
import { IUserPayload } from './interfaces/user-payload.interface';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private createUserService: CreateUserService) {}

  @MessagePattern(KAFKA_TOPIC_CREATE_NEW_USER)
  async create(@Payload() payload: IUserPayload, @Ctx() context: KafkaContext) {
    const newUser = payload.data;
    try {
      this.logger.log(`New user received with email: ${newUser.email}`);
      await this.createUserService.execute(newUser);
      this.logger.log(`User with email: ${newUser.email} was created.`);
    } catch (error) {
      this.logger.error(
        `Failed to create user with the email: ${newUser.email}`,
        error,
      );
    }
  }
}
