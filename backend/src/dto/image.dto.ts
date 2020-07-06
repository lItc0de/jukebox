import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ImageDTO {
  @Field()
  readonly height: number;

  @Field()
  readonly url: string;

  @Field()
  readonly width: number;
}
