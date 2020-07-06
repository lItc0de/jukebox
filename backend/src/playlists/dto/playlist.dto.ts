import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserPublicType } from 'src/users/dto/user-type.dto';
// import { FollowersType } from 'src/users/dto/followers-type.dto';
import { ImageType } from 'src/dto/image-type.dto';
import { Paginated } from 'src/dto/paging-type.dto';

@ObjectType()
class TracksType {
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

  @Field(() => [ImageType])
  readonly images: ImageType[];

  @Field()
  readonly name: string;

  @Field(() => UserPublicType)
  readonly owner: UserPublicType;

  @Field()
  readonly public: boolean | null;

  @Field(() => TracksType)
  readonly tracks: TracksType;

  @Field()
  readonly type: string;
}

@ObjectType()
export class PaginatedPlaylistDTO extends Paginated(PlaylistDTO) {}
