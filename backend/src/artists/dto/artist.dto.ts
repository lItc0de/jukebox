import { ObjectType, Field } from '@nestjs/graphql';
import { ImageDTO } from 'src/dto/image.dto';

@ObjectType()
export class ArtistDTO {
  @Field(() => [String])
  readonly genres: string[];

  @Field()
  readonly id: string;

  @Field(() => [ImageDTO])
  readonly images: ImageDTO[];

  @Field()
  readonly name: string;

  @Field()
  readonly popularity: number;

  @Field()
  readonly type: string;
}
