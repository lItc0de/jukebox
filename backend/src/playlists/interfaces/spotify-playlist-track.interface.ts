import { SpotifyUserPublic } from 'src/users/interfaces/spotify-user-public.interface';
import { SpotifyTrack } from 'src/tracks/interfaces/spotify-track.interface';

export interface SpotifyPlaylistTrack {
  added_at: string;
  added_by: SpotifyUserPublic;
  is_local: boolean;
  track: SpotifyTrack;
}
