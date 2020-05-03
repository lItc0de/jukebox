import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistSchema } from './artist.schema';
import { ArtistsService } from './artists.service';
import { ArtistsResolver } from './artists.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Artist', schema: ArtistSchema }]),
  ],
  providers: [ArtistsService, ArtistsResolver],
})
export class ArtistsModule {}
