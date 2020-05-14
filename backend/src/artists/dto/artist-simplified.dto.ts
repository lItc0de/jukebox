import { ObjectType, Field } from '@nestjs/graphql';
import { Expose } from 'class-transformer';

@ObjectType()
export class ArtistSimplifiedType {
  constructor(partial: Partial<ArtistSimplifiedType>) {
    Object.assign(this, partial);
  }

  @Field()
  @Expose({ name: 'spotifyId' })
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly type: string;
}
