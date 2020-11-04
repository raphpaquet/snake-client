const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function(data) {
  const conn = net.createConnection({
   IP,
   PORT
  });
  

    conn.on('connect', () => {
      conn.write('Name: RAP');
      console.log('Successfully connected to game server');
    })


    conn.on('data', (data) => {
      console.log('Message from server: ', data)
    })


    conn.setEncoding('utf8');
    return conn;
  }

  module.exports = { connect };