import { serializeSpotifyPlaylists } from './playlists.serializer';

import spotifyPlaylists from '../../test/data/spotify/playlists.json';
import paginatedPlaylists from '../../test/data/paginatedPlaylists.json';

describe('Playlists Serializer', () => {
  it('should create the correct json from the PlaylistsSerializer object', () => {

    const serializedPlaylists = serializeSpotifyPlaylists(spotifyPlaylists);

    expect(serializedPlaylists).toEqual(paginatedPlaylists);
  });
});
