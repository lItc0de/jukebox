import { Injectable, HttpService } from '@nestjs/common';
import { SpotifyPaging } from 'src/interfaces/spotify-paging.interface';
import { SpotifyPlaylistSimplified } from './interfaces/spotify-playlist-simplified.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PlaylistsService {
  constructor(
    private httpService: HttpService,
    private usersService: UsersService,
  ) {}

  async getPlaylists(
    displayName: string,
    limit = 50,
    offset = 0,
  ): Promise<SpotifyPaging<SpotifyPlaylistSimplified>> {
    const { accessToken, spotifyId } = await this.usersService.findUserByDisplayName(displayName);

    const response = await this.httpService
      .get(`https://api.spotify.com/v1/users/${spotifyId}/playlists`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { limit, offset },
      })
      .toPromise();

    return response.data;
  }
}
