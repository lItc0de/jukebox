import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrackType } from './dto/create-track.dto';
import { Track } from './interfaces/track.interface';
import { TrackInput } from './dto/input-track.dto';

@Injectable()
export class TracksService {
  constructor(@InjectModel('Track') private trackModel: Model<Track>) {}

  async findAll(): Promise<TrackType[]> {
    return await this.trackModel.find().exec();
  }

  async findOneById(id: string): Promise<TrackType> {
    return this.trackModel.findOne({ _id: id });
  }

  async create(createTrackDto: TrackInput): Promise<TrackType> {
    const createdTrack = new this.trackModel(createTrackDto);
    return await createdTrack.save();
  }
}
