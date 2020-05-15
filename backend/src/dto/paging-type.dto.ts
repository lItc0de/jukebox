import { ObjectType, Field } from '@nestjs/graphql';
import { PlaylistTrackType } from 'src/tracks/dto/playlist-track-type.dto';

@ObjectType()
export class PagingType {
  @Field(() => [PlaylistTrackType])
  readonly items: PlaylistTrackType[];

  @Field()
  readonly limit: number;

  @Field()
  readonly offset: number;

  @Field()
  readonly total: number;
}
