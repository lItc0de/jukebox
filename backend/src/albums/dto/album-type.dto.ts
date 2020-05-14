import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Type, Expose } from 'class-transformer';
import { ImageType } from 'src/dto/image-type.dto';
import { ArtistSimplifiedType } from 'src/artists/dto/artist-simplified.dto';

@ObjectType()
export class AlbumType {
  constructor(partial: Partial<AlbumType>) {
    Object.assign(this, partial);
  }

  @Field(() => [ArtistSimplifiedType])
  @Type(() => ArtistSimplifiedType)
  readonly artists: ArtistSimplifiedType[];

  @Field(() => ID)
  @Expose({ name: 'spotifyId' })
  readonly id: string;

  @Field(() => [ImageType])
  readonly images: ImageType[];

  @Field()
  readonly name: string;

  @Field()
  readonly type: string;
}
