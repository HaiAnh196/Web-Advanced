import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: any): Promise<{
        id: number;
        username: string;
    }>;
    login(body: any, req: any, res: any): Promise<{
        access_token: string;
    }>;
}
