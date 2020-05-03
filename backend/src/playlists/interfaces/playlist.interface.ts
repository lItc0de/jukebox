import { Document } from 'mongoose';
import { Image } from 'src/interfaces/image.interface';
import { Paging } from 'src/interfaces/paging.interface';
import { Followers } from 'src/interfaces/followers.interface';
import { User } from 'src/users/interfaces/user.interface';

export interface Playlist extends Document {
  collaborative: boolean;
  description: string;
  followers: Followers;
  spotifyId: string;
  images: Image[];
  name: string;
  owner: User;
  public: boolean | null;
  tracks: Paging;
  type: 'playlist';
}
