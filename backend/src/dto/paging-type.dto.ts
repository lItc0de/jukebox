import { ObjectType, Field } from '@nestjs/graphql';
import { TrackType } from 'src/tracks/dto/track-type.dto';

@ObjectType()
export class PagingType {
  @Field(() => [TrackType])
  readonly items: TrackType[];

  @Field()
  readonly limit: number;

  @Field()
  readonly offset: number;

  @Field()
  readonly total: number;
}
