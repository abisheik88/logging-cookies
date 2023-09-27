import { Exclude, Expose, Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Exclude()
  f_name: string;

  @IsNotEmpty()
  @IsString()
  @Exclude()
  l_name: string;

  @Expose({ name: 'full_name' })
  @Transform(({ obj }) => `${obj.f_name} ${obj.l_name}`)
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Exclude()
  password: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;
}
