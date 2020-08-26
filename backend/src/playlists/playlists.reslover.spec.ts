import { Test, TestingModule } from '@nestjs/testing';
import { User } from 'src/users/interfaces/user.interface';

import { PlaylistsResolver } from './playlists.resolver';
import { PlaylistsService } from './playlists.service';

import spotifyPlaylists from '../../test/data/spotify/playlists.json';
import paginatedPlaylists from '../../test/data/paginatedPlaylists.json';

const user: User = {
  type: 'user',
  spotifyId: '123456',
  displayName: 'test-user',
  accessToken: 'access_token',
};

describe('PlaylistsReslover', () => {
  let resolver: PlaylistsResolver;
  let service: PlaylistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlaylistsResolver,
        {
          provide: PlaylistsService,
          useFactory: () => ({
            getPlaylists: jest.fn(() => spotifyPlaylists),
          }),
        },
      ],
    }).compile();

    resolver = module.get<PlaylistsResolver>(PlaylistsResolver);
    service = module.get<PlaylistsService>(PlaylistsService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getPlaylists', () => {
    it('should get the playlists array', async () => {
      expect(await resolver.playlists(user, 3, '')).toEqual(paginatedPlaylists);
      expect(service.getPlaylists).toHaveBeenCalledWith(
        user.displayName,
        3,
        '',
      );
    });
  });
});
