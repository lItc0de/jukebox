import { ObjectType, Field, ID } from '@nestjs/graphql';
// import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@ObjectType()
export class TrackType {
  @Field(() => ID)
  // @IsString()
  readonly _id?: string;
  @Field()
  // @IsString()
  // @IsNotEmpty()
  readonly name: string;
}