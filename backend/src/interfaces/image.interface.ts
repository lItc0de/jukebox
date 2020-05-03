import { Document } from 'mongoose';

export interface Image extends Document {
  height: number;
  url: string;
  width: number;
}
