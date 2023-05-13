import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async getUsers() {
    const result = await this.usersService.getUsers();

    return {
      success: true,
      statusCode: 200,
      message: `List of Users`,
      lenght: result.length || 0,
      data: result,
    };
  }
}
