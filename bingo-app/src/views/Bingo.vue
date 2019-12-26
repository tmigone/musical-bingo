<template>
  <div class="about">
    <song-card></song-card>
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
