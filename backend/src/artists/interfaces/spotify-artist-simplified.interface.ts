import { SpotifyExternalUrl } from 'src/interfaces/spotify-external-url.interface';

export interface SpotifyArtistSimplified {
  external_urls: SpotifyExternalUrl[];
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
