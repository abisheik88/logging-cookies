import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getHello() {
    this.logger.debug('it is debug message');
    this.logger.error('it is error message');
    this.logger.fatal('it is a fatal message');
    this.logger.verbose('it is a verbose message');
    this.logger.warn('it is a warning message');
    this.logger.log('It is a normal log message');
  }
}
