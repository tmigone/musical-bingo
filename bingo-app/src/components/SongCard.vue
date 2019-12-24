<template>
  <div class="about">
    <button @click="bingoPlay">Bingo</button>
    <button @click="play">Play song</button>
    <button @click="pause">Pause song</button>
    <h1 v-if="showCountdown">{{ countdown }}</h1>
    <h1 v-if="showData">{{ name }}</h1>
    <h2 v-if="showData">{{ artist }}</h2>
  </div>
</template>

<script>
export default {
  name: 'song',
  properties: {
    showControls: {
      type: Boolean,
      default: false
    },
    songs: {
      type: Array,
      default: []
    }
  },
  components: {
  },
  data: () => ({
    song: null,
    name: '',
    artist: '',
    countdown: 10,
    timer: null,
    showData: false,
    showCountdown: false
  }),
  mounted: function () {
    this.reset()
  },
  methods: {
    reset: function () {
    },
    bingoPlay: function () {
      // Stop song if not finished
      if (this.song) this.song.pause()
      if (this.timer) clearInterval(this.timer)

      // Get new song and update details
      this.song = new Audio('sample-mp3s/1.mp3')
      this.name = 'Californication'
      this.artist = 'Red Hot Chilli Peppers'
      this.countdown = 10
      this.showData = false
      this.showCountdown = true

      // Minimal timer to allow song to load
      setTimeout(() => {
        // Fast-forward to 10% - 50% and play it
        this.song.currentTime = Math.floor(this.song.duration * (0.1 + Math.random() * 0.4))
        console.log(`[Song] Starting at ${this.song.currentTime}s`)
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
      this.song = new Audio('sample-mp3s/1.mp3')
      this.name = 'Californication'
      this.artist = 'Red Hot Chilli Peppers'
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
