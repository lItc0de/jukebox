import { Document } from 'mongoose';
import { ArtistType } from '../dto/artist-type.dto';

export interface Artist extends ArtistType, Document {
  type: 'artist';
}
