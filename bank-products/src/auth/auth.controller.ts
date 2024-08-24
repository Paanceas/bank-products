import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('api/auth')
export class AuthController {
  @Get('login')
  @UseGuards(AuthGuard('oauth2'))
  login() {
    // Este endpoint redirige a Auth0 para autenticación
  }

  @Get('callback')
  @UseGuards(AuthGuard('oauth2'))
  callback(@Req() req, @Res() res: Response) {
    const user = req.user;
    const accessToken = user?.accessToken;
    return res.redirect(`http://localhost:4200?token=${accessToken}`);
  }
}
