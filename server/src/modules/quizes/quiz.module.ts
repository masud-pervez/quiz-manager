import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './services/quiz.service';
import { QuizController } from './controllers/quiz.controller';
import { QuestionService } from './services/question.service';
import { QuestionController } from './controllers/question.controller';
import { OptionsService } from './services/options.service';
import { OptionsController } from './controllers/options.controller';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  providers: [QuizService, QuestionService, OptionsService],
  controllers: [QuizController, QuestionController, OptionsController],
})
export class QuizModule {}
