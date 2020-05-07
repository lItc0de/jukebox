import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Strategy, StrategyOptionsWithRequest } from 'passport-oauth2';
import { AuthService } from './auth.service';

@Injectable()
export class OAuth2Strategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      authorizationURL: configService.get<string>('AUTH_URL'),
      tokenURL: configService.get<string>('TOKEN_URL'),
      clientID: configService.get<string>('CLIENT_ID'),
      clientSecret: configService.get<string>('CLIENT_SECRET'),
      callbackURL: configService.get<string>('CALLBACK_URL'),
    } as StrategyOptionsWithRequest);
  }

  async validate(accessToken, refreshToken, profile, done): Promise<any> {
    const user = await this.authService.validateUser(accessToken, refreshToken);

    return done(null, user);
  }
}
