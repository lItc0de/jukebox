import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ImageDTO {
  @Field({ nullable: true })
  readonly height: number;

  @Field()
  readonly url: string;

  @Field({ nullable: true })
  readonly width: number;
}
