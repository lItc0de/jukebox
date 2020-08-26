import { serializeSpotifyPlaylists } from './playlists.serializer';

import spotifyPlaylists from '../../test/data/spotify/playlists.json';
import paginatedPlaylists from '../../test/data/paginatedPlaylists.json';

describe('Playlists Serializer', () => {
  it('should create the correct json from the PlaylistsSerializer object', () => {
    const serializedPlaylists = serializeSpotifyPlaylists(spotifyPlaylists);

    expect(serializedPlaylists).toEqual(paginatedPlaylists);
  });

  it('should calculate the cursor based on the offset and the index of an entry', () => {
    const playlistsWithOffset = {
      ...spotifyPlaylists,
      offset: 10,
    }

    const serializedPlaylists = serializeSpotifyPlaylists(playlistsWithOffset);

    expect(serializedPlaylists.edges[0].cursor).toEqual(Buffer.from('11').toString('base64'));
  });
});
