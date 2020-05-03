import { Resolver } from '@nestjs/graphql';
import { AlbumsService } from './albums.service';

@Resolver()
export class AlbumsResolver {
  constructor(private albumsService: AlbumsService) {}
}
