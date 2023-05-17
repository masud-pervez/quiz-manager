import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserRegisterRequestDto } from '../dtos/user-register.req.dto';
import { UpdateUserDto } from '../dtos/UpdateUserDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  async getUser(id: any) {
    const result = await this.userRepository.findOne({
      where: { id },
    });

    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  async updateUser(userData: UpdateUserDto): Promise<User> {
    const user = new User();

    user.name = userData.name;
    return await user.save();
  }

  async createUser(userRegister: UserRegisterRequestDto): Promise<User> {
    const user = new User();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;
    return await user.save();
  }
}
