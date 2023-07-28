import { Inject } from '@nestjs/common';
import { UserRepository } from 'src/data/protocols/db/user-repository.interface';
import { User } from 'src/domain/entities/user';
import { IUser } from 'src/presentation/interfaces/user-payload.interface';

export class CreateUserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async execute(user: IUser): Promise<void> {
    try {
      const newUser = new User(user);
      await this.userRepository.create(newUser);
    } catch (error) {
      throw error;
    }
  }
}
