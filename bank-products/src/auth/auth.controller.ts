import { Controller, Get, Query, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('callback')
  async callback(@Query('code') code: string, @Res() res) {
    const token = await this.authService.getAccessToken(code);
    return res.redirect(`http://localhost:4200?token=${token.access_token}`);
  }
}
