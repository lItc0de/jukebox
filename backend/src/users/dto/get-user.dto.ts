import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  readonly spotifyId?: string;

  @Field()
  readonly displayName: string;
}
