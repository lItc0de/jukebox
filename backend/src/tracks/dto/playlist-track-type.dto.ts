import { ObjectType, Field } from '@nestjs/graphql';
import { UserPublicType } from 'src/users/dto/user-type.dto';
import { TrackType } from './track-type.dto';

@ObjectType()
export class PlaylistTrackType {
  @Field({ name: 'addedAt' })
  readonly added_at: string;

  @Field({ name: 'addedBy' })
  readonly added_by: UserPublicType;

  @Field()
  readonly track: TrackType;
}
