import { Query, Resolver, Args, Int } from '@nestjs/graphql';
import { PlaylistsService } from './playlists.service';
import { UseGuards } from '@nestjs/common';
import { GetPlaylistsDTO } from './dto/get-playlists.dto';
import { GqlAuthGuard } from 'src/auth/gql-jwt.guard';
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { serializeSpotifyPlaylists } from './playlists.serializer';

@Resolver()
export class PlaylistsResolver {
  constructor(private playlistsService: PlaylistsService) {}

  @Query(() => GetPlaylistsDTO)
  @UseGuards(GqlAuthGuard)
  async playlists(
    @CurrentUser() user,
    @Args('first', { type: () => Int }) first: number,
    @Args('cursor', { type: () => String, nullable: true }) cursor: string,
  ): Promise<GetPlaylistsDTO> {
    const res = await this.playlistsService.getPlaylists(
      user.displayName,
      first,
      cursor,
    );

    return serializeSpotifyPlaylists(res);
  }
}
