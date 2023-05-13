import { Injectable } from '@nestjs/common';
import { User } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly questionRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.questionRepository.find();
    // return 'users';
  }
}
