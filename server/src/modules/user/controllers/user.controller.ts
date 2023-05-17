import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UUIDParam } from 'src/common/decorators/http.decorators';
import { UserRegisterRequestDto } from '../dtos/user-register.req.dto';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dtos/UpdateUserDto';

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

  @Post('/register')
  async createUser(
    @Body(ValidationPipe) userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    return await this.userService.createUser(userRegister);
  }

  @Put(':id')
  async update(
    @UUIDParam('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const result = await this.userService.updateUser(updateUserDto);

    return {
      status: true,
      data: result,
    };
  }
}
