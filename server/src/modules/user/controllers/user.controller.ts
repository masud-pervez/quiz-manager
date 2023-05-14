import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { UUIDParam } from 'src/common/decorators/http.decorators';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getUsers() {
    const result = await this.userService.getUsers();

    return {
      success: true,
      statusCode: 200,
      message: `List of Users`,
      lenght: result.length || 0,
      data: result,
    };
  }

  @Get('/:id')
  async getUser(@UUIDParam('id') id: string) {
    console.log('params:', id);
    const result = await this.userService.getUser(id);
    return {
      success: true,
      message: `Details user of id: ${id}`,
      statusCode: 200,
      data: result,
    };
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    const result = await this.userService.createUser(user);

    return {
      success: true,
      statusCode: 201,
      message: `User created`,
      data: result,
    };
  }
}
