import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getHello(): Promise<import("./student.entity").STUDENT[]>;
    getData(): {
        id: number;
        name: string;
        active: boolean;
    };
}
