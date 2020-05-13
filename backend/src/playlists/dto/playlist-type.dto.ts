import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserType } from 'src/users/dto/user-type.dto';
import { FollowersType } from 'src/users/dto/followers-type.dto';
import { ImageType } from 'src/dto/image-type.dto';
import { PagingType } from 'src/dto/paging-type.dto';

@ObjectType()
export class PlaylistType {
  @Field()
  readonly collaborative: boolean;

  @Field()
  readonly description: string;

  @Field()
  readonly followers: FollowersType;

  @Field(() => ID)
  readonly spotifyId: string;

  @Field()
  readonly images: ImageType[];

  @Field()
  readonly name: string;

  @Field()
  readonly owner: UserType;

  @Field()
  readonly public: boolean | null;

  @Field()
  readonly tracks: PagingType;

  @Field()
  readonly type: string;
}
