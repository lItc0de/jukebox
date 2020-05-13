import { Document } from 'mongoose';
import { PlaylistTrackType } from '../dto/playlist-track-type.dto';

export interface PlaylistTrack extends PlaylistTrackType, Document {}
