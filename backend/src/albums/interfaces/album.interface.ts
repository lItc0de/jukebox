import { Document } from 'mongoose';
import { Artist } from 'src/artists/interfaces/artist.interface';
import { Paging } from 'src/interfaces/paging.interface';
import { Image } from 'src/interfaces/image.interface';

export interface Album extends Document {
  artists: Artist[];
  genres: string[];
  spotifyId: string;
  images: Image[];
  label: string;
  name: string;
  popularity: number;
  tracks: Paging;
  type: 'album';
}
