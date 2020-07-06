import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ArtistModel } from './interfaces/artist.interface';


@Injectable()
export class ArtistsService {
  constructor(@InjectModel('Artist') private artistModel: Model<ArtistModel>) {}
}
