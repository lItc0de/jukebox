import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Expose, Type } from 'class-transformer';
import { UserPublicType } from 'src/users/dto/user-type.dto';
// import { FollowersType } from 'src/users/dto/followers-type.dto';
import { ImageType } from 'src/dto/image-type.dto';
import { PagingType } from 'src/dto/paging-type.dto';

@ObjectType()
export class PlaylistType {
  constructor(partial: Partial<PlaylistType>) {
    Object.assign(this, partial);
  }

  @Field()
  readonly collaborative: boolean;

  @Field()
  readonly description: string;

  // @Field(() => FollowersType)
  // readonly followers: FollowersType;

  @Field(() => ID)
  @Expose({ name: 'spotifyId' })
  readonly id: string;

  @Field(() => [ImageType])
  @Type(() => ImageType)
  readonly images: ImageType[];

  @Field()
  readonly name: string;

  @Field(() => UserPublicType)
  @Type(() => UserPublicType)
  readonly owner: UserPublicType;

  @Field()
  readonly public: boolean | null;

  @Field(() => PagingType)
  @Type(() => PagingType)
  readonly tracks: PagingType;

  @Field()
  readonly type: string;
}
