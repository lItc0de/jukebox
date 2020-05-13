import { Document } from 'mongoose';
import { PlaylistType } from '../dto/playlist-type.dto';

export interface Playlist extends PlaylistType, Document {
  type: 'playlist';
}
