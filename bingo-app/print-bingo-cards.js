let songs = require('./src/songs.json')

let whiteSpace = ''

for (let index = 1; index < 12; index++) {
  whiteSpace = whiteSpace + nsbpSizeX(index) + ','
}
songs = songs.map(s => `${s.song} (${s.artist})`).join(',')
songs = whiteSpace + songs
console.log(songs)

console.log('http://bingo.saksena.net/bingo')

function nsbpSizeX (x) {
  let value = ''
  for (let index = 0; index < x; index++) {
    value = value + '&nbsp'
  }
  return value
}
