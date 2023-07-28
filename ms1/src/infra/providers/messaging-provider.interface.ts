interface Messages {
  key?: string;
  value: any;
}
export interface Payload {
  topic: string;
  headers?: Record<string, string>;
  messages: Messages[];
}
export interface MessagingProvider {
  sendMessage(payload: Payload): Promise<void>;
}
