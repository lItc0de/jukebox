import { ObjectType, Field, ID } from '@nestjs/graphql';
import { AlbumDTO } from 'src/albums/dto/album.dto';
import { ArtistSimplifiedDTO } from 'src/artists/dto/artist-simplified.dto';

@ObjectType()
export class TrackDTO {
  @Field()
  readonly album: AlbumDTO;

  @Field(() => [ArtistSimplifiedDTO])
  readonly artists: ArtistSimplifiedDTO[];

  @Field({ name: 'durationMs' })
  readonly duration_ms: number;

  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly popularity: number;

  @Field()
  readonly type: string;
}
