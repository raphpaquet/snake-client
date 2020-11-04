const net = require('net');

const connect = function(data) {
  //connect.on('data', data => console.log(data))
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });
  

    conn.on('connect', () => {
      conn.write('Name: RAP');
      // conn.write('Move: up');
      // //conn.write('Move: down');
      // setTimeout(() => conn.write('Move: left'), 1100);
      // setTimeout(() => conn.write('Move: up'), 2100);
      // setTimeout(() => conn.write('Move: right'), 3100);
      // const move = setInterval(() => conn.write('Move: right'), 100);
      // setTimeout(() =>  clearInterval(move), 5000)
      // conn.write('Move: right');
      console.log('Successfully connected to game server');
    })


    conn.on('data', (data) => {
      console.log('Message from server: ', data)
    })


    // interpret incoming data as text
    conn.setEncoding('utf8');
    return conn;
  }

  module.exports = { connect };
