import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TracksService } from './tracks.service';
import { Track } from './interfaces/track.interface';

describe('TracksService', () => {
  const trackModel: Track = {
    _id: '1',
    name: 'TestTrack',
  } as Track;

  let service: TracksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TracksService,
        {
          provide: getModelToken('Track'),
          useValue: trackModel
        }
      ],
    }).compile();

    service = module.get<TracksService>(TracksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('findOneById', async () => {
  //   expect(await service.findOneById(trackModel._id)).toEqual(trackModel);
  // });
});
