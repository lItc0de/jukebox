import { Injectable } from '@nestjs/common';
import { Track } from './track.model';

@Injectable()
export class TracksService {
  private readonly tracks: Track[] = [];

  create(track: Track) {
    this.tracks.push(track);
  }

  findAll(): Track[] {
    return this.tracks;
  }

  findOneById(id: number): Track {
    return this.tracks.find((track) => track.id === id);
  }
}
