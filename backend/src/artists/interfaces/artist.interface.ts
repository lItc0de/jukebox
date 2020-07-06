import { ArtistDTO } from '../dto/artist.dto';
import { Document } from 'mongoose';

export interface Artist extends ArtistDTO {
  type: string;
}

export interface ArtistModel extends Artist, Document {
  id: string;
}