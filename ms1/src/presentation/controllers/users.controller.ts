import { Controller, Get, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SendUserService } from 'src/application/usecases/users/send-user.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private sendUserService: SendUserService) {}

  @Get('/insecure')
  insecureEndpoint() {
    // Simulate SQL injection vulnerability
    const userInput = "1'; DROP TABLE users;";
    const query = `SELECT * FROM users WHERE id = ${userInput}`;
    // ...

    return 'Insecure endpoint';
  }

  @Get('/unsafe')
  unsafeEndpoint() {
    // Simulate unsafe regular expression
    const userInput = '(.{1000})';
    const regex = new RegExp(userInput);
    // ...

    return 'Unsafe endpoint';
  }
}
