import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller()
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getHello() {
    //return this.studentService.getStudent();
    return this.studentService.findAll();
  }
  @Get('/data')
  getData() {
    return {
      id: 1,
      name: 'John Doe',
      active: true,
    };
  }
}
