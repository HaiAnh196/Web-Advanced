import { Repository } from 'typeorm';
import { STUDENT } from './student.entity';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<STUDENT>);
    findAll(): Promise<STUDENT[]>;
    getStudent(): string;
}
