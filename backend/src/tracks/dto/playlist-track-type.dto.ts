import { ObjectType, Field } from '@nestjs/graphql';
import { Type, Expose } from 'class-transformer';
import { UserPublicType } from 'src/users/dto/user-type.dto';
import { TrackType } from './track-type.dto';

@ObjectType()
export class PlaylistTrackType {
  constructor(partial: Partial<PlaylistTrackType>) {
    Object.assign(this, partial);
  }

  @Field()
  @Expose({ name: 'addedAt' })
  readonly added_at: string;

  @Field()
  @Type(() => UserPublicType)
  @Expose({ name: 'addedBy' })
  readonly added_by: UserPublicType;

  @Field()
  @Type(() => TrackType)
  readonly track: TrackType;
}
