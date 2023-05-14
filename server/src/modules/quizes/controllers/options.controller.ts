import { QuestionService } from '../services/question.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { OptionsService } from '../services/options.service';
// import { UUIDParam } from 'src/common/decorators/http.decorators';
import { CreateOptionDto } from '../dtos/CreateOption.dto';

@Controller('question/option')
export class OptionsController {
  constructor(
    private optionService: OptionsService,
    private questionService: QuestionService,
  ) {}

  @Get('/')
  async getOptions() {
    const result = await this.optionService.getOptions();
    return {
      success: true,
      statusCode: 200,
      message: `List of Options`,
      lenght: result.length || 0,
      data: result,
    };
  }

  // @Get('/:id')
  // async getQuiz(@UUIDParam('id') id: string) {
  //   console.log('params:', id);
  //   const result = await this.optionService.getOption(id);
  //   return {
  //     success: true,
  //     message: `Details Quiz of id: ${id}`,
  //     statusCode: 200,
  //     data: result,
  //   };
  // }

  @Post('/')
  async saveOptionToQuestion(@Body() option: CreateOptionDto) {
    const question = await this.questionService.getQuestion(option.questionId);
    const result = await this.optionService.createOption(option, question);
    return {
      success: true,
      statusCode: 201,
      message: `Option created`,
      data: result,
      questions: question,
    };
  }
}
