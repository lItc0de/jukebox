<template>
  <div>
    <ApolloQuery :query="require('./graphql/Playlists.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading">Loading</div>
        <c-playlist
          v-else-if="data"
          v-for="playlist in data.playlists"
          :playlist="playlist"
          :key="playlist.spotifyId"
        />
        <div v-else-if="error">{{ error.message }}</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import CPlaylist from '@/components/Playlist.vue';

export default {
  name: 'HomePage',

  components: {
    CPlaylist,
  },
};
</script>
