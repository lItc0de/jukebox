import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ArtistType } from 'src/artists/dto/artist-type.dto';
import { PagingType } from 'src/dto/paging-type.dto';
import { ImageType } from 'src/dto/image-type.dto';

@ObjectType()
export class AlbumType {
  @Field()
  readonly artist: ArtistType;

  @Field(() => [String])
  readonly genres: string[];

  @Field(() => ID)
  readonly spotifyId: string;

  @Field(() => [ImageType])
  readonly images: ImageType[];

  @Field()
  readonly label: string;

  @Field()
  readonly name: string;

  @Field()
  readonly popularity: number;

  @Field()
  readonly tracks: PagingType;

  @Field()
  readonly type: string;
}
