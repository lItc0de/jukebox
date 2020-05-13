import { Document } from 'mongoose';
import { AlbumType } from '../dto/album-type.dto';

export interface Album extends AlbumType, Document {
  type: 'album';
}
