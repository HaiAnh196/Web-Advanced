import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private dataSource;
    private jwtService;
    private userRepository;
    constructor(dataSource: DataSource, jwtService: JwtService);
    register(username: string, password: string): Promise<User>;
    login(username: string, password: string): Promise<{
        access_token: string;
    }>;
}
