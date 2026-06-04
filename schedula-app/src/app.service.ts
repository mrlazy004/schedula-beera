import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): object {
    return {
      status: 'ok',
      app: 'Schedula API',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    };
  }
}
