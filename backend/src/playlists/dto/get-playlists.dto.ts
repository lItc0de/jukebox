import { ObjectType } from '@nestjs/graphql';
import { PaginatedPlaylistDTO } from './playlist.dto';

@ObjectType()
export class GetPlaylistsDTO extends PaginatedPlaylistDTO {}
