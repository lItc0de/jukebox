import { Document } from 'mongoose';

export interface User extends Document {
  type: 'user';
  spotifyId: string;
  displayName: string;
  accessToken: string;
  refreshToken: string;
}
