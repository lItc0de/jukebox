import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumSchema } from './album.schema';
import { AlbumsService } from './albums.service';
import { AlbumsResolver } from './albums.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Album', schema: AlbumSchema }]),
  ],
  providers: [AlbumsService, AlbumsResolver],
})
export class AlbumsModule {}
