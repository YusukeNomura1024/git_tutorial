const WebSocket = require('ws');

// WebSocketクライアントを作成し、サーバーに接続
const ws = new WebSocket('ws://localhost:8080');

// サーバーからのメッセージを受け取った時の処理
ws.on('message', function incoming(message) {
  console.log('サーバーからのメッセージ: %s', message);
  connection.close();
});

// サーバーにメッセージを送信
ws.on('open', function open() {
  ws.send('クライアントからのメッセージ');
});