import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { CreateQuestionDto } from '../dtos/CreateQuestion.dto';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Get('/')
  async getQuestions() {
    const result = await this.questionService.getQuestions();
    return {
      success: true,
      statusCode: 200,
      message: `List of Questions`,
      lenght: result.length || 0,
      data: result,
    };
  }

  // @Get('/:id')
  // async getQuiz(@UUIDParam('id') id: string) {
  //   console.log('params:', id);
  //   const result = await this.questionService.getQuestion(id);
  //   return {
  //     success: true,
  //     message: `Details Quiz of id: ${id}`,
  //     statusCode: 200,
  //     data: result,
  //   };
  // }

  @Post('/')
  async createQuestion(@Body() question: CreateQuestionDto) {
    const quiz = await this.quizService.getQuiz(question.quizId);
    const result = await this.questionService.createQuestion(question, quiz);
    return {
      success: true,
      statusCode: 201,
      message: `Question created`,
      data: result,
    };
  }
}
