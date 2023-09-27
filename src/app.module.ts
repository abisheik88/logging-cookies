import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomModule } from './module/custom/custom.module';
import { UserModule } from './module/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './module/user/entities/user.entity';
import { SeederService } from './module/seeder/seeder.service';

@Module({
  imports: [
    CustomModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'universal',
      username: 'postgres',
      password: 'Abisheik88@',
      synchronize: true,
      entities: [User],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
