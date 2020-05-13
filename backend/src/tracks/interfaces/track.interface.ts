import { Document } from 'mongoose';
import { TrackType } from '../dto/track-type.dto';

export interface Track extends TrackType, Document {
  type: 'track';
}
