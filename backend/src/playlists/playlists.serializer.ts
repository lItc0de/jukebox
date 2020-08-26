import { Expose, Exclude } from 'class-transformer';
import { SpotifyPaging } from 'src/interfaces/spotify-paging.interface';
import { SpotifyUserPublicSimplified } from 'src/users/interfaces/spotify-user-public.interface';
import { SpotifyPlaylistSimplified } from './interfaces/spotify-playlist-simplified.interface';
import { SpotifyPlaylistTracksSiplified } from './interfaces/spotify-playlist-track.interface';
import { classToPlain } from 'class-transformer';
import { GetPlaylistsDTO } from './dto/get-playlists.dto';

@Exclude()
class Tracks {
  constructor(private tracks: SpotifyPlaylistTracksSiplified) {}

  @Expose()
  get total() {
    return this.tracks.total;
  }
}

@Exclude()
class Owner {
  constructor(private owner: SpotifyUserPublicSimplified) {}

  @Expose()
  get displayName() {
    return this.owner.display_name;
  }

  @Expose()
  get id() {
    return this.owner.id;
  }

  @Expose()
  type = this.owner.type;
}

@Exclude()
class Playlist {
  constructor(private playlist: SpotifyPlaylistSimplified) {}

  @Expose()
  get collaborative() {
    return this.playlist.collaborative;
  }

  @Expose()
  get description() {
    return this.playlist.description;
  }

  @Expose()
  get id() {
    return this.playlist.id;
  }

  @Expose()
  get images() {
    return this.playlist.images;
  }

  @Expose()
  get name() {
    return this.playlist.name;
  }

  @Expose()
  get owner() {
    return new Owner(this.playlist.owner);
  }

  @Expose()
  get public() {
    return this.playlist.public;
  }

  @Expose()
  get tracks() {
    return new Tracks(this.playlist.tracks);
  }

  @Expose()
  get type() {
    return this.playlist.type;
  }
}

@Exclude()
class PlaylistEdge {
  constructor(
    private playlist: SpotifyPlaylistSimplified,
    private offset: number,
  ) {}

  @Expose()
  get node() {
    return new Playlist(this.playlist);
  }

  @Expose()
  get cursor() {
    return Buffer.from(this.offset.toString()).toString('base64');
  }
}

@Exclude()
class PlaylistsSerializer {
  constructor(
    private paginatedPlaylist: SpotifyPaging<SpotifyPlaylistSimplified>,
  ) {}

  @Expose()
  get totalCount() {
    return this.paginatedPlaylist.total;
  }

  @Expose()
  get hasNextPage() {
    return !!this.paginatedPlaylist.next;
  }

  @Expose()
  get edges() {
    return this.paginatedPlaylist.items.map((playlist, i) => {
      const offset = this.paginatedPlaylist.offset + i + 1;
      return new PlaylistEdge(playlist, offset);
    });
  }
}

export const serializeSpotifyPlaylists = (
  paginatedPlaylist: SpotifyPaging<SpotifyPlaylistSimplified>,
): GetPlaylistsDTO => classToPlain(new PlaylistsSerializer(paginatedPlaylist));
