import { ObjectType, Field } from '@nestjs/graphql';
import { ImageType } from 'src/dto/image-type.dto';

@ObjectType()
export class ArtistType {
  @Field(() => [String])
  readonly genres: string[];

  @Field()
  readonly spotifyId: string;

  @Field(() => [ImageType])
  readonly images: ImageType[];

  @Field()
  readonly name: string;

  @Field()
  readonly popularity: number;

  @Field()
  readonly type: string;
}
