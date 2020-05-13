import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ArtistType } from 'src/artists/dto/artist-type.dto';
import { PagingType } from 'src/dto/paging-type.dto';

@ObjectType()
export class AlbumType {
  @Field()
  readonly artist: ArtistType;

  @Field()
  readonly genres: string[];

  @Field(() => ID)
  readonly spotifyId: string;

  @Field()
  readonly images: string[];

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
