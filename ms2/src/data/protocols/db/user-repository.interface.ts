import { User } from 'src/domain/entities/user';

export interface UserRepository {
  create(user: User): Promise<void>;
}
