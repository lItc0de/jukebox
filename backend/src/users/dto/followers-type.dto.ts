import { ObjectType, Field } from '@nestjs/graphql';
import { UserType } from './user-type.dto';

@ObjectType()
export class FollowersType {
  @Field()
  readonly users: UserType[];

  @Field()
  readonly total: number;
}