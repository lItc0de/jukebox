import { SpotifyArtistSimplified } from 'src/artists/interfaces/spotify-artist-simplified.interface';
import { SpotifyExternalUrls } from 'src/interfaces/spotify-external-url.interface';
import { SpotifyImage } from 'src/interfaces/spotify-image.interface';
import { SpotifyRestriction } from 'src/interfaces/spotify-restriction.interface';

export interface SpotifyAlbumSimplified {
  album_group?: string;
  album_type: string;
  artists: SpotifyArtistSimplified[];
  available_markets: string[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: 'year' | 'month' | 'day';
  restrictions: SpotifyRestriction[];
  type: string;
  uri: string;
}
