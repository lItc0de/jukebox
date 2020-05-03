import { Resolver } from '@nestjs/graphql';
import { ArtistsService } from './artists.service';

@Resolver()
export class ArtistsResolver {
  constructor(private artistsService: ArtistsService) {}
}
