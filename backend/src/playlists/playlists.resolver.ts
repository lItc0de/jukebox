import { Query, Resolver } from '@nestjs/graphql';
import { PlaylistsService } from './playlists.service';
import { UseGuards } from '@nestjs/common';
import { GetPlaylistsType } from './dto/get-playlists.dto';
import { GqlAuthGuard } from 'src/auth/gql-jwt.guard';
import { CurrentUser } from 'src/decorators/currentUser.decorator';

@Resolver()
export class PlaylistsResolver {
  constructor(private playlistsService: PlaylistsService) {}

  @Query(() => GetPlaylistsType)
  @UseGuards(GqlAuthGuard)
  async playlists(@CurrentUser() user): Promise<GetPlaylistsType> {
    const response = await this.playlistsService.getPlaylists(user.displayName)
    return new GetPlaylistsType(response);
  }
}
