import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ClassSerializerInterceptor,
  UseInterceptors,
  Res,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginData } from './dto/login-user.dto';
import { Response, Request } from 'express';
import { SeederService } from '../seeder/seeder.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly seeder: SeederService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() createuserData: CreateUserDto) {
    return this.userService.create(createuserData);
  }

  @Post('dummy')
  async createdummy() {
    const count = 10;
    await this.seeder.seedusers(count);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post('login')
  async loginuser(
    @Body() logindata: LoginData,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    res.cookie('Login-Data', logindata.email);
    // console.log(req);
    const userdata = await this.userService.login(logindata);
    // res.json(userdata);
    res.send(userdata);
  }
}
