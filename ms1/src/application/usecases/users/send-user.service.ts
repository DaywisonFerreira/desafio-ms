import { Inject, Logger } from '@nestjs/common';
import { KAFKA_TOPIC_CREATE_NEW_USER } from 'src/commons/environment';
import { MessagingProvider } from 'src/infra/providers/messaging-provider.interface';
import { CreateMessage } from 'src/infra/utils/helpers';
import { CreateUserDto } from 'src/presentation/dtos/create-user.dto';

export class SendUserService {
  private readonly logger = new Logger(SendUserService.name);

  constructor(
    @Inject('MessagingProvider')
    private readonly messageProvider: MessagingProvider,
  ) {}

  async execute(userDto: CreateUserDto): Promise<void> {
    try {
      const payload = CreateMessage(KAFKA_TOPIC_CREATE_NEW_USER, userDto);
      await this.messageProvider.sendMessage(payload);
      this.logger.log(`Successfully published new user: ${userDto.email}`);
    } catch (error) {
      this.logger.error(
        `Error while publishing new user: ${userDto.email}`,
        error,
      );
      throw new Error('Failed to publish new user to Kafka');
    }
  }
}
