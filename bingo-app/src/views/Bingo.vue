<template>
  <div class="about">
    <song-card :songs='songs'></song-card>
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
  })
}
</script>
