import { Injectable, HttpService } from '@nestjs/common';
import { SpotifyPaging } from 'src/interfaces/spotify-paging.interface';
import { UsersService } from 'src/users/users.service';
import { SpotifyPlaylistSimplified } from './interfaces/spotify-playlist-simplified.interface';

@Injectable()
export class PlaylistsService {
  constructor(
    private httpService: HttpService,
    private usersService: UsersService,
  ) {}

  async getPlaylists(
    displayName: string,
    first = 50,
    cursor = null,
  ): Promise<SpotifyPaging<SpotifyPlaylistSimplified>> {
    const { accessToken, spotifyId } = await this.usersService.findUserByDisplayName(displayName);
    const limit = first;
    const offset = this.decodeCursor(cursor);

    const response = await this.httpService
      .get(`https://api.spotify.com/v1/users/${spotifyId}/playlists`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { limit, offset },
      })
      .toPromise();

    return response.data;
  }

  private decodeCursor(cursor) {
    const decoded = Number((Buffer.from(cursor, 'base64')).toString('utf8'));
    if (Number.isNaN(decoded)) return 0;
    return decoded;
  }
}
