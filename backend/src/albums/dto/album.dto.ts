import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ImageDTO } from 'src/dto/image.dto';
import { ArtistSimplifiedDTO } from 'src/artists/dto/artist-simplified.dto';

@ObjectType()
export class AlbumDTO {
  @Field(() => [ArtistSimplifiedDTO])
  readonly artists: ArtistSimplifiedDTO[];

  @Field(() => ID)
  readonly id: string;

  @Field(() => [ImageDTO])
  readonly images: ImageDTO[];

  @Field()
  readonly name: string;

  @Field()
  readonly type: string;
}
