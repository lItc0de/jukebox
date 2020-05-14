import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, StrategyOptionsWithRequest } from 'passport-oauth2';
import { AuthService } from './auth.service';
import { AuthConfigurationService } from './auth.configuration.service';

@Injectable()
export class OAuth2Strategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private authConfigService: AuthConfigurationService,
  ) {
    super({
      authorizationURL: authConfigService.authorizationURL,
      tokenURL: authConfigService.tokenURL,
      clientID: authConfigService.clientID,
      clientSecret: authConfigService.clientSecret,
      callbackURL: authConfigService.callbackURL,
    } as StrategyOptionsWithRequest);
  }

  authorizationParams(options: any): any {
    return Object.assign(options, {
      scope: this.authConfigService.scope,
    });
  }

  async validate(accessToken, refreshToken, profile, done): Promise<any> {
    const user = await this.authService.validateUser(accessToken, refreshToken);

    return done(null, user);
  }
}
