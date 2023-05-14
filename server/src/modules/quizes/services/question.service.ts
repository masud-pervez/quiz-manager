import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Question } from '../entities/question.entity';
import { CreateQuestionDto } from '../dtos/CreateQuestion.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  getQuestions() {
    return this.questionRepository.find({ relations: ['options', 'quiz'] });
  }

  async getQuestion(id: any): Promise<Question> {
    const result = await this.questionRepository.findOne({
      where: { id },
      relations: ['options', 'quiz'],
    });
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newData = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newData];
    await quiz.save();

    return newData;
  }
}
