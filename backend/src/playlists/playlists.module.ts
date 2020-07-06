import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PlaylistsService } from './playlists.service';
import { PlaylistsResolver } from './playlists.resolver';
import { PlaylistSchema } from './playlist.schema';

import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Playlist', schema: PlaylistSchema }]),
    HttpModule,
    UsersModule
  ],
  providers: [PlaylistsService, PlaylistsResolver],
})
export class PlaylistsModule {}
