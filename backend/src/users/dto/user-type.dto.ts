import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Expose, Type } from 'class-transformer';
import { FollowersType } from './followers-type.dto';
import { ImageType } from 'src/dto/image-type.dto';

@ObjectType()
export class UserPublicType {
  constructor(partial: Partial<UserPublicType>) {
    Object.assign(this, partial);
  }

  @Field()
  @Expose({ name: 'displayName' })
  readonly display_name: string;

  @Field(() => FollowersType)
  @Type(() => FollowersType)
  readonly followers: FollowersType;

  @Field(() => ID)
  @Expose({ name: 'spotifyId' })
  readonly id: string;

  @Field(() => [ImageType])
  @Type(() => ImageType)
  readonly images: ImageType[];

  @Field()
  readonly type: string;
}
