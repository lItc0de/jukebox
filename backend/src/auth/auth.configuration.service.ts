import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthConfigurationService {
  constructor(protected readonly configService: ConfigService) {}

  public scope = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify',
  ].join(' ');
  public authorizationURL = this.configService.get<string>('AUTH_URL');
  public tokenURL = this.configService.get<string>('TOKEN_URL');
  public clientID = this.configService.get<string>('CLIENT_ID');
  public clientSecret = this.configService.get<string>('CLIENT_SECRET');
  public callbackURL = this.configService.get<string>('CALLBACK_URL');
}
