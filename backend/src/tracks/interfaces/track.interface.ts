import { Document } from 'mongoose';
import { Album } from 'src/albums/interfaces/album.interface';
import { ArtistSimplifiedDTO } from 'src/artists/dto/artist-simplified.dto';

export interface Track extends Document {
  album: Album;
  artists: ArtistSimplifiedDTO[];
  type: string;
}
