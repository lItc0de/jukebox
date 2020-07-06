import { SpotifyExternalUrls } from "src/interfaces/spotify-external-url.interface";
import { SpotifyImage } from "src/interfaces/spotify-image.interface";
import { SpotifyUserPublicSimplified } from "src/users/interfaces/spotify-user-public.interface";
import { SpotifyPlaylistTracksSiplified } from "./spotify-playlist-track.interface";

export interface SpotifyPlaylistSimplified {
  collaborative: boolean;
  description: string;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: SpotifyUserPublicSimplified;
  public: boolean;
  snapshot_id: string;
  tracks: SpotifyPlaylistTracksSiplified;
  type: string;
  uri: string;
}
