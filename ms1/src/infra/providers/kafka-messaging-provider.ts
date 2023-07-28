import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Producer } from 'kafkajs';
import { MessagingProvider, Payload } from './messaging-provider.interface';

@Injectable()
export class KafkaMessagingProvider implements MessagingProvider {
  private kafkaProducer: Producer;

  constructor(
    @Inject('KafkaService')
    private readonly clientKafka: ClientKafka,
  ) {}

  async sendMessage(input: Payload): Promise<void> {
    if (!this.kafkaProducer) {
      this.kafkaProducer = await this.clientKafka.connect();
    }

    const payload = input.messages.map((item) => {
      const partialPayload: any = {
        value: JSON.stringify(item.value),
      };
      if (item?.key) partialPayload.key = item.key;
      if (input?.headers) partialPayload.headers = input.headers;
      return partialPayload;
    });

    await this.kafkaProducer.send({
      topic: input.topic,
      messages: payload,
    });
  }
}
