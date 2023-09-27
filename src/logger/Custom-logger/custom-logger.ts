import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class CustomLogger implements LoggerService {
  log(message: string) {
    console.log(`[Custom Logger] - ${message}`);
  }

  error(message: string, trace: string) {
    console.error(`[Custom logger]- ${message}`);
    console.error(trace);
  }

  warn(message: string) {
    console.log(`[Custom logger]- ${message}`);
  }
}
