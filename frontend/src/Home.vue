<template>
  <div>
    <c-playlist :tracks="tracks" />
  </div>
</template>

<script>
import CPlaylist from '@/components/Playlist.vue';

export default {
  name: 'HomePage',

  components: {
    CPlaylist,
  },

  data() {
    return {
      tracks: [
        {
          id: 1,
          name: 'TrackOne',
          artist: 'Rrritalin',
          album: 'Random Dreams',
          liked: true,
          duration: '4:03',
          added: '2020-03-01',
          playing: false,
        },
        {
          id: 2,
          name: 'TrackTwo',
          artist: 'Rrritalin',
          album: 'Random Dreams',
          liked: true,
          duration: '4:03',
          added: '2020-03-01',
          playing: true,
        },
        {
          id: 3,
          name: 'TrackThree',
          artist: 'Rrritalin',
          album: 'Random Dreams',
          liked: true,
          duration: '4:03',
          added: '2020-03-01',
          playing: false,
        },
        {
          id: 4,
          name: 'TrackFour',
          artist: 'Rrritalin',
          album: 'Random Dreams',
          liked: true,
          duration: '4:03',
          added: '2020-03-01',
          playing: false,
        },
      ],
    };
  },
};
</script>
