import { ObjectType, Field } from '@nestjs/graphql';
import { PlaylistType } from './playlist-type.dto';

@ObjectType()
export class GetPlaylistsType {
  @Field(() => [PlaylistType])
  readonly items: PlaylistType[];

  @Field()
  readonly limit: number;

  @Field()
  readonly offset: number;

  @Field()
  readonly total: number;
}
