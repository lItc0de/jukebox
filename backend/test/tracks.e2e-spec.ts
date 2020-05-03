import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { TracksModule } from '../src/tracks/tracks.module';
import { Track } from '../src/tracks/interfaces/track.interface';

describe('TracksController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TracksModule,
        MongooseModule.forRoot('mongodb://localhost/nestgraphqltesting'),
        GraphQLModule.forRoot({
          autoSchemaFile: 'src/schema.gql',
        }),
      ],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  const track: Track = {
    name: 'TestTrack',
  } as Track;

  // const updatedTrack: Track = {
  //   name: 'TestTrackUpdated',
  // } as Track;

  const createTrackObject = JSON.stringify(track).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );

  let trackId: string;

  const createTrackQuery = `
  mutation {
    createTrack(input: ${createTrackObject}) {
      _id
      name
    }
  }`;

  const tracksQuery = `
  query {
    tracks {
      name
    }
  }`;


  const trackQuery = id => `
  query {
    track(id: "${id}") {
      name
    }
  }`;

  it('createTrack', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: createTrackQuery,
      })
      .expect(({ body }) => {
        const data = body.data.createTrack;
        trackId = data._id;
        expect(data.name).toBe(track.name);
      })
      .expect(200);
  });

  it('tracks', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: tracksQuery,
      })
      .expect(({ body }) => {
        const data = body.data.tracks[0];
        expect(data.name).toBe(track.name);
      })
      .expect(200);
  });

  it('track', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: trackQuery(trackId),
      })
      .expect(({ body }) => {
        const data = body.data.track;
        expect(data.name).toBe(track.name);
      })
      .expect(200);
  });
});
