import { ObjectType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { PlaylistType } from './playlist-type.dto';

@ObjectType()
export class GetPlaylistsType {
  constructor(partial: Partial<GetPlaylistsType>) {
    Object.assign(this, partial);
  }

  @Field(() => [PlaylistType])
  @Type(() => PlaylistType)
  readonly items: PlaylistType[];

  @Field()
  readonly limit: number;

  @Field()
  readonly offset: number;

  @Field()
  readonly total: number;
}
