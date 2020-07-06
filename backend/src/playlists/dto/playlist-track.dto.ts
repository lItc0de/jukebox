import { ObjectType, Field } from '@nestjs/graphql';
import { UserPublicDTO } from 'src/users/dto/user.dto';
import { TrackDTO } from 'src/tracks/dto/track.dto';

@ObjectType()
export class PlaylistTrackDTO {
  @Field()
  readonly addedAt: string;

  @Field()
  readonly addedBy: UserPublicDTO;

  @Field()
  readonly track: TrackDTO;
}
