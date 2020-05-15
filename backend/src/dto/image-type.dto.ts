import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ImageType {
  @Field()
  readonly height: number;

  @Field()
  readonly url: string;

  @Field()
  readonly width: number;
}
