import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ImageType } from 'src/dto/image-type.dto';
import { ArtistSimplifiedType } from 'src/artists/dto/artist-simplified.dto';

@ObjectType()
export class AlbumType {
  @Field(() => [ArtistSimplifiedType])
  readonly artists: ArtistSimplifiedType[];

  @Field(() => ID, { name: 'spotifyId' })
  readonly id: string;

  @Field(() => [ImageType])
  readonly images: ImageType[];

  @Field()
  readonly name: string;

  @Field()
  readonly type: string;
}
