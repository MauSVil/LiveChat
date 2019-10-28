var app = require("express")();
var http = require('http').createServer(app);
var io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.send('Hola')
});

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('chat message', msg => {
        console.log('msg: ', JSON.stringify(msg))
        io.emit('chat message', msg)
    })
})

http.listen(3001, () => {
    console.log('listening on: 3001')
})