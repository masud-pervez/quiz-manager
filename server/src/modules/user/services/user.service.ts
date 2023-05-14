import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/CreateUser.dto';

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

  createUser(user: CreateUserDto): Promise<User> {
    return this.userRepository.save(user);
  }
}
