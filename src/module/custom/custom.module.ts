import { Module } from '@nestjs/common';
import { CustomLogger } from 'src/logger/Custom-logger/custom-logger';

@Module({
  providers: [CustomLogger],
  exports: [CustomLogger],
})
export class CustomModule {}
