import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {


  getHello(): string {
    return 'Hello World!';
  }

  addDate(): string {
    return 'Date Added';
  }
}
