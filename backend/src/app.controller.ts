import {
  Controller,
  Get,
  Request,
  UseGuards,
  Res,
} from '@nestjs/common';
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
  async callback(@Request() req, @Res() res) {
    const { accessToken } = await this.authService.login(req.user);
    return res.redirect(301, `http://localhost:8080/login?accessToken=${accessToken}`);
  }
}
