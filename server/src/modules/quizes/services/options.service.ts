import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Option } from '../entities/option.entity';
import { Repository } from 'typeorm';
import { CreateOptionDto } from '../dtos/CreateOption.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Option) private optionRepository: Repository<Option>,
  ) {}

  getOptions() {
    return this.optionRepository.find();
  }

  async createOption(
    option: CreateOptionDto,
    question: Question,
  ): Promise<Option> {
    const newData = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });

    question.options = [...question.options, newData];
    await question.save();
    return newData;
  }
}
