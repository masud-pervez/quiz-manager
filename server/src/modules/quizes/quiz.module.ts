import { Module } from '@nestjs/common';
import { Quiz } from './quiz/entities/quiz.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './quiz/services/quiz.service';
import { QuizController } from './quiz/controllers/quiz.controller';
import { Question } from './question/entities/question.entity';
import { QuestionService } from './question/services/question.service';
import { QuestionController } from './question/controllers/question.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
  providers: [QuizService, QuestionService],
  controllers: [QuizController, QuestionController],
})
export class QuizModule {}
