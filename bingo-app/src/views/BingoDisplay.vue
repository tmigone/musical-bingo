<template>
  <div class="about">
    <song-card :showControls='false'></song-card>
  </div>
</template>

<script>
import SongCard from '@/components/SongCard.vue'

export default {
  name: 'song',
  components: {
    SongCard
  },
  data: () => ({
    songs: []
  }),
  mounted: function () {
  }
}
</script>
