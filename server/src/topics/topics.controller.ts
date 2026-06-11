import { Controller, Get } from '@nestjs/common';
import { TopicsService } from './topics.service';

@Controller()
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Get()
  getTopics() {
    //return this.topicsService.getTopics();
    return this.topicsService.getTopics();
  }
}
