import { v4 as uuidV4 } from 'uuid';

export const CreateKafkaMessage = (topic: string, payload: any) => {
  return {
    topic,
    headers: {
      'X-Correlation-Id': uuidV4(),
      'X-Version': '1.0',
    },
    messages: [
      {
        key: uuidV4(),
        value: {
          data: payload,
          metadata: {
            createdAt: new Date(),
          },
        },
      },
    ],
  };
};
