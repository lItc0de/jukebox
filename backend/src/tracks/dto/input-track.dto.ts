import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TrackInput {
  @Field()
  readonly name: string;
}
