// import { Document } from 'mongoose';
import { PlaylistDTO } from '../dto/playlist.dto';

export interface Playlist extends PlaylistDTO {
  type: string;
}
