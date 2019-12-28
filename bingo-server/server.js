const io = require('socket.io')()

io.on('connection', function (socket) {
  socket.on('event', function (data) {
    console.log(data)
    socket.broadcast.emit('event', data)
  })
})
io.listen(3000)
console.log('Listening on 3000')