import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Playlist } from './interfaces/playlist.interface';

@Injectable()
export class PlaylistsService {
  constructor(@InjectModel('Playlist') private playlistModel: Model<Playlist>) {}
}
