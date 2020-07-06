import { SpotifyExternalUrls } from 'src/interfaces/spotify-external-url.interface';
import { SpotifyFollowers } from './spotify-followers.interface';
import { SpotifyImage } from 'src/interfaces/spotify-image.interface';

export interface SpotifyUserPublicSimplified {
  display_name: string;
  external_urls: SpotifyExternalUrls;
  id: string;
  type: string;
  uri: string;
}

export interface SpotifyUserPublic extends SpotifyUserPublicSimplified {
  followers: SpotifyFollowers;
  images: SpotifyImage[];
}
