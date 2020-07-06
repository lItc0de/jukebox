import { Injectable, HttpService } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserModel } from './interfaces/user.interface';
import { SpotifyUserPublic } from './interfaces/spotify-user-public.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private usersModel: Model<UserModel>,
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
    }: SpotifyUserPublic = response.data;

    return this.findAndUpdateUser({ displayName, spotifyId, accessToken });
  }

  async findAndUpdateUser(user: User): Promise<User> {
    const { displayName, spotifyId, accessToken } = user;
    return this.usersModel.findOneAndUpdate(
      { displayName },
      {
        displayName,
        spotifyId,
        accessToken,
      },
      { upsert: true, new: true },
    );
  }
}
