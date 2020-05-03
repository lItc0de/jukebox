import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TracksService } from './tracks.service';
import { TrackType } from './dto/create-track.dto';
import { TrackInput } from './dto/input-track.dto';

@Resolver()
export class TracksResolver {
  constructor(private tracksService: TracksService) {}

  @Query(() => [TrackType])
  async tracks(): Promise<TrackType[]> {
    return this.tracksService.findAll();
  }

  @Query(() => TrackType)
  async track(@Args('id') id: string): Promise<TrackType> {
    return this.tracksService.findOneById(id);
  }

  @Mutation(() => TrackType)
  async createTrack(@Args('input') input: TrackInput): Promise<TrackInput> {
    return this.tracksService.create(input);
  }
}
