import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaylistsService } from './playlists.service';
import { PlaylistsResolver } from './playlists.resolver';
import { PlaylistSchema } from './playlist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Playlist', schema: PlaylistSchema }]),
  ],
  providers: [PlaylistsService, PlaylistsResolver],
})
export class PlaylistsModule {}
