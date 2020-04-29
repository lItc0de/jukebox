import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Track {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

}