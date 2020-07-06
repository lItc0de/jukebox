import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TrackInputDTO {
  @Field()
  readonly name: string;
}
