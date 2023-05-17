import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dtos/CreateQuiz.dto';
import { UUIDParam } from 'src/common/decorators/http.decorators';

@Controller('quizes')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  async getQuizes() {
    const result = await this.quizService.getQuizes();

    return {
      success: true,
      statusCode: 200,
      message: `List of Quizes`,
      lenght: result.length || 0,
      data: result,
    };
  }

  @Get('/:id')
  async getQuiz(@UUIDParam('id') id: string) {
    console.log('params:', id);
    const result = await this.quizService.getQuiz(id);
    return {
      success: true,
      message: `Details Quiz of id: ${id}`,
      statusCode: 200,
      data: result,
    };
  }

  @Post('/')
  async createQuiz(@Body() quizData: CreateQuizDto) {
    const result = await this.quizService.createQuiz(quizData);
    console.log('createQuiz:', result);
    return {
      success: true,
      statusCode: 201,
      message: `Quiz created`,
      data: result,
    };
  }
}
