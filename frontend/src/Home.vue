<template>
  <div>
    <ApolloQuery :query="require('./graphql/Tracks.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading">Loading</div>
        <c-playlist v-else-if="data" :tracks="data.tracks" />
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
