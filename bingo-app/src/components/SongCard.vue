<template>
  <div class="about">
    <button style="width: 100px; height: 50px;margin-right:15px;" @click="bingoPlay">Bingo</button>
    <button style="width: 100px; height: 50px;margin-right:15px;" @click="play">Play</button>
    <button style="width: 100px; height: 50px;margin-right:15px;" @click="pause">Pause</button>
    <h1 v-if="showCountdown">{{ countdown }}</h1>
    <h1 v-if="showData">{{ name }}</h1>
    <h2 v-if="showData">{{ artist }}</h2>
  </div>
</template>

<script>
let COUNTDOWN = 15
export default {
  name: 'song',
  properties: {
    showControls: {
      type: Boolean,
      default: false
    }
  },
  components: {
  },
  data: () => ({
    song: null,
    name: '',
    artist: '',
    countdown: COUNTDOWN,
    timer: null,
    showData: false,
    showCountdown: false,
    songs: require('@/songs.json').sort(() => Math.random() - 0.5),
    songIndex: 0
  }),
  mounted: function () {
  },
  methods: {
    reset: function () {
    },
    bingoPlay: function () {
      // Stop song if not finished
      if (this.song) this.song.pause()
      if (this.timer) clearInterval(this.timer)

      // Get new song and update details
      let newSong = this.songs[ this.songIndex++ % this.songs.length ]
      this.song = new Audio(`songs/${newSong.file}`)
      this.name = newSong.song
      this.artist = newSong.artist
      this.countdown = COUNTDOWN
      this.showData = false
      this.showCountdown = true

      // Minimal timer to allow song to load
      setTimeout(() => {
        // Fast-forward to 10% - 50% and play it
        this.song.currentTime = Math.floor(this.song.duration * (0.1 + Math.random() * 0.4))
        this.song.play()

        // Handle countdown and reveal
        this.timer = setInterval(() => {
          this.countdown = this.countdown - 1
          if (this.countdown === 0) {
            this.showData = true
            this.showCountdown = false
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }, 500)
    },
    play: function () {
      // Stop song if not finished
      if (this.song) this.song.pause()
      if (this.timer) clearInterval(this.timer)

      // Get song and update details
      let currentSong = this.songs[ (this.songIndex - 1) % this.songs.length ]
      this.song = new Audio(`songs/${currentSong.file}`)
      this.name = currentSong.song
      this.artist = currentSong.artist
      this.showData = true
      this.showCountdown = false

      // Play it
      this.song.play()
    },
    pause: function () {
      // Stop song if not finished
      if (this.song) this.song.pause()
      if (this.timer) clearInterval(this.timer)
    }
  }
}
</script>

<style lang="css" scoped>
h1 {
  font-size: 10vw;
  margin-bottom: 0px;
}
h2 {
  font-size: 8vw;
  margin-top: 0px;
}
</style>
