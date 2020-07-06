import { SpotifyExternalUrls } from 'src/interfaces/spotify-external-url.interface';

export interface SpotifyTrackLink {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}
