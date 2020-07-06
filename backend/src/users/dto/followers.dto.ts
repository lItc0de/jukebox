import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class FollowersDTO {
  @Field()
  readonly total: number;
}
