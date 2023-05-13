import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Question } from '../entities/question.entity';
import { CreateQuestionDto } from '../dtos/CreateQuestion.dto';
import { Quiz } from '../../quiz/entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  getQuestions() {
    return this.questionRepository.find();
  }

  getQuestion(id: any) {
    return this.questionRepository.findOne({
      where: { id },
    });
  }

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newData = await this.questionRepository.save(question);

    quiz.questions = [...quiz.questions, newData];
    await quiz.save();

    return newData;
  }
}
