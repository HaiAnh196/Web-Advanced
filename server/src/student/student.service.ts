import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { STUDENT } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<STUDENT>

  ) {}
  async findAll(): Promise<STUDENT[]> {
    const sid = await this.studentRepository.findBy({
      SID: '1000',
    });
    return sid;
  }
  getStudent(): string {
    return 'Ke mac doi Hello World!';
  }
}
