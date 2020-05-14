import { SpotifyAlbumSimplified } from 'src/albums/interfaces/spotify-album-simplified.interface';
import { SpotifyExternalId } from 'src/interfaces/spotify-external-id.interface';
import { SpotifyTrackSimplified } from './spotify-track-simplified.interface';

export interface SpotifyTrack extends SpotifyTrackSimplified {
  album: SpotifyAlbumSimplified;
  external_ids: SpotifyExternalId[];
  popularity: number;
}
