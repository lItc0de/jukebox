import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ImageType {
  constructor(partial: Partial<ImageType>) {
    Object.assign(this, partial);
  }

  @Field()
  readonly height: number;

  @Field()
  readonly url: string;

  @Field()
  readonly width: number;
}
