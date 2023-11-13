import { Body, Controller, Get, HttpCode, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../dtos/create-user.dto';
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

  @Post()
  @ApiOperation({ summary: 'Send an user to be created' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  async send(@Body() input: CreateUserDto): Promise<void> {
    try {
      this.logger.log(`Receive a new user with e-mail: ${input.email}`);
      await this.sendUserService.execute(input);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
