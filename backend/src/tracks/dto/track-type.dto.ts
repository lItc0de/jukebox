import { ObjectType, Field, ID } from '@nestjs/graphql';
import { AlbumType } from 'src/albums/dto/album-type.dto';
import { ArtistSimplifiedType } from 'src/artists/dto/artist-simplified.dto';

@ObjectType()
export class TrackType {
  @Field()
  readonly album: AlbumType;

  @Field(() => [ArtistSimplifiedType])
  readonly artists: ArtistSimplifiedType[];

  @Field({ name: 'durationMs' })
  readonly duration_ms: number;

  @Field(() => ID, { name: 'spotifyId' })
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly popularity: number;

  @Field()
  readonly type: string;
}
