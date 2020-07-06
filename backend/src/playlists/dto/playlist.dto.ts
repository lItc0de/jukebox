import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserPublicDTO } from 'src/users/dto/user.dto';
// import { FollowersType } from 'src/users/dto/followers-type.dto';
import { ImageDTO } from 'src/dto/image.dto';
import { Paginated } from 'src/dto/paging.dto';

@ObjectType()
class TracksDTO {
  @Field()
  readonly total: number;
}

@ObjectType()
export class PlaylistDTO {
  @Field()
  readonly collaborative: boolean;

  @Field(() => String, { nullable: true })
  readonly description: string;

  // @Field(() => FollowersType)
  // readonly followers: FollowersType;

  @Field(() => ID, { name: 'spotifyId' })
  readonly id: string;

  @Field(() => [ImageDTO])
  readonly images: ImageDTO[];

  @Field()
  readonly name: string;

  @Field(() => UserPublicDTO)
  readonly owner: UserPublicDTO;

  @Field()
  readonly public: boolean | null;

  @Field(() => TracksDTO)
  readonly tracks: TracksDTO;

  @Field()
  readonly type: string;
}

@ObjectType()
export class PaginatedPlaylistDTO extends Paginated(PlaylistDTO) {}
