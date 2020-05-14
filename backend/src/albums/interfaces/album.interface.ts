import { Document } from 'mongoose';

export interface Album extends Document {
  type: 'album';
}
