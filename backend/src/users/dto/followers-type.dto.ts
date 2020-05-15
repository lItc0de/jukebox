import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class FollowersType {
  @Field()
  readonly total: number;
}
