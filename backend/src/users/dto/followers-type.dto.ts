import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class FollowersType {
  constructor(partial: Partial<FollowersType>) {
    Object.assign(this, partial);
  }

  @Field()
  readonly total: number;
}
