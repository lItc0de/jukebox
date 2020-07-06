import { Document } from 'mongoose';

export interface User {
  type?: string;
  spotifyId: string;
  displayName: string;
  accessToken: string;
  refreshToken?: string;
}

export interface UserModel extends User, Document {}
