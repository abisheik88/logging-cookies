import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from './logger/Custom-logger/custom-logger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false, //By using this command we can completely avoid the entire logging
    // logger: console, // By using this we can make the log messages just look like a very normal message
    // logger: new CustomLogger(),
  });
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
