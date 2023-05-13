import { Injectable } from '@nestjs/common';
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

  getQuiz(id: any) {
    return this.quizRepository.findOne({
      where: { id },
      relations: ['questions'],
    });
  }

  createQuiz(quiz: CreateQuizDto): Promise<Quiz> {
    return this.quizRepository.save(quiz);
  }
}
