import { ObjectType, Field } from '@nestjs/graphql';
import { UserPublicDTO as UserPublicDTO } from 'src/users/dto/user.dto';
import { TrackDTO } from './track.dto';

@ObjectType()
export class PlaylistTrackDTO {
  @Field({ name: 'addedAt' })
  readonly added_at: string;

  @Field({ name: 'addedBy' })
  readonly added_by: UserPublicDTO;

  @Field()
  readonly track: TrackDTO;
}
