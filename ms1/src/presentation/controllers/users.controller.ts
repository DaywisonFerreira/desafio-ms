import { Body, Controller, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../dtos/create-user.dto';
import { SendUserService } from 'src/application/usecases/users/send-user.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private sendUserService: SendUserService) {}

  @Post()
  @ApiOperation({ summary: 'Send an user to be created' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async send(@Body() input: CreateUserDto): Promise<string> {
    try {
      this.logger.log(`Receive a new user: ${input.email}`);
      await this.sendUserService.execute(input);
      return 'User will be created';
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
