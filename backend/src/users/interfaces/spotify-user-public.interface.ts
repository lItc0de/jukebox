import { SpotifyExternalUrl } from 'src/interfaces/spotify-external-url.interface';
import { SpotifyFollowers } from './spotify-followers.interface';
import { SpotifyImage } from 'src/interfaces/spotify-image.interface';

export interface SpotifyUserPublic {
  display_name: string;
  external_urls: SpotifyExternalUrl[];
  followers: SpotifyFollowers;
  id: string;
  images: SpotifyImage[];
  type: 'user';
  uri: string;
}
