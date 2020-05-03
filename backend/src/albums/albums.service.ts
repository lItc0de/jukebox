import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album } from './interfaces/album.interface';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel('Album') private albumsModel: Model<Album>) {}
}
