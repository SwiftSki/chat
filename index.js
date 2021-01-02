const express = require('express');

const app = express();
const server = require('http').creareServer(app);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('working');
});
  
server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
