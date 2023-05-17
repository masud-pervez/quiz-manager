import { Module } from '@nestjs/common';
import { Quiz } from './entities/quiz.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option } from './entities/option.entity';
import { QuizService } from './services/quiz.service';
import { Question } from './entities/question.entity';
import { OptionsService } from './services/options.service';
import { QuestionService } from './services/question.service';
import { QuizController } from './controllers/quiz.controller';
import { OptionsController } from './controllers/options.controller';
import { QuestionController } from './controllers/question.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  providers: [QuizService, QuestionService, OptionsService],
  controllers: [QuizController, QuestionController, OptionsController],
})
export class QuizModule {}
