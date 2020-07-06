import { Document } from 'mongoose';
import { FollowersDTO } from 'src/users/dto/followers.dto';

export interface Followers extends FollowersDTO, Document {}
