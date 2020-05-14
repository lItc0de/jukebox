import { SpotifyExternalUrl } from "src/interfaces/spotify-external-url.interface";
import { SpotifyImage } from "src/interfaces/spotify-image.interface";
import { SpotifyUserPublic } from "src/users/interfaces/spotify-user-public.interface";
import { SpotifyPaging } from "src/interfaces/spotify-paging.interface";
import { SpotifyPlaylistTrack } from "./spotify-playlist-track.interface";

export interface SpotifyPlaylistSimplified {
  collaborative: boolean;
  description: string;
  external_urls: SpotifyExternalUrl[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: SpotifyUserPublic;
  public: boolean;
  snapshot_id: string;
  tracks: SpotifyPaging<SpotifyPlaylistTrack>;
  type: 'playlist';
  uri: string;
}
