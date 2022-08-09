import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Xin chào Trung Phú NA Update realtime. OK';
  }
}
