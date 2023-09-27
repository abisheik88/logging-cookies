import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { User } from '../user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}
  async seedusers(count: number) {
    const users = [];
    for (let i = 0; i < count; i++) {
      const user = {
        f_name: faker.person.firstName(),
        l_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password({ length: 10 }),
        phone: faker.phone.number(),
      };
      users.push(user);
    }
    await this.user.save(users);
  }
}
