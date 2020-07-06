import { SpotifyArtistSimplified } from 'src/artists/interfaces/spotify-artist-simplified.interface';
import { SpotifyExternalUrls } from 'src/interfaces/spotify-external-url.interface';
import { SpotifyTrackLink } from './spotify-track-link.interface';
import { SpotifyRestriction } from 'src/interfaces/spotify-restriction.interface';

export interface SpotifyTrackSimplified {
  artists: SpotifyArtistSimplified[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: SpotifyTrackLink;
  restrictions: SpotifyRestriction;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
