import { Document } from 'mongoose';
import { FollowersType } from 'src/users/dto/followers-type.dto';

export interface Followers extends FollowersType, Document {}
