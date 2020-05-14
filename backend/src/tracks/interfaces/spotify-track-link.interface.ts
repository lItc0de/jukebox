import { SpotifyExternalUrl } from 'src/interfaces/spotify-external-url.interface';

export interface SpotifyTrackLink {
  external_urls: SpotifyExternalUrl[];
  href: string;
  id: string;
  type: string;
  uri: string;
}
