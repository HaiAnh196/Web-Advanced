import { Injectable, Inject, UnauthorizedException, ConflictException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private userRepository: Repository<User>;

  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource,
    private jwtService: JwtService
  ) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  async register(username: string, password: string):Promise<User> {
    const existingUser = await this.userRepository.findOne({ where: { username } });
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = this.userRepository.create({
      username,
      password: hashedPassword,
    });

    return this.userRepository.save(newUser);
  }

  async login(username: string, password: string): Promise<{ access_token: string }> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
