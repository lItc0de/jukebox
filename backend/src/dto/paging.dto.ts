import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

export function Paginated<T>(classRef: Type<T>): any {
  @ObjectType(`${classRef.name}Edge`)
  abstract class EdgeDTO {
    @Field(() => String)
    cursor: string;

    @Field(() => classRef)
    node: T;
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedDTO {
    @Field(() => [EdgeDTO], { nullable: true })
    edges: EdgeDTO[];

    @Field(() => Int)
    totalCount: number;

    @Field()
    hasNextPage: boolean;
  }

  return PaginatedDTO;
}
