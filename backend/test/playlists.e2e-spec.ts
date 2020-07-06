import request from 'supertest';
import { TestingModule } from '@nestjs/testing';
import nock from 'nock';

import { PlaylistsModule } from 'src/playlists/playlists.module';
import spotifyPlaylists from './data/spotify/playlists.json';
import paginatedPlaylists from './data/paginatedPlaylists.json';
import { createTestingModule, login } from './helpers/testing.module';

nock('https://api.spotify.com')
  .get('/v1/users/test_id/playlists?limit=3&offset=0')
  .reply(200, spotifyPlaylists);

describe('Playlists (e2e)', () => {
  let app;
  let jwtToken;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await createTestingModule({
      imports: [PlaylistsModule]
    });
    app = moduleFixture.createNestApplication();
    await app.init();

    jwtToken = (await login(app)).body.accessToken;
  });

  afterAll(async () => {
    await app.close();
  });

  const playlistsQuery = `
    query playlists {
      playlists(cursor: "", first: 3) {
        edges {
          cursor
          node {
            collaborative
            description
            name
            images {
              url
              height
              width
            }
            owner {
              displayName
              id
              type
            }
            tracks {
              total
            }
            public
            id
            type
          }
        }
        hasNextPage
        totalCount
      }
    }
  `;

  it('should return playlists', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Authorization', `Bearer ${jwtToken}`)
      .send({
        operationName: null,
        query: playlistsQuery,
      })
      .expect(({ body }) => {
        expect(body.errors).toBeUndefined();
        const data = body.data.playlists;
        expect(data).toEqual(paginatedPlaylists);
      })
      .expect(200);
  });
});
