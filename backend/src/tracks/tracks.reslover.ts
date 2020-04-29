import { Resolver, Query, Args, Int } from "@nestjs/graphql";
import { Track } from "./track.model";
import { TracksService } from "./tracks.service";

@Resolver(of => Track)
export class TracksResolver {
  constructor(
    private tracksService: TracksService,
  ) {}

  @Query(returns => Track)
  async track(@Args('id', { type: () => Int }) id: number) {
    return this.tracksService.findOneById(id);
  }
}