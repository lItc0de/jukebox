import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TracksService } from './tracks.service';
import { TrackInput } from './dto/input-track.dto';
import { TrackType } from './dto/track-type.dto';

@Resolver()
export class TracksResolver {
  constructor(private tracksService: TracksService) {}

  // @Query(() => [TrackType])
  // async tracks(): Promise<TrackType[]> {
  //   return this.tracksService.findAll();
  // }

  // @Query(() => TrackType)
  // async track(@Args('id') id: string): Promise<TrackType> {
  //   return this.tracksService.findOneById(id);
  // }

  // @Mutation(() => TrackType)
  // async createTrack(@Args('input') input: TrackInput): Promise<TrackInput> {
  //   return this.tracksService.create(input);
  // }
}
