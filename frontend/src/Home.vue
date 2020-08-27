<template>
  <div class="home-page">
    <ul v-if="playlists" class="playlists">
      <li class="playlists-header">
        <span />
        <span class="name">Name</span>
        <span>Owner</span>
        <span>Tracks</span>
      </li>
      <c-playlist
        v-for="edge in playlists.edges"
        :playlist="edge.node"
        :key="edge.node.id"
      />
    </ul>
    <div class="target" ref="target" />
  </div>
</template>

<script>
import CPlaylist from '@/components/Playlist.vue';
import query from './graphql/Playlists.gql';

const options = {
  root: null,
  threshold: 0,
};

export default {
  name: 'HomePage',

  components: {
    CPlaylist,
  },

  data() {
    return {
      observer: null,
      query: query,
    };
  },

  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersection, options);
    this.observer.observe(this.$refs.target);
  },

  methods: {
    handleIntersection(entries) {
      if (!this.playlists) return;
      if (!this.playlists.hasNextPage) return;

      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        this.fetchMore();
      });
    },

    fetchMore() {
      this.$apollo.queries.playlists.fetchMore({
        variables: {
          first: 50,
          cursor: this.playlists.edges[this.playlists.edges.length - 1].cursor,
        },
        updateQuery: (
          { playlists: previousPlaylists },
          { fetchMoreResult: { playlists: newPlaylists } }
        ) => {
          return {
            playlists: {
              __typename: newPlaylists.__typename,
              edges: [...previousPlaylists.edges, ...newPlaylists.edges],
              hasNextPage: newPlaylists.hasNextPage,
              totalCount: newPlaylists.totalCount,
            },
          };
        },
      });
    },
  },

  apollo: {
    playlists: {
      query,
      variables: { first: 50, cursor: '' },
    },
  },
};
</script>

<style lang="stylus" scoped>
.home-page
  padding 1rem
  max-width 700px

.playlists
  margin 0
  padding 0

  > .playlists-header
    display flex
    flex-direction row
    justify-content space-between

    > span
      flex 1

    > .name
      flex 3

  > .target
    height 4rem
    list-style none
</style>
