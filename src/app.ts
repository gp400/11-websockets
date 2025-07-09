import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {

    console.log(ws);

    console.log("Client connected")

    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('Hola desde el servidor');

    ws.on('close', () => {
        console.log('Client disconnected')
    })
});

console.log('Server running on port ws://localhost:3000')