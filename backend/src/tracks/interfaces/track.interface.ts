import { Document } from 'mongoose';
import { Album } from 'src/albums/interfaces/album.interface';
import { ArtistSimplifiedType } from 'src/artists/dto/artist-simplified.dto';

export interface Track extends Document {
  album: Album;
  artists: ArtistSimplifiedType[];
  type: 'track';
}
