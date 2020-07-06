import { ObjectType, Field, ID } from '@nestjs/graphql';
import { FollowersDTO } from './followers.dto';
import { ImageDTO } from 'src/dto/image.dto';

@ObjectType()
export class UserPublicDTO {
  @Field()
  readonly displayName: string;

  @Field(() => FollowersDTO)
  readonly followers: FollowersDTO;

  @Field(() => ID)
  readonly id: string;

  @Field(() => [ImageDTO])
  readonly images: ImageDTO[];

  @Field()
  readonly type: string;
}
