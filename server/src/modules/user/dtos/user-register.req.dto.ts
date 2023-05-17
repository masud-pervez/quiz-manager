import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class UserRegisterRequestDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  password: string;
  // @Matches(REGEX.PASSWORD_RULE, {
  //   message: 'password too weak',
  // })

  @IsNotEmpty()
  @Length(8, 24)
  // @Matches(REGEX.PASSWORD_RULE, {
  //   message: 'password too weak',
  // })
  confirm: string;
}
