import { Module } from '@nestjs/common';
import { TracksService } from "./tracks.service";
import { TracksResolver } from './tracks.reslover'

@Module({
  imports: [],
  providers: [TracksService, TracksResolver],
})
export class TracksModule {}