import { Document } from 'mongoose';
import { Album } from 'src/albums/interfaces/album.interface';
import { Artist } from 'src/artists/interfaces/artist.interface';

export interface Track extends Document {
  album: Album;
  artists: Artist[];
  durationMs: number;
  spotifyId: string;
  name: string;
  popularity: number;
  type: 'track';
}
