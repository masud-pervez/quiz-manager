import { IsNotEmpty } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'The quiz should have a title' })
  title: string;

  @IsNotEmpty({ message: 'The quiz should have a desc' })
  description: string;
}
