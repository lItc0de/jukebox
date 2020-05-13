import { ObjectType, Field } from '@nestjs/graphql';
import { UserType } from 'src/users/dto/user-type.dto';
import { TrackType } from 'src/tracks/dto/track-type.dto';

@ObjectType()
export class PlaylistTrackType {
  @Field()
  readonly addedAt: string;

  @Field()
  readonly addedBy: UserType;

  @Field()
  readonly track: TrackType;
}
