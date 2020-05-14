import { SpotifyPlaylistSimplified } from './spotify-playlist-simplified.interface';
import { SpotifyFollowers } from 'src/users/interfaces/spotify-followers.interface';

export interface SpotifyPlaylist extends SpotifyPlaylistSimplified {
  followers: SpotifyFollowers;
}
