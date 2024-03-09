const WebSocket = require('ws');

// WebSocketサーバーを作成し、ポート8080でリッスンします
const wss = new WebSocket.Server({ port: 8080 });

// 接続時の処理
wss.on('connection', function connection(ws) {
  console.log('新しいクライアントが接続しました');

  // メッセージを受信した時の処理
  ws.on('message', function incoming(message) {
    console.log('受信したメッセージ: %s', message);

    // メッセージをクライアントに送信
    ws.send('サーバーからのメッセージ: ' + message);
  });

  // クライアントとの接続が切断された時の処理
  ws.on('close', function close() {
    console.log('クライアントが接続を切断しました');
  });
});