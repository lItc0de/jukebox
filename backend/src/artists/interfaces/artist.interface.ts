import { Document } from 'mongoose';
import { ArtistDTO } from '../dto/artist.dto';

export interface Artist extends ArtistDTO, Document {
  type: string;
}
