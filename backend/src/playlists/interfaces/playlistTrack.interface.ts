import { Document } from 'mongoose';
import { PlaylistTrackDTO } from '../dto/playlist-track.dto';

export interface PlaylistTrack extends PlaylistTrackDTO, Document {}
