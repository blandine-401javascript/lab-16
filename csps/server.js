'use strict';
const io = require('socket.io')(3000);



const cspsIO = io.of('/csps');

cspsIO.on('connection', (socket) => {
  console.log('csps connected to', socket.id);


  socket.on('join', (payload) => {
    socket.join(payload);
  });

  socket.on('pickup', (payload) => {
    console.log(payload);

    cspsIO.to('driver').emit('pickup', payload);
  });

  socket.on('delivered', (payload) => {
    cspsIO.to(payload.store).emit('delivered', payload);
  });
});

