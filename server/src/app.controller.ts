import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TopicsService } from './topics/topics.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('topics')
  getTopics() {
    //return this.topicsService.getTopics();
    return "this is testing";
  }
}
