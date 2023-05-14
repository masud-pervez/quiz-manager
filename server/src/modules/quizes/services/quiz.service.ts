import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../dtos/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  getQuizes() {
    return this.quizRepository.find({ relations: ['questions'] });
  }

  async getQuiz(id: any) {
    const result = await this.quizRepository.findOne({
      where: { id },
      relations: ['questions'],
    });
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  createQuiz(quiz: CreateQuizDto): Promise<Quiz> {
    return this.quizRepository.save(quiz);
  }
}
