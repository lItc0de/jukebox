import { Document } from 'mongoose';
import { Image } from 'src/interfaces/image.interface';

export interface Artist extends Document {
  genres: string[];
  spotifyId: string;
  images: Image[];
  name: string;
  popularity: number;
  type: 'artist';
}
