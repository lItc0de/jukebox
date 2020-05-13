import { ObjectType, Field, ID } from '@nestjs/graphql';
import { AlbumType } from 'src/albums/dto/album-type.dto';
import { ArtistType } from 'src/artists/dto/artist-type.dto';

@ObjectType()
export class TrackType {
  @Field()
  readonly album: AlbumType;

  @Field(() => [ArtistType])
  readonly artists: ArtistType[];

  @Field()
  readonly durationMs: number;

  @Field(() => ID)
  readonly spotifyId: string;

  @Field()
  readonly name: string;

  @Field()
  readonly popularity: number;

  @Field()
  readonly type: string;
}
