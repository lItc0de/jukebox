import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Type, Expose } from 'class-transformer';
import { AlbumType } from 'src/albums/dto/album-type.dto';
import { ArtistSimplifiedType } from 'src/artists/dto/artist-simplified.dto';

@ObjectType()
export class TrackType {
  constructor(partial: Partial<TrackType>) {
    Object.assign(this, partial);
  }

  @Field()
  @Type(() => AlbumType)
  readonly album: AlbumType;

  @Field(() => [ArtistSimplifiedType])
  @Type(() => ArtistSimplifiedType)
  readonly artists: ArtistSimplifiedType[];

  @Field()
  @Expose({ name: 'durationMs' })
  readonly duration_ms: number;

  @Field(() => ID)
  @Expose({ name: 'spotifyId' })
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly popularity: number;

  @Field()
  readonly type: string;
}
