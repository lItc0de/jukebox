import { SpotifyExternalUrls } from 'src/interfaces/spotify-external-url.interface';

export interface SpotifyArtistSimplified {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
