import { Document } from 'mongoose';
import { Image } from 'src/interfaces/image.interface';
import { Followers } from 'src/interfaces/followers.interface';

export interface User extends Document {
  country: string;
  displayName: string;
  email: string;
  followers: Followers;
  spotifyId: string;
  images: Image[];
  type: 'user';
}
