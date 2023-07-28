import { randomUUID } from 'crypto';
import { ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, UserEntity } from '../schemas/user.schema';
import { UserRepository } from 'src/data/protocols/db/user-repository.interface';
import { User } from 'src/domain/entities/user';

export class MongooseUserRepository implements UserRepository {
  constructor(
    @InjectModel(UserEntity.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(user: User): Promise<void> {
    const userExists = await this.userModel
      .findOne({ email: user.email })
      .lean()
      .exec();

    if (userExists) {
      throw new ConflictException(
        `User with email ${user.email} already exists.`,
      );
    }

    await this.userModel.create({
      ...user.toSave(),
      id: randomUUID(),
    });
  }
}
