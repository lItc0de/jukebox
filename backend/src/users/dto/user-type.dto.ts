import { ObjectType, Field, ID } from '@nestjs/graphql';
import { FollowersType } from './followers-type.dto';
import { ImageType } from 'src/dto/image-type.dto';

@ObjectType()
export class UserPublicType {
  @Field()
  readonly displayName: string;

  @Field(() => FollowersType)
  readonly followers: FollowersType;

  @Field(() => ID, { name: 'spotifyId' })
  readonly id: string;

  @Field(() => [ImageType])
  readonly images: ImageType[];

  @Field()
  readonly type: string;
}
