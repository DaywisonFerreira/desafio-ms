import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Document } from 'mongoose';

class Address {
  @Prop({ type: String, required: true })
  street: string;

  @Prop({ type: String, required: true })
  city: string;

  @Prop({ type: String, required: true })
  state: string;

  @Prop({ type: String, required: true })
  postalCode: string;

  @Prop({ type: String, required: true })
  country: string;
}

class PhoneNumber {
  @Prop({ type: String, required: true })
  type: string;

  @Prop({ type: String, required: true })
  number: string;
}

@Schema({ collection: 'users', timestamps: true })
export class UserEntity extends Document {
  @Prop({ type: String, required: true })
  id: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: Number, required: true })
  age: number;

  @Prop({ type: Address, required: true })
  address: Address;

  @Prop({ required: false })
  @Type(() => PhoneNumber)
  phoneNumbers?: PhoneNumber[];

  @Prop({ type: Boolean, required: true })
  isActive: boolean;
}

export type UserDocument = UserEntity & Document;
export const UserSchema = SchemaFactory.createForClass(UserEntity);

UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ id: 1 }, { unique: true });
