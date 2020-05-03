import { Document } from 'mongoose';
import { User } from 'src/users/interfaces/user.interface';

export interface Followers extends Document {
  users: User[];
  total: number;
}
