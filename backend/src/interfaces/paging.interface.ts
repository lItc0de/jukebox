import { Document } from 'mongoose';
import { Track } from 'src/tracks/interfaces/track.interface';

export interface Paging extends Document {
  items: Track[];
  limit: number;
  offset: number;
  total: number;
}
