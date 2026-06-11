import { Repository } from 'typeorm';
import { TOPICS } from './topics.entity';
export declare class TopicsService {
    private topicsRepository;
    constructor(topicsRepository: Repository<TOPICS>);
    findAll(): Promise<TOPICS[]>;
    getTopics(): Promise<TOPICS[]>;
    getStudent(): string;
}
