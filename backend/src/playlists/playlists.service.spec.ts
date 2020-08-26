import { HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PlaylistsService } from './playlists.service';

import spotifyPlaylists from '../../test/data/spotify/playlists.json';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/interfaces/user.interface';
import { of } from 'rxjs';

const user: User = {
  type: 'user',
  spotifyId: '123456',
  displayName: 'test-user',
  accessToken: 'access_token',
};

const spotifyResponse = {
  data: spotifyPlaylists,
};

describe('CatService', () => {
  let service: PlaylistsService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlaylistsService,
        {
          provide: UsersService,
          useFactory: () => ({
            findUserByDisplayName: jest.fn(() => user),
          }),
        },
        {
          provide: HttpService,
          useFactory: () => ({
            get: jest.fn(() => of(spotifyResponse)),
          }),
        },
      ],
    }).compile();

    service = module.get<PlaylistsService>(PlaylistsService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPlaylists', () => {
    it('should return an array of playlists', async () => {
      expect(await service.getPlaylists(user.displayName, 3, '')).toEqual(
        spotifyPlaylists,
      );
      expect(httpService.get).toHaveBeenCalledWith(
        `https://api.spotify.com/v1/users/${user.spotifyId}/playlists`,
        {
          headers: { Authorization: `Bearer ${user.accessToken}` },
          params: { limit: 3, offset: 0 },
        },
      );
    });

    describe('pagination', () => {
      it('should call the api with the correct pagination parameters', async () => {
        const cursor = Buffer.from('20').toString('base64');
        await service.getPlaylists(user.displayName, 10, cursor);

        expect(httpService.get).toHaveBeenCalledWith(
          `https://api.spotify.com/v1/users/${user.spotifyId}/playlists`,
          {
            headers: { Authorization: `Bearer ${user.accessToken}` },
            params: { limit: 10, offset: 20 },
          },
        );
      });
    });
  });
});
