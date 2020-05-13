import { ObjectType, Field, ID } from '@nestjs/graphql';
import { FollowersType } from './followers-type.dto';
import { ImageType } from 'src/dto/image-type.dto';

@ObjectType()
export class UserType {
  @Field()
  readonly country: string;

  @Field()
  readonly displayName: string;

  @Field()
  readonly email: string;

  @Field()
  readonly followers: FollowersType;

  @Field(() => ID)
  readonly spotifyId: string;

  @Field()
  readonly images: ImageType[];

  @Field()
  readonly type: string;
}
