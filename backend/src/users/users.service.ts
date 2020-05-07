import { Injectable, HttpService } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { SpotifyUser } from './interfaces/spotify-user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private usersModel: Model<User>,
    private httpService: HttpService,
  ) {}

  async findUserByDisplayName(displayName: string): Promise<User> {
    return this.usersModel.findOne({ displayName });
  }

  async createUserByAccessToken(accessToken: string): Promise<User> {
    const response = await this.httpService
      .get('https://api.spotify.com/v1/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .toPromise();

    const {
      display_name: displayName,
      id: spotifyId,
    }: SpotifyUser = response.data;

    const user = await this.usersModel.findOneAndUpdate(
      { displayName },
      {
        displayName,
        spotifyId,
        accessToken,
      },
      { upsert: true, new: true },
    );

    return user;
  }
}
