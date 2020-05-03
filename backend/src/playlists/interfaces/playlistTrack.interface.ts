import { Document } from 'mongoose';
import { Track } from 'src/tracks/interfaces/track.interface';
import { User } from 'src/users/interfaces/user.interface';

export interface PlaylistTrack extends Document {
  addedAt: string;
  addedBy: User;
  track: Track;
}
