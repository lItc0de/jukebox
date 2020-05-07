import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('oauth2'))
  @Get('auth/login')
  login() {}

  @UseGuards(AuthGuard('oauth2'))
  @Get('auth/callback')
  async callback(@Request() req) {
    return this.authService.login(req.user);
  }
}
