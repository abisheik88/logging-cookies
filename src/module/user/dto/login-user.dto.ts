import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginData {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
