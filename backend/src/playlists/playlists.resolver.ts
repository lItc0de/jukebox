import { Resolver } from '@nestjs/graphql';
import { PlaylistsService } from './playlists.service';

@Resolver()
export class PlaylistsResolver {
  constructor(private playlistsService: PlaylistsService) {}
}
