import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TracksService } from './tracks.service';
import { TracksResolver } from './tracks.reslover';
import { TrackSchema } from './track.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Track', schema: TrackSchema }]),
  ],
  providers: [TracksService, TracksResolver],
})
export class TracksModule {}
