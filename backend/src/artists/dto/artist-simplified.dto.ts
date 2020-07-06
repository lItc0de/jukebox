import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ArtistSimplifiedDTO {
  @Field()
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly type: string;
}
