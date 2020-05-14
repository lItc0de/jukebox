import { ObjectType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { PlaylistTrackType } from 'src/tracks/dto/playlist-track-type.dto';

@ObjectType()
export class PagingType {
  constructor(partial: Partial<PagingType>) {
    Object.assign(this, partial);
  }

  @Field(() => [PlaylistTrackType])
  @Type(() => PlaylistTrackType)
  readonly items: PlaylistTrackType[];

  @Field()
  readonly limit: number;

  @Field()
  readonly offset: number;

  @Field()
  readonly total: number;
}
