import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.user.save(createUserDto);
  }

  async findAll(): Promise<CreateUserDto[]> {
    const user = await this.user.find();
    const userdto = user.map((user) => plainToClass(CreateUserDto, user));
    return userdto;
  }

  async login(logindata) {
    const { email, password } = logindata;
    const checkuser = await this.user.findOne({ where: { email } });
    if (!checkuser) {
      console.log('Email not exists.Kindly please register');
    }
    return checkuser;
  }
}
