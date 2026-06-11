import { TopicsService } from './topics.service';
export declare class TopicsController {
    private readonly topicsService;
    constructor(topicsService: TopicsService);
    getTopics(): Promise<import("./topics.entity").TOPICS[]>;
}
