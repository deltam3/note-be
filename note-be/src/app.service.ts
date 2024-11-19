import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  onModuleInit() {
    const nodeEnv = this.configService.get<string>('NODE_ENV'); // Ensure NODE_ENV is defined in your .env
    console.log(nodeEnv);

    // Log environment variables to check if they are loaded
    console.log(process.env.NODE_ENV);
    console.log(this.configService.get<string>('NODE_ENV'));
    console.log('DB_HOST:', this.configService.get<string>('DB_HOST'));
    console.log('DB_PORT:', typeof this.configService.get<string>('DB_PORT'));
    console.log('DATABASE:', this.configService.get<string>('DB_DATABASE'));
    console.log('DB_USERNAME:', this.configService.get<string>('DB_USERNAME'));
    console.log('DB_PASSWORD:', this.configService.get<string>('DB_PASSWORD'));
    console.log('DB_SYNC:', this.configService.get<boolean>('DB_SYNC'));
  }
  //
  getHello(): string {
    // console.log(this.configService.get<string>('DB_HOST'));
    return 'Hello World!';
  }
}
