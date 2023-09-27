import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false, //By using this command we can completely avoid the entire logging
    logger: console,
  });
  await app.listen(3000);
}
bootstrap();
