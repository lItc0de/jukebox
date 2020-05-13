import { Document } from 'mongoose';
import { UserType } from '../dto/user-type.dto';

export interface User extends UserType, Document {
  type: 'user';
  accessToken: string;
  refreshToken: string;
}
