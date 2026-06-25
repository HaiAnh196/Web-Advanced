import { Controller, Post, Body, HttpCode, HttpStatus, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: any) {
    const { username, password } = body;
    const user = await this.authService.register(username, password);
    // Remove password from response
    const { password: _, ...result } = user;
    return result;
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() body: any, @Req() req: any, @Res({ passthrough: true }) res: any) {
    const { username, password } = body;
    const result = await this.authService.login(username, password);

    // Also set it in session
    req.session.user = { username };

    // Also set a generic cookie for demonstration (Yeu cau 1)
    res.cookie('auth_cookie', result.access_token, { httpOnly: true });

    return result;
  }
}
