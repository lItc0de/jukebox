import { Document } from 'mongoose';

export interface User extends Document {
  type: string;
  spotifyId: string;
  displayName: string;
  accessToken: string;
  refreshToken: string;
}
